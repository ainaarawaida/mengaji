<?php
/**
 * Description
 *
 * @package    dokan.php
 * @since      1.0.0
 * @author     stas
 * @link       http://xstore.8theme.com
 * @license    Themeforest Split Licence
 */

defined( 'ABSPATH' ) || exit( 'Direct script access denied.' );

$dokan_compatibles_actions = array(
	'start_wrap' => array(
		'dokan_edit_product_wrap_before',
		'dokan_dashboard_wrap_before',
	),
	'end_wrap' => array(
		'dokan_edit_product_wrap_after',
		'dokan_dashboard_wrap_after'
	),
);

foreach ($dokan_compatibles_actions['start_wrap'] as $key => $value) {
	add_action($value, function(){ ?>
		<div class="container content-page sidebar-mobile-bottom">
			<div class="sidebar-position-without">
				<div class="row">
					<div class="content col-md-12">
	<?php });
}

foreach ($dokan_compatibles_actions['end_wrap'] as $key => $value) {
	add_action($value, function(){ ?>
					</div>
				</div>
			</div>
		</div>
	<?php });
}

add_action( 'wp', function () {
	// Remove it after global lazy finish
	if ( ! is_admin() && defined('ET_CORE_VERSION') ) {
		
		// tweak for dokan img attributes with lazy load
		add_filter( 'dokan_product_image_attributes', function( $attr ) {
			$attr['img'] = array_merge( $attr['img'], array(
				'data-src' => array(),
				'data-sizes' => array(),
				'data-srcset' => array(),
				'srcset' => array(),
			));
			return $attr;
		});

	}
} );
