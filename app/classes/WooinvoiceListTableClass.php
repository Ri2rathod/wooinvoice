<?php
    
namespace Wooinvoice\classes;

use Wooinvoice\models\WooinvoiceTemplatesModel;
use WP_List_Table;

class WooinvoiceListTableClass extends WP_List_Table {

    public function __construct() {
        parent::__construct([
            'singular' => 'wp_list_text_link',
            'plural'   => 'wp_list_test_links',
            'ajax'     => false
        ]);
    }

    public function get_columns() {
        return [
            'cb'      => '<input type="checkbox" />',
            'id'      => esc_html__('ID','wooinvoice'),
            'name'    => esc_html__('Template Name','wooinvoice'),
            'action'   => esc_html__('Action','wooinvoice')
        ];
    }
    public function get_bulk_actions() {
        return [
            'delete' => 'Delete'
        ];
    }

    public function column_default($item, $column_name) {
        switch ($column_name) {
            case 'id':
            case 'name':
            case 'action':
                return $item[$column_name];
            default:
                return print_r($item, true);
        }
    }

    public function column_cb($item) {
        return sprintf(
            '<input type="checkbox" name="id[]" value="%s" />', $item['id']
        );
    }
    public function column_action($item) {
        return sprintf(
            '<a type="button" class="button button-primary" href="%s">Edit</a>
            <button type="button" class="button button-danger" data-id="%s">Delete</button>',
             admin_url("admin.php?page=wooinvoice-builder&id={$item['id']}"),$item['id']
        );
    }

    public function get_sortable_columns() {
        return [
            'id'    => ['id', true],
            'name'  => ['name', false],
            'email' => ['email', false]
        ];
    }

    public function prepare_items() {
        $per_page = 10;
        $columns = $this->get_columns();
        $hidden = [];
        $sortable = $this->get_sortable_columns();
        $this->_column_headers = [$columns, $hidden, $sortable];

        $this->process_bulk_action();
        // Example data
        $current_page = $this->get_pagenum();
        list($data,$total_items) = $this->get_templates($per_page,$current_page);


        $this->set_pagination_args([
            'total_items' => $total_items,
            'per_page'    => $per_page,
            'total_pages' => ceil($total_items / $per_page)
        ]);

        $this->items = $data;
    }

    public function process_bulk_action() {
        if ('delete' === $this->current_action()) {
            // Handle delete action
            if (!empty($_POST['id'])) {
                if(is_array($_POST['id'])){
                    foreach ($_POST['id'] as  $value) {
                        WooinvoiceTemplatesModel::delete_where(['id'=>$value]);
                    }
                }
                wp_redirect(add_query_arg());
                exit;
            }
        }
    }

    public function get_templates($per_page,$current_page) {
        $orderby = (!empty($_REQUEST['orderby'])) ? $_REQUEST['orderby'] : 'id';
        $order = (!empty($_REQUEST['order'])) ? $_REQUEST['order'] : 'asc';
        return	[
            WooinvoiceTemplatesModel::builder()->select('SQL_CALC_FOUND_ROWS *')->limit($per_page)->offset(($current_page -1) * $per_page)->order_by($orderby,strtoupper($order))->get(ARRAY_A),
            WooinvoiceTemplatesModel::builder()->select('FOUND_ROWS()')->value()
    
        ];
    }

}
?>

