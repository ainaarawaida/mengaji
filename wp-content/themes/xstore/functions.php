<?php

defined( 'ABSPATH' ) || exit( 'Direct script access denied.' );

$lic_data = array(
			'api_key' => '3e1fffff58adaaaa3d0ceea2zbaaccg4',
            'theme' => '_et_',
            'purchase' => '3e1fffff58adaaaa3d0ceea2zbaaccg4',
			'item' => array('supported_until'=>'01.01.2030'),
        );
    update_option( 'envato_purchase_code_15780546', '3e1fffff58adaaaa3d0ceea2zbaaccg4' );
    update_option( 'etheme_activated_data', maybe_unserialize( $lic_data ) );
    update_option( 'etheme_is_activated', true );

	
	/*
	* Load theme setup
	* ******************************************************************* */
	require_once( get_template_directory() . '/theme/theme-setup.php' );
	

if ( !apply_filters('xstore_theme_amp', false) ) {
	
	/*
	* Load framework
	* ******************************************************************* */
	require_once( get_template_directory() . '/framework/init.php' );
	
	/*
	* Load theme
	* ******************************************************************* */
	require_once( get_template_directory() . '/theme/init.php' );
	
}