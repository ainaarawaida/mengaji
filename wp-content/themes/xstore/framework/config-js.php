<?php
/**
 * Description
 *
 * @package    config-js.php
 * @since      1.0.0
 * @author     stas
 * @link       http://xstore.8theme.com
 * @license    Themeforest Split Licence
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

return array(
	'etheme' => array(
		'title' => esc_html__('Global etheme script', 'xstore'),
		'name' => 'etheme',
		'file'=> '/js/etheme.min.js',
		'deps' => array('jquery'),
		'in_footer'=> true
	),
	'breadcrumbs-effect-mouse' => array(
		'title' => esc_html__('Breadcrumbs effect mouse', 'xstore'),
		'name' => 'breadcrumbs-effect-mouse',
		'file'=> '/js/modules/breadcrumbs/effect-mouse.min.js',
		'in_footer'=> true
	),
	'breadcrumbs-effect-text-scroll' => array(
		'title' => esc_html__('Breadcrumbs effect text scroll', 'xstore'),
		'name' => 'breadcrumbs-effect-text-scroll',
		'file'=> '/js/modules/breadcrumbs/effect-text-scroll.min.js',
		'in_footer'=> true
	),
	'portfolio' => array(
		'title' => esc_html__('Portfolio', 'xstore'),
		'name' => 'portfolio',
		'file'=> '/js/portfolio.min.js',
		'in_footer'=> true
	),
	'fixed-header' => array(
		'title' => esc_html__('Fixed Header', 'xstore'),
		'name' => 'fixed-header',
		'file'=> '/js/modules/fixedHeader.min.js',
		'in_footer'=> true
	),
	'fixed-footer' => array(
		'title' => esc_html__('Fixed Footer', 'xstore'),
		'name' => 'fixed-footer',
		'file'=> '/js/modules/fixed-footer.min.js',
		'in_footer'=> true
	),
	'back-top' => array(
		'title' => esc_html__('Back to top', 'xstore'),
		'name' => 'back-top',
		'file'=> '/js/modules/back-top.min.js',
		'in_footer'=> true
	),
	// swiper js
	'swiper-slider' => array(
		'title' => esc_html__('Swiper slider', 'xstore'),
		'name' => 'swiper-slider',
		'file'=> '/js/modules/swiper.min.js',
		'in_footer'=> true
	),
	// tabs js
	'etheme-tabs' => array(
		'title' => esc_html__('Etheme Tabs', 'xstore'),
		'name' => 'etheme-tabs',
		'file'=> '/js/modules/tabs.min.js',
		'in_footer'=> true
	),
	// libraries
	'fancy-select' => array(
		'title' => esc_html__('Fancy select library', 'xstore'),
		'name' => 'fancy-select',
		'file'=> '/js/modules/libs/fancy.select.min.js',
		'in_footer'=> true
	),
	// sticky kit
	'sticky-kit' => array(
		'title' => esc_html__('Sticky kit library', 'xstore'),
		'name' => 'sticky-kit',
		'file'=> '/js/modules/libs/jquery.sticky-kit.min.js',
		'in_footer'=> true
	),
	'etheme_optimize' => array(
		'title' => esc_html__('Etheme Optimize', 'xstore'),
		'name' => 'etheme_optimize',
		'file'=> '/js/etheme.optimize.min.js',
		'deps' => array(),
		'in_footer'=> true
	),
	'et_imagesLoaded' => array(
		'title' => esc_html__('Images loaded library', 'xstore'),
		'name' => 'et_imagesLoaded',
		'file'=> '/js/libs/imagesLoaded.js',
		'version' => '4.1.4',
		'deps' => array(),
		'in_footer'=> true
	),
	'et_slick_slider' => array(
		'title' => esc_html__('Slick slider library', 'xstore'),
		'name' => 'et_slick_slider',
		'file'=> '/js/libs/slick.min.js',
		'version' => '1.8.1',
		'deps' => array(),
		'in_footer'=> true
	),
	'et_isotope' => array(
		'title' => esc_html__('Isotope', 'xstore'),
		'name' => 'et_isotope',
		'file'=> '/js/modules/isotope.min.js',
		'in_footer'=> true
	),
//	'load_css' => array(
//		'title' => esc_html__('Load CSS library', 'xstore'),
//		'name' => 'load_css',
//		'file'=> '/js/libs/loadCss.js',
//		'in_footer'=> true
//	),
//	'on_load_css' => array(
//		'title' => esc_html__('OnLoad CSS library', 'xstore'),
//		'name' => 'on_load_css',
//		'file'=> '/js/libs/onLoadCss.js',
//		'in_footer'=> true
//	),
	'jquery_lazyload' => array(
		'title' => esc_html__('jQuery lazyload library', 'xstore'),
		'name' => 'jquery_lazyload',
		'file'=> '/js/libs/jquery.lazyload.js',
		'version' => '2.0.0',
		'deps' => array(),
		'in_footer'=> true
	),
	'photoswipe_optimize' => array(
		'title' => esc_html__('Photoswipe library', 'xstore'),
		'name' => 'photoswipe_optimize',
		'file'=> '/js/photoswipe-optimize.min.js',
		'in_footer'=> true
	),
	// sticky sidebar
	'sticky_sidebar' => array(
		'title' => esc_html__('Sticky sidebar', 'xstore'),
		'name' => 'sticky_sidebar',
		'file'=> '/js/modules/stickySidebar.min.js',
		'in_footer'=> true
	),
	// off-canvas sidebar
	'canvas_sidebar' => array(
		'title' => esc_html__('Sidebar off-canvas', 'xstore'),
		'name' => 'canvas_sidebar',
		'file'=> '/js/modules/sidebarCanvas.min.js',
		'in_footer'=> true
	),
	// widgets open/close
	'widgets_open_close' => array(
		'title' => esc_html__('Widgets open/close', 'xstore'),
		'name' => 'widgets_open_close',
		'file'=> '/js/modules/widgetsOpenClose.min.js',
		'in_footer'=> true
	),
	// widgets show more
	'widgets_show_more' => array(
		'title' => esc_html__('Widgets show more', 'xstore'),
		'name' => 'widgets_show_more',
		'file'=> '/js/modules/widgetsShowMore.min.js',
		'in_footer'=> true
	),
	// product categories widget
	'product_categories_widget' => array(
		'title' => esc_html__('Product categories widget accordion', 'xstore'),
		'name' => 'product_categories_widget',
		'file'=> '/js/modules/productCategoriesWidget.min.js',
		'in_footer'=> true
	),
	// nav_menu widget
	'nav_menu_widget' => array(
		'title' => esc_html__('Navigation menu widget', 'xstore'),
		'name' => 'nav_menu_widget',
		'file'=> '/js/modules/customMenuAccordion.min.js',
		'in_footer'=> true
	),
	// post backstretch
	'backstretch_single_postImg' => array(
		'title' => esc_html__('Post backstretch', 'xstore'),
		'name' => 'backstretch_single_postImg',
		'version' => '2.1.18',
		'file'=> '/js/postBackstretchImg.min.js',
		'in_footer'=> true
	),
	'comments_form_validation' => array(
		'title' => esc_html__('Comments form validation', 'xstore'),
		'name' => 'comments_form_validation',
		'file'=> '/js/modules/commentsForm.min.js',
		'in_footer'=> true
	),
	// woocommerce
	'etheme_mini_cart' => array(
		'title' => esc_html__('Etheme Mini-cart', 'xstore'),
		'name' => 'etheme_mini_cart',
		'file'=> '/js/mini-cart.min.js',
		'in_footer'=> true
	),
	// single product variable ajax add to cart
	'etheme_spv_ajax_add_to_cart' => array(
		'title' => esc_html__('Etheme Mini-cart', 'xstore'),
		'name' => 'etheme_spv_ajax_add_to_cart',
		'file'=> '/js/ajax-spv-add-to-cart.min.js',
		'in_footer'=> true
	),
	'mobile_panel' => array(
		'title' => esc_html__('Mobile Panel', 'xstore'),
		'name' => 'mobile_panel',
		'file'=> '/js/modules/mobilePanel.min.js',
		'in_footer'=> true
	),
	// header parts
	'ajax_search' => array(
		'title' => esc_html__('Ajax search', 'xstore'),
		'name' => 'ajax_search',
		'file'=> '/js/modules/ajaxSearch.min.js',
		'in_footer'=> true
	),
	// mobileMenu
	'mobile_menu' => array(
		'title' => esc_html__('Mobile menu', 'xstore'),
		'name' => 'mobile_menu',
		'file'=> '/js/modules/mobileMenu.min.js',
		'in_footer'=> true
	),
	// All departments menu
	'all_departments_menu' => array(
		'title' => esc_html__('All departments menu', 'xstore'),
		'name' => 'all_departments_menu',
		'file'=> '/js/modules/all-departments-menu.min.js',
		'in_footer'=> true
	),
	// onePageMenu
	'one_page_menu' => array(
		'title' => esc_html__('One page menu', 'xstore'),
		'name' => 'one_page_menu',
		'file'=> '/js/modules/onePageMenu.min.js',
		'in_footer'=> true
	),
	'mega_menu' => array(
		'title' => esc_html__('Mega menu', 'xstore'),
		'name' => 'mega_menu',
		'file'=> '/js/modules/mega-menu.min.js',
		'in_footer'=> true
	),
	'menu_item_on_click' => array(
		'title' => esc_html__('Menu item on click', 'xstore'),
		'name' => 'menu_item_on_click',
		'file'=> '/js/modules/menu-item-on-click.min.js',
		'in_footer'=> true
	),
	'menu_item_on_touch' => array(
		'title' => esc_html__('Menu item on touch', 'xstore'),
		'name' => 'menu_item_on_touch',
		'file'=> '/js/modules/menu-item-on-touch.min.js',
		'in_footer'=> true
	),
	// menu_posts
	'menu_posts' => array(
		'title' => esc_html__('Menu posts', 'xstore'),
		'name' => 'menu_posts',
		'file'=> '/js/modules/menuPosts.min.js',
		'in_footer'=> true
	),
	// promo text
	'promo_text_carousel' => array(
		'title' => esc_html__('Promo text carousel', 'xstore'),
		'name' => 'promo_text_carousel',
		'file'=> '/js/modules/promoTextCarousel.min.js',
		'in_footer'=> true
	),
	// yith wishlist
	'et_wishlist' => array(
		'title' => esc_html__('Wishlist', 'xstore'),
		'name' => 'et_wishlist',
		'file'=> '/js/modules/wishlist.min.js',
		'in_footer'=> true
	),
	// woocommerce
	'et_woocommerce' => array(
		'title' => esc_html__('WooCommerce', 'xstore'),
		'name' => 'et_woocommerce',
		'file'=> '/js/modules/woocommerce.min.js',
		'in_footer'=> true
	),
	'et_single_product' => array(
		'title' => esc_html__('Single product', 'xstore'),
		'name' => 'et_single_product',
		'file'=> '/js/modules/single-product.min.js',
		'in_footer'=> true
	),
	'et_single_product_sticky_images' => array(
		'title' => esc_html__('Single product sticky images', 'xstore'),
		'name' => 'et_single_product_sticky_images',
		'file'=> '/js/modules/single-product-sticky-product-images.min.js',
		'in_footer'=> true
	),
	'et_single_product_vertical_gallery' => array(
		'title' => esc_html__('Single product vertical gallery', 'xstore'),
		'name' => 'et_single_product_vertical_gallery',
		'file'=> '/js/modules/single-product-vertical-gallery.min.js',
		'in_footer'=> true
	),
	// variation gallery
	'et_single_product_variation_gallery' => array(
		'title' => esc_html__('Single product variation gallery', 'xstore'),
		'name' => 'et_single_product_variation_gallery',
		'file'=> '/js/modules/variation-gallery.min.js',
		'deps' => array('jquery', 'wp-util'),
		'in_footer'=> true
	),
	'et_single_product_builder' => array(
		'title' => esc_html__('Single product builder', 'xstore'),
		'name' => 'et_single_product_builder',
		'file'=> '/js/modules/single-product-builder.min.js',
		'in_footer'=> true
	),
	// request a quote only yet
	'call_popup' => array(
		'title' => esc_html__('Call popup (request quote)', 'xstore'),
		'name' => 'call_popup',
		'file'=> '/js/modules/call-popup.min.js',
		'in_footer'=> true
	),
	// cart page
	'cart_page' => array(
		'title' => esc_html__('Cart page', 'xstore'),
		'name' => 'cart_page',
		'file'=> '/js/modules/cart-page.min.js',
		'in_footer'=> true
	),
	// cart progress bar
	'cart_progress_bar' => array(
		'title' => esc_html__('Cart progress bar', 'xstore'),
		'name' => 'cart_progress_bar',
		'file'=> '/js/modules/cartProgressBar.min.js',
		'in_footer'=> true
	),
	// filters area
	'filters_area' => array(
		'title' => esc_html__('Filters area', 'xstore'),
		'name' => 'filters_area',
		'file'=> '/js/modules/filtersArea.min.js',
		'in_footer'=> true
	),
	// elements
	'the_look' => array(
		'title' => esc_html__('The look', 'xstore'),
		'name' => 'the_look',
		'file'=> '/js/modules/theLook.min.js',
		'in_footer'=> true
	),
	'et_countdown' => array(
		'title' => esc_html__('Countdown', 'xstore'),
		'name' => 'et_countdown',
		'file'=> '/js/modules/countdown.min.js',
		'in_footer'=> true
	),
	// compatibilities
	'et_yith_compare' => array(
		'title' => esc_html__('Compare', 'xstore'),
		'name' => 'et_yith_compare',
		'file'=> '/js/modules/compare.min.js',
		'in_footer'=> true
	),
	'et_sb_infinite_scroll_load_more' => array(
		'title' => esc_html__('Infinite scroll & ajax pagination', 'xstore'),
		'name' => 'et_sb_infinite_scroll_load_more',
		'file'=> '/js/modules/infinite_scroll_load_more.min.js',
		'in_footer'=> true
	),
);