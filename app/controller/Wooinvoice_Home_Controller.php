<?php

namespace Wooinvoice\controller;

use Wooinvoice\classes\Wooinvoice_Controller_Handler;

final class Wooinvoice_Home_Controller extends Wooinvoice_Controller_Handler
{
    public function get_config()
    {
        $user = wp_get_current_user();

        wp_send_json([
            'status' => 'success',
            'data' => [
                'user' => [
                    'avatar' => get_avatar_url($user->ID),
                ],
                'settings' => [

                ],
                'widgets' => [],
                'template_content' => [
                    
                ]
            ]
        ]);
    }
}
