<?php

use DeliciousBrains\WPMigrations\Database\AbstractMigration;

class WooinvoiceTemplates extends AbstractMigration
{

    public function run()
    {
        global $wpdb;

        $sql = "
        CREATE TABLE `{$wpdb->prefix}wooinvoice_templates` (
            `id` int NOT NULL AUTO_INCREMENT,
            `name` text NOT NULL,
            `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          ) {$this->get_collation()};
        ";

        maybe_create_table($wpdb->prefix . "wooinvoice_templates", $sql);
    }

    public function rollback()
    {
        global $wpdb;
        $wpdb->query("DROP TABLE `{$wpdb->prefix}wooinvoice_templates`");
    }
}
