<?php

namespace Wooinvoice\classes;

use BitApps\WPValidator\Validator;
use WP_REST_Request;

abstract class  Wooinvoice_Controller_Handler
{
    public WP_REST_Request $request;

    public function __construct($req, $args)
    {
        $validator = new Validator;
        $customMessages = [
            'required' => sprintf(esc_html__("%s is missing", 'wooinvoice'), ":attribute"),
            'string' => sprintf(esc_html__("%s cannot contain any numerics", 'wooinvoice'), ":attribute"),
            'between' => sprintf(esc_html__('The %s must be given between %s & %s', 'wooinvoice'), ":attribute", ":min", ":max"),
            'size' => sprintf(esc_html__('The account number must consist of :size characters', 'wooinvoice'), ":size"),
            'same' => sprintf(esc_html__('The %s and %s must match', 'wooinvoice'), ":attribute", ':other'),
        ];
        $validation = $validator->make($req, $args, $customMessages);

        if ($validation->fails()) {
            wp_send_json($validation->errors(), true);
        }
        $this->request    = new WP_REST_Request($_SERVER['REQUEST_METHOD']);
        $req_method    = $_SERVER['REQUEST_METHOD'] === 'GET' ? 'set_query_params' : 'set_body_params';

        $this->request->$req_method($validation->validated());
    }
}
