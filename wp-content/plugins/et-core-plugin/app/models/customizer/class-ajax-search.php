<?php if ( ! defined( 'ABSPATH' ) ) exit( 'No direct script access allowed' );
/**
 * Etheme_ajax_search.
 *
 * Return data for ajax search request.
 *
 * @since   1.4.3
 * @version 1.0.1
 * @var     $request {array} list of all $_REQUEST data.
 * @log 1.0.1
 * ADDED: search_product_variation
 */

class Etheme_ajax_search {
	// ! Declare default variables
	public $request = array();

	// ! Main construct/ setup variables
	function __construct(){
		$this->request = $_REQUEST;
	}

	/**
	 * Add actions.
	 *
	 * Actions for ajax search.
	 *
	 * @since   1.4.3
	 * @version 1.0.0
	 */
	public function actions(){
		add_action( 'wp_ajax_etheme_ajax_search', array( $this, 'search_results' ));
		add_action( 'wp_ajax_nopriv_etheme_ajax_search', array( $this, 'search_results' ));
	}

	/**
	 * Search for posts and pages.
	 *
	 * @since   1.4.3
	 * @version 1.0.0
	 * @param   {array} $args Query args.
	 * @return  {array}       Posts.
	 */
	public function get_posts_results( $args ) {
		$args['s'] = $this->request['query'];
		return get_posts( http_build_query( $args ) );
	}

	/**
	 * Gets products based on the search type specified.
	 *
	 * @since   1.4.3
	 * @version 1.0.1
	 * @param   {string} $type Type of search.
	 * @param   {array}  $args Query args.
	 * @return  {array}        Posts.
	 * @log 1.0.1
	 * ADDED: search_product_variation
	 */
	public function get_products_results( $type, $args = array() ) {
		global $woocommerce;
		$order_by      = 'relevance';
		$ordering_args = $woocommerce->query->get_catalog_ordering_args( $order_by, 'ASC' );
		$defaults      = $args;
		$visibility    = wc_get_product_visibility_term_ids();

		$args['post_type']  = array('product');
		$args['orderby']    = $ordering_args['orderby'];
		$args['order']      = $ordering_args['order'];
		$args['meta_query'] = WC()->query->get_meta_query(); // WPCS: slow query ok.
		$args['tax_query']  = array(); // WPCS: slow query ok.

		$args['tax_query'][] = array(
			'taxonomy' => 'product_visibility',
			'field'    => 'term_taxonomy_id',
			'terms'    => $visibility['exclude-from-search'],
			'operator' => 'NOT IN',
		);

		if ( 'yes' === get_option( 'woocommerce_hide_out_of_stock_items' ) ) {
			$args['tax_query'][] = array(
				'taxonomy' => 'product_visibility',
				'field'    => 'term_taxonomy_id',
				'terms'    => $visibility['outofstock'],
				'operator' => 'NOT IN',
			);
		}

		if ( isset( $this->request['product_cat'] ) && $this->request['product_cat'] && $this->request['product_cat'] !=='0') {
			$args['tax_query'][] = array(
				'taxonomy' => 'product_cat',
				'field'    => 'slug',
				'terms'    => esc_attr( $this->request['product_cat'] ),
			);
		}

		switch ( $type ) {
			case 'product':
				$args['s'] = $this->request['query'];
				$args['post_type']    = array( 'product' );
				break;
			case 'sku':
				$query                = $this->request['query'];
				$args['s']            = '';
				$args['post_type']    = array( 'product' );
				$args['meta_query'][] = array(
					'key'   => '_sku',
					'value' => $query,
					'compare' => 'LIKE',
				);
				break;
		}

		if (etheme_get_option('search_product_variation_et-desktop', 0)){
			$args['post_type'][] = 'product_variation';
		}

		if ( isset($this->request['lang']) && ! empty($this->request['lang']) ) {
			$args['lang'] = $this->request['lang'];
		}
		
		$args = apply_filters('etheme_ajax_search_products_query', $args);

		return get_posts( http_build_query( $args ) );
	}

