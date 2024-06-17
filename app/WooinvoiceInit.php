<?php

namespace Wooinvoice;

use Wooinvoice\classes\WooinvoiceListTableClass;

use function Kucrut\Vite\enqueue_asset;

class WooinvoiceInit
{
    private static $instance;
    public static function instance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function wooinvoice_add_sidebar()
    {
        add_menu_page(
            esc_html__('WooInvoice', 'wooinvoice'),          // Page title
            'WooInvoice List',                // Menu title
            'manage_options',             // Capability
            'wooinvoice-list',           // Menu slug
            [self::$instance, 'show_listing']                             // Position
        );
        add_menu_page(
            esc_html__('WooInvoice', 'wooinvoice'),
            esc_html__('WooInvoice', 'wooinvoice'),
            'manage_options', // Capability
            'wooinvoice-builder', // Menu slug
            [self::$instance, 'load_builder'],                            // Position
            'dashicons-admin-generic', // Icon (optional)
            6 // Position (optional)
        );
    }

    public function show_listing()
    {

        // Create an instance of our custom list table class
        $customListTable = new WooinvoiceListTableClass();

        // Prepare the table data
        $customListTable->prepare_items();
?>
        <div class="wrap">
            <form method='post' name='frm_search_post' action="<?php echo $_SERVER['PHP_SELF'] ?>?page=wooinvoice-list">
                <h1><?php esc_html_e("Template List", 'wooinvoice') ?></h1>
                <?php $customListTable->display(); ?>
            </form>
        </div>
    <?php
    }

    public function load_builder()
    {
        ?><div id="root"></div><?php
        wp_register_style('wooinvoice-dashbord-helper', false);
        wp_add_inline_style('wooinvoice-dashbord-helper', '#wpcontent, #footer { margin-left: 0px !important;padding-left: 0px !important; }
        html.wp-toolbar { padding-top: 0px !important; }
        #adminmenuback, #adminmenuwrap, #wpadminbar, #wpfooter,#adminmenumain, #screen-meta { display: none !important; }
        #wpcontent .notice { display:none; }');
        wp_enqueue_style('wooinvoice-dashbord-helper');
        enqueue_asset(
            WOOINVOICE_PLUGIN_PATH . 'dist',
            'src/main.jsx',
            [
                'handle' => 'wooinvoice-dashbord',
                'dependencies' => [],
                'css-dependencies' => [],
                'css-media' => 'all',
                'css-only' => false,
                'in-footer' => false,
            ]
        );
        wp_localize_script(
            'wooinvoice-dashbord',
            'wooinvoice',
            [
                'wooinvoice_ajax_url' => admin_url('admin-ajax.php'),
                'wooinvoice_plugin_url' => WOOINVOICE_PLUGIN_URL,
                '_ajax_nonce' => wp_create_nonce('wooinvoice_ajax_nonce')
            ]
        );
    }
}
