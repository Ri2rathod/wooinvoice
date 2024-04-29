<?php

namespace Wooinvoice;

class WooinvoiceLoadWoocommerce
{
    private static $instance;
    public static function instance()
    {
        if(is_null(self::$instance)){
            self::$instance = new self();
        }
        return self::$instance;
    }
    public function wooinvoice_add_column_email_settings(array $setting_columns ) {
         array_splice( $setting_columns, 4, 0, ['wooinvoice-elementor-editor'  => ''] ); // splice in at position 3
         return $setting_columns;
    }
    public function wooinvoice_add_column_email_settings_field( ) {

        echo '<td class="wc-email-settings-table-wooinvoice-elementor-editor">
                <a class="button alignright" href="' . esc_url( admin_url( 'admin.php?page=wc-settings&tab=email&section=' . strtolower( $email_key ) ) ) . '">' . esc_html__( 'Manage', 'woocommerce' ) . '</a>
            </td>';


    }
}
