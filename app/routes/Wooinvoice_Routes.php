<?php

namespace Wooinvoice\routes;

abstract class Wooinvoice_Routes
{

    protected $routes;

    public function __construct()
    {
        $this->routes();
    }

    protected function routes()
    {
        $this->routes = apply_filters(
            'wooinvoice_route_lists',
            array(
                'get_data' => [
                    'method' => 'post',
                    'action' => 'Wooinvoice_Home_Controller@get_test',
                    "nonce" => 0,
                    'args' => [
                        'first_name' => ['required', 'string','sanitize:text'],
                        'last_name' => ['required', 'string','sanitize:text'],
                        'email' => ['required', 'email', 'sanitize:email'],
                        'password' => ['required', 'min:8'],
                        'confirm_password' => ['required', 'min:8', 'same:password'],
                        'file_name' => ['required']
                    ]
                ]
            )
        );
    }

    public function get_route($route_name)
    {
        return $this->routes[$route_name];
    }

    public function has_route($route_name)
    {
        return array_key_exists($route_name, $this->routes);
    }
}
