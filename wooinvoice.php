<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://github.com/ri2rathod
 * @since             1.0.0
 * @package           Wooinvoice
 *
 * @wordpress-plugin
 * Plugin Name:       WooInvoice - Elementor Builder
 * Plugin URI:        https://github.com/ri2rathod
 * Description:       Using the Power Of the Elementor Builder Generate beautiful PDF invoices for your WooCommerce orders.
 * Version:           1.0.0
 * Author:            Ri2Rathod
 * Author URI:        https://github.com/ri2rathod/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wooinvoice
 * Domain Path:       /languages
 */

use Wooinvoice\Wooinvoice;
use Wooinvoice\Wooinvoice_Activator;
use Wooinvoice\Wooinvoice_Deactivator;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WOOINVOICE_VERSION', '1.0.0' );


// Require once the Composer Autoload
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
} else {
	die( 'Something went wrong' );
}




/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wooinvoice-activator.php
 */
function activate_wooinvoice() {
	Wooinvoice_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wooinvoice-deactivator.php
 */
function deactivate_wooinvoice() {
	Wooinvoice_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wooinvoice' );
register_deactivation_hook( __FILE__, 'deactivate_wooinvoice' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wooinvoice() {

	$plugin = new Wooinvoice();
	$plugin->run();

}
run_wooinvoice();
