<?php

namespace Wooinvoice\routes;

use Exception;
use WP_REST_Request;

final class Wooinvoice_Routes_Handler extends Wooinvoice_Routes
{
    public  $routes;
    public function __construct() {
		parent::__construct();
        add_action('wp_ajax_nopriv_wooinvoice_ajax',[$this,'wooinvoice_ajax_callback']);
        add_action('wp_ajax_wooinvoice_ajax',[$this,'wooinvoice_ajax_callback']);
    }

    public function wooinvoice_ajax_callback() {
        try {
		
			//check if request route key exists in route array
			if ( $this->has_route( $_REQUEST['route_name'] ) ) :
				//get request route value from route array
				$route = $this->get_route($_REQUEST['route_name']);

				//check if request route method is same as required method
				if (strtolower($route['method']) !== strtolower($_SERVER['REQUEST_METHOD'])) :
					$error = __( 'Method is not allowed', 'wpbookit' );
					throw new Exception($error, 405);
				endif;

				//check route value have nonce if not set nonce to 100
				if (!isset($route['nonce'])) :
					$route['nonce'] = 1;
				endif;

				if ($route['nonce'] === 1) :
					//verify request nonce
					if ( !wp_verify_nonce($_REQUEST['_ajax_nonce']??'', 'wooinvoice_ajax_nonce') || !is_user_logged_in()) :
						$error = __('Invalid nonce in request', 'wpbookit');
						throw new Exception($error, 419);
					endif;
				endif;

				//call function
				$this->call($route);
			else :
				$error = __('Route not found', 'wpbookit');
				throw new Exception($error, 404);
			endif;
		} catch (Exception $e) {

			$code    = $e->getCode();
			$message = $e->getMessage();

			header("Status: $code $message");

			wp_send_json(
				array(
					'status'  => false,
					'message' => $e->getMessage()
				)
			);
		}
		wp_die();
    }
	protected function call($route) {
	
		list($class, $method) = explode('@', $route['action']);
	
		(new ("Wooinvoice\\controller\\".$class)(array_merge($_REQUEST,$_FILES),$route['args']??[]))->$method();
	}
    
}
    