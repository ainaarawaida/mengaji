<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://luqmannordin.com
 * @since      1.0.0
 *
 * @package    Mengaji
 * @subpackage Mengaji/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Mengaji
 * @subpackage Mengaji/public
 * @author     luqman <me@luqmannordin.com>
 */
class Mengaji_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Mengaji_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Mengaji_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/mengaji-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Mengaji_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Mengaji_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/mengaji-public.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( 'luq-translate', plugin_dir_url( __FILE__ ) . 'js/mengaji-luq-translate.js', array( 'jquery' ), '', false );
		wp_enqueue_script( 'luq-menucontrol', plugin_dir_url( __FILE__ ) . 'js/mengaji-luq-menucontrol.js', array( 'jquery' ), '', false );
		// wp_localize_script('luq-menucontrol', 'session', array(
        //     "currentuser" => wp_get_current_user() 
        // ));
	
	}

	
	public function add_css_head() {
		//print_r(wp_get_current_user()->ID);exit();
		if ( wp_get_current_user()->ID == 0 ) { //not login
		?>
		  <style>
			  #menu-1-3408d89b > li:nth-child(2),#menu-2-3408d89b > li:nth-child(2) {
				 display:none
		
			   }
		  </style>
		 <?php
		 } else{
			?>
			<style>
				#menu-1-3408d89b > li:nth-child(1),#menu-2-3408d89b > li:nth-child(1) {
				   display:none
		  
				 }
			</style>
		   <?php

		 }
	}




}
