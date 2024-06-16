<?php
namespace Wooinvoice ;

use DeliciousBrains\WPMigrations\Database\Migrator;

/**
 * Fired during plugin activation
 *
 * @link       https://github.com/ri2rathod
 * @since      1.0.0
 *
 * @package    Wooinvoice
 * @subpackage Wooinvoice/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Wooinvoice
 * @subpackage Wooinvoice/includes
 * @author     Ri2Rathod <rathodriteshrock@gmail.com>
 */
class WooinvoiceActivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		$migrate =  Migrator::instance();
		$migrate->setup();
		$migrate->run();

	}

}
