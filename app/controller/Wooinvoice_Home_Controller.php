<?php
namespace Wooinvoice\controller;

use Wooinvoice\classes\Wooinvoice_Controller_Handler;

final class Wooinvoice_Home_Controller extends Wooinvoice_Controller_Handler
{
    public function get_test() {
        wp_send_json([
            'status' => 'success',
            'message' => esc_html__("huuray",'wooinvoice'),
            'data'=>['sdf']
        ]);
    }
}
