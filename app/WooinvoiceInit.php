<?php

namespace Wooinvoice;

use Wooinvoice\classes\WooinvoiceListTableClass;

class WooinvoiceInit
{
    private static $instance;
    public static function instance()
    {
        if(is_null(self::$instance)){
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function wooinvoice_add_sidebar() {
        add_menu_page(
            esc_html__('WooInvoice','wooinvoice'),          // Page title
            'WooInvoice List',                // Menu title
            'manage_options',             // Capability
            'wooinvoice-list',           // Menu slug
            [self::$instance,'show_listing']                             // Position
        );
    }

    public function show_listing(){
        
          // Create an instance of our custom list table class
    $customListTable = new WooinvoiceListTableClass();

    // Prepare the table data
    $customListTable->prepare_items();
    ?>
        <div class="wrap">
            <form method='post' name='frm_search_post' action="<?php echo $_SERVER['PHP_SELF'] ?>?page=wooinvoice-list">
                <h1><?php esc_html_e("Template List",'wooinvoice') ?></h1>
                <?php $customListTable->display(); ?>
            </form>
        </div>
    <?php
    }
   
}