	/**
	 * Search_results.
	 *
	 * etheme_ajax_search callback.
	 * This function in "app/models/customizer/frontend/frontend-script.js".
	 *
	 * @since   1.4.3
	 * @version 1.0.1
	 * @return  {json} array of suggestions for search
	 * @log 1.0.1
	 * ADDED: search_product_variation
	 */
	public function search_results() {
		$query          = $this->request['query'];
		$products       = array();
		$posts          = array();
		$pages          = array();
		$portfolio          = array();
		$sku_products   = array();
		$suggestions    = array();
		$results        = array();
		$search_options = get_theme_mod( 'search_results_content_et-desktop', array( 'products', 'posts') );
		$search_sku     = get_theme_mod( 'search_by_sku_et-desktop', 1 );
		$counts = array(
			'products' => '',
			'page' => '',
			'post' => '',
			'etheme_portfolio' => '',
		);
		$limits = array(
			'products' => 5,
			'page' => 6,
			'post' => 5,
			'etheme_portfolio' => 5,
		);

		if ( !class_exists('WooCommerce') ) $search_options = array_diff($search_options, array('products'));

		$args = array(
			's'                   => $query,
			'orderby'             => '',
			'post_type'           => array(),
			'post_status'         => 'publish',
			'posts_per_page'      => 100,
			'ignore_sticky_posts' => 1,
			'post_password'       => '',
			'suppress_filters'    => false,
		);

		if ( in_array( 'products', $search_options ) ) {
			// WCMp vendor plugin compatibility
			if ( function_exists('get_wcmp_vendor_settings') && get_transient('wcmp_spmv_exclude_products_data')) {
				$spmv_excludes = get_transient('wcmp_spmv_exclude_products_data');
				$excluded_order = (get_wcmp_vendor_settings('singleproductmultiseller_show_order', 'general')) ? get_wcmp_vendor_settings('singleproductmultiseller_show_order', 'general') : 'min-price';
				$post__not_in = ( isset( $spmv_excludes[$excluded_order] ) ) ? $spmv_excludes[$excluded_order] : array();
				$args['post__not_in'] = $post__not_in;
			}
			
			$products     = $this->get_products_results( 'product', $args );
			if ( $search_sku ) {
				$sku_products = $this->get_products_results( 'sku', $args );
			}
		}

		if ( in_array( 'posts', $search_options ) ) {
			$args['post_type'] = 'post';
			$posts = $this->get_posts_results( $args );
			if ( isset($this->request['show_count'])) {
				$counts['post'] = count( $posts );
			}
		}

		if ( in_array( 'pages', $search_options ) ) {
			$args['post_type'] = 'page';
			$pages = $this->get_posts_results( $args );
			if ( isset($this->request['show_count'])) {
				$counts['page'] = count( $pages );
			}
		}

		if ( in_array( 'portfolio', $search_options ) ) {
			$args['post_type'] = 'etheme_portfolio';
			$portfolio = $this->get_posts_results( $args );
			if ( isset($this->request['show_count'])) {
				$counts['etheme_portfolio'] = count( $portfolio );
			}
		}

//		$products = array_merge( $products, $sku_products );

		$products = $products + $sku_products;
		if ( isset($this->request['show_count'])) {
			$counts['products'] = count( $products );
		}

		foreach ( $search_options as $key => $value ) {
			switch ( $value ) {
				case 'products':
					$results = array_merge( $results, $products );
					break;
				case 'posts':
					$results = array_merge( $results, $posts );
					break;
				case 'pages':
					$results = array_merge( $results, $pages );
					break;
				case 'portfolio':
					$results = array_merge( $results, $portfolio );
					break;
			}
		}
		
		$arrow = '<svg version="1.1" width="1em" height="1em" class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M99.1186676,94.8567734L10.286458,6.0255365h53.5340881c1.6616173,0,3.0132561-1.3516402,3.0132561-3.0127683
	S65.4821625,0,63.8205452,0H3.0137398c-1.6611279,0-3.012768,1.3516402-3.012768,3.0127683v60.8068047
	c0,1.6616135,1.3516402,3.0132523,3.012768,3.0132523s3.012768-1.3516388,3.012768-3.0132523V10.2854862L94.8577423,99.117691
	C95.4281311,99.6871109,96.1841202,100,96.9886856,100c0.8036041,0,1.5595856-0.3128891,2.129982-0.882309
	C100.2924805,97.9419327,100.2924805,96.0305862,99.1186676,94.8567734z"></path></svg>';
		
		foreach ( $results as $key => $post ) {
			if ( in_array( $post->post_type, array( 'product', 'product_variation' ) ) ) {
				if ( isset($this->request['full_screen']) ) {
					if ( $limits['products'] < 1 ) {
						continue;
					}
					$limits['products']--;
				}
				$product       = wc_get_product( $post );
				$product_image = wp_get_attachment_image_src( $product->get_image_id(), 'woocommerce_thumbnail' );

				if ($product->get_type() == 'variation'){
					$product_image = wp_get_attachment_image_src($product->get_image_id(), 'woocommerce_thumbnail');
				}
				
				add_filter( 'woocommerce_get_availability_class', 'etheme_wc_get_availability_class', 20, 2 );
				$product_args = array(
					'type'  => 'Product',
					'id'    => $product->get_id(),
					'value' => $product->get_title(),
					'url'   => $product->get_permalink(),
					'img'   => ( $product_image[0] ) ? $product_image[0] : wc_placeholder_img_src( 'woocommerce_thumbnail' ),
					'arrow' => $arrow,
					'price' => $product->get_price_html(),
					'stock' => wc_get_stock_html($product),
					'in_stock' => $product->is_in_stock(),
					'all_count' => $counts['products'],
					'date'  => '',
				);
				remove_filter( 'woocommerce_get_availability_class', 'etheme_wc_get_availability_class', 20, 2 );
				
				if ( isset($this->request['full_screen']) ) {
					
					unset($product_args['arrow']);
					
					$product_attr = array(
						'href = "' . $product->add_to_cart_url() . '"',
						'quantity="1"',
						'class = "' . implode(
							' ',
							array_filter(
								array(
									'button',
									'product_type_' . $product->get_type(),
									$product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
									$product->supports( 'ajax_add_to_cart' ) && $product->is_purchasable() && $product->is_in_stock() ? 'ajax_add_to_cart' : '',
								)
							)
						) . '"',
						'data-product_id = "' . $product->get_id() . '"',
						'data-product_sku = "' . $product->get_sku() . '"',
						'aria-label = "' . $product->add_to_cart_description() . '"',
						'rel="nofollow"',
					);
					
					$product_args = array_merge($product_args,
					array(
						'add_to_cart_text' => $product->add_to_cart_text(),
						'add_to_cart_args' => implode(' ', $product_attr)
					));
				}

				$suggestions[] = $product_args;
				
			} elseif( in_array( $post->post_type, array( 'page', 'post', 'etheme_portfolio' ) ) ) {
				if ( isset($this->request['full_screen']) ) {
					if ( $limits[$post->post_type] < 1 ) {
						continue;
					}
					$limits[$post->post_type]--;
				}
				$args = array(
					'type'  => ucfirst( str_replace( array('page', 'post', 'etheme_portfolio'), array('Pages', 'Post', 'Portfolio'), $post->post_type) ),
					'id'    => $post->ID,
					'value' => get_the_title( $post->ID ),
					'url'   => get_the_permalink( $post->ID ),
					'img'   => get_the_post_thumbnail_url( $post->ID, 'medium' ),
					'arrow' => $arrow,
					'date'  => get_the_date( '', $post->ID ),
					'all_count' => $counts[$post->post_type],
				);
				
				if ( isset($this->request['full_screen']) ) {
					if ( $post->post_type == 'post' ) {
						ob_start();
						etheme_byline(
							array(
								'author' => 0,
					            'time' => 0,
					            'ID' => $post->ID,
					            'views_counter' => true
							)
						);
						$args['meta'] = ob_get_clean();
//						$excerpt_length = etheme_get_option('excerpt_length', 25);
//						ob_start();
//						if ( $excerpt_length > 0 ) {
//							if ( strlen($post->post_excerpt) > 0 ) {
//								$excerpt_length = apply_filters( 'excerpt_length', $excerpt_length );
//								$excerpt_more = apply_filters( 'excerpt_more', ' ' . '[&hellip;]' );
//								$excerpt         = wp_trim_words( $post->post_excerpt, $excerpt_length, $excerpt_more );
//								echo do_shortcode(apply_filters( 'wp_trim_excerpt', $excerpt, $excerpt ));
//							}
//							else
//								echo do_shortcode($post->post_excerpt);
//						}
//						$args['excerpt'] = ob_get_clean();
						$args['post_class'] = implode(' ', get_post_class( 'blog-post post-grid byline-on content-grid', $post->ID ) );
						
					}
					elseif ( $post->post_type == 'etheme_portfolio' ) {
						$args['post_class'] = implode(' ', get_post_class( 'portfolio-item port-style-default', $post->ID ) );
						ob_start();
						etheme_project_categories($post->ID);
						$args['categories'] = ob_get_clean();
					}
				}
				
				$suggestions[] = $args;
			}
		}

		$suggestions = $this->parse_suggestions( $products, $suggestions );

		wp_send_json( array( 'suggestions' => $suggestions ) );
	}


	/**
	 * Parse suggestions
	 *
	 * Parse products suggestions to prevent it duplication.
	 *
	 * @since   1.4.3
	 * @version 1.0.0
	 * @param   {array} $results     Search results.
	 * @param   {array} $suggestions Unparsed suggestions.
	 * @return  {array}              Unique(parsed) suggestions.
	 */
	public function parse_suggestions( $results = array(), $suggestions = array() ) {
		$results         = array_map( function ( $n ) { return $n ? true : false; }, $results );
		$needs_filtering = count( array_filter( $results ) ) > 1;

		if ( $needs_filtering ) {
			$suggestions = array_map( 'unserialize', array_unique( array_map( 'serialize', $suggestions ) ) );
		}

		return $suggestions;
	}
}

$Etheme_ajax_search = new Etheme_ajax_search();
$Etheme_ajax_search -> actions();