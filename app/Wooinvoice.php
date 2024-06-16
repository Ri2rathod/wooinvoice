<?php
namespace Wooinvoice ;


/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://github.com/ri2rathod
 * @since      1.0.0
 *
 * @package    Wooinvoice
 * @subpackage Wooinvoice/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Wooinvoice
 * @subpackage Wooinvoice/includes
 * @author     Ri2Rathod <rathodriteshrock@gmail.com>
 */
class Wooinvoice {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Wooinvoice_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'WOOINVOICE_VERSION' ) ) {
			$this->version = WOOINVOICE_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'wooinvoice';
		$this->loader = new Wooinvoice_Loader();

		$this->set_locale();


		$this->load_admin();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Wooinvoice_Loader. Orchestrates the hooks of the plugin.
	 * - Wooinvoice_i18n. Defines internationalization functionality.
	 * - Wooinvoice_Admin. Defines all hooks for the admin area.
	 * - Wooinvoice_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Wooinvoice_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Wooinvoice_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Wooinvoice_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

	public function load_admin()  {

		// $this->loader->add_filter('woocommerce_email_setting_columns',WooinvoiceLoadWoocommerce::instance(),'wooinvoice_add_column_email_settings');
		// $this->loader->add_action('woocommerce_email_setting_column_wooinvoice-elementor-editor',WooinvoiceLoadWoocommerce::instance(),'wooinvoice_add_column_email_settings');
		$this->loader->add_action('init',WooinvoiceInit::instance(),'wooinvoice_add_sidebar');
	}

}
