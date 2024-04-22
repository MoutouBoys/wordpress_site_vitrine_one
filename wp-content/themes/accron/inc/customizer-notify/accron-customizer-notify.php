<?php

class Accron_Customizer_Notify {

	private $recommended_actions;

	
	private $recommended_plugins;

	
	private static $instance;

	
	private $recommended_actions_title;

	
	private $recommended_plugins_title;

	
	private $dismiss_button;

	
	private $install_button_label;

	
	private $activate_button_label;

	
	private $accron_deactivate_button_label;
	
	
	private $config;

	
	public static function init( $config ) {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Accron_Customizer_Notify ) ) {
			self::$instance = new Accron_Customizer_Notify;
			if ( ! empty( $config ) && is_array( $config ) ) {
				self::$instance->config = $config;
				self::$instance->setup_config();
				self::$instance->setup_actions();
			}
		}

	}

	
	public function setup_config() {

		global $accron_customizer_notify_recommended_plugins;
		global $accron_customizer_notify_recommended_actions;

		global $install_button_label;
		global $activate_button_label;
		global $accron_deactivate_button_label;

		$this->recommended_actions = isset( $this->config['recommended_actions'] ) ? $this->config['recommended_actions'] : array();
		$this->recommended_plugins = isset( $this->config['recommended_plugins'] ) ? $this->config['recommended_plugins'] : array();

		$this->recommended_actions_title = isset( $this->config['recommended_actions_title'] ) ? $this->config['recommended_actions_title'] : '';
		$this->recommended_plugins_title = isset( $this->config['recommended_plugins_title'] ) ? $this->config['recommended_plugins_title'] : '';
		$this->dismiss_button            = isset( $this->config['dismiss_button'] ) ? $this->config['dismiss_button'] : '';

		$accron_customizer_notify_recommended_plugins = array();
		$accron_customizer_notify_recommended_actions = array();

		if ( isset( $this->recommended_plugins ) ) {
			$accron_customizer_notify_recommended_plugins = $this->recommended_plugins;
		}

		if ( isset( $this->recommended_actions ) ) {
			$accron_customizer_notify_recommended_actions = $this->recommended_actions;
		}

		$install_button_label    = isset( $this->config['install_button_label'] ) ? $this->config['install_button_label'] : '';
		$activate_button_label   = isset( $this->config['activate_button_label'] ) ? $this->config['activate_button_label'] : '';
		$accron_deactivate_button_label = isset( $this->config['accron_deactivate_button_label'] ) ? $this->config['accron_deactivate_button_label'] : '';

	}

	
	public function setup_actions() {

		// Register the section
		add_action( 'customize_register', array( $this, 'accron_plugin_notification_customize_register' ) );

		// Enqueue scripts and styles
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'accron_customizer_notify_scripts_for_customizer' ), 0 );

		/* ajax callback for dismissable recommended actions */
		add_action( 'wp_ajax_quality_customizer_notify_dismiss_action', array( $this, 'accron_customizer_notify_dismiss_recommended_action_callback' ) );

		add_action( 'wp_ajax_ti_customizer_notify_dismiss_recommended_plugins', array( $this, 'accron_customizer_notify_dismiss_recommended_plugins_callback' ) );

	}

	
	public function accron_customizer_notify_scripts_for_customizer() {

		wp_enqueue_style( 'accron-customizer-notify-css', get_template_directory_uri() . '/inc/customizer-notify/css/accron-customizer-notify.css', array());

		wp_enqueue_style( 'accron-plugin-install' );
		wp_enqueue_script( 'accron-plugin-install' );
		wp_add_inline_script( 'accron-plugin-install', 'var pagenow = "customizer";' );

		wp_enqueue_script( 'accron-updates' );

		wp_enqueue_script( 'accron-customizer-notify-js', get_template_directory_uri() . '/inc/customizer-notify/js/accron-customizer-notify.js', array( 'customize-controls' ));
		wp_localize_script(
			'accron-customizer-notify-js', 'AccronCustomizercompanionObject', array(
				'accron_ajaxurl'            => esc_url(admin_url( 'admin-ajax.php' )),
				'accron_template_directory' => esc_url(get_template_directory_uri()),
				'accron_base_path'          => esc_url(admin_url()),
				'accron_activating_string'  => __( 'Activating', 'accron' ),
			)
		);

	}

	
	public function accron_plugin_notification_customize_register( $wp_customize ) {

		
		require_once get_template_directory() . '/inc/customizer-notify/accron-customizer-notify-section.php';

		$wp_customize->register_section_type( 'Accron_Customizer_Notify_Section' );

		$wp_customize->add_section(
			new Accron_Customizer_Notify_Section(
				$wp_customize,
				'Accron-customizer-notify-section',
				array(
					'title'          => $this->recommended_actions_title,
					'plugin_text'    => $this->recommended_plugins_title,
					'dismiss_button' => $this->dismiss_button,
					'priority'       => 0,
				)
			)
		);

	}

	
	public function accron_customizer_notify_dismiss_recommended_action_callback() {

		global $accron_customizer_notify_recommended_actions;

		$action_id = ( isset( $_GET['id'] ) ) ? $_GET['id'] : 0;

		echo esc_html($action_id); 

		if ( ! empty( $action_id ) ) {
			
			if ( get_theme_mod( 'accron_customizer_notify_show' ) ) {

				$accron_customizer_notify_show_recommended_actions = get_theme_mod( 'accron_customizer_notify_show' );
				switch ( $_GET['todo'] ) {
					case 'add':
						$accron_customizer_notify_show_recommended_actions[ $action_id ] = true;
						break;
					case 'dismiss':
						$accron_customizer_notify_show_recommended_actions[ $action_id ] = false;
						break;
				}
				echo esc_html($accron_customizer_notify_show_recommended_actions);
				
			} else {
				$accron_customizer_notify_show_recommended_actions = array();
				if ( ! empty( $accron_customizer_notify_recommended_actions ) ) {
					foreach ( $accron_customizer_notify_recommended_actions as $accron_lite_customizer_notify_recommended_action ) {
						if ( $accron_lite_customizer_notify_recommended_action['id'] == $action_id ) {
							$accron_customizer_notify_show_recommended_actions[ $accron_lite_customizer_notify_recommended_action['id'] ] = false;
						} else {
							$accron_customizer_notify_show_recommended_actions[ $accron_lite_customizer_notify_recommended_action['id'] ] = true;
						}
					}
					echo esc_html($accron_customizer_notify_show_recommended_actions);
				}
			}
		}
		die(); 
	}

	
	public function accron_customizer_notify_dismiss_recommended_plugins_callback() {

		$action_id = ( isset( $_GET['id'] ) ) ? $_GET['id'] : 0;

		echo esc_html($action_id); 

		if ( ! empty( $action_id ) ) {
		// Get the list of dismissed plugin IDs from the options table
        $dismissed_plugins = get_option( 'accron_customizer_notify_dismissed_plugins', array() );		

			switch ( $_GET['todo'] ) {
            case 'add':
                // Remove the plugin ID from the dismissed list when re-added
                if ( isset( $dismissed_plugins[ $action_id ] ) ) {
                    unset( $dismissed_plugins[ $action_id ] );
                    update_option( 'accron_customizer_notify_dismissed_plugins', $dismissed_plugins );
                }
                break;
            case 'dismiss':
                // Add the plugin ID to the dismissed list
                if ( ! isset( $dismissed_plugins[ $action_id ] ) ) {
                    $dismissed_plugins[ $action_id ] = true;
                    update_option( 'accron_customizer_notify_dismissed_plugins', $dismissed_plugins );
                }
                break;
			}
		}
		die(); 
	}
}