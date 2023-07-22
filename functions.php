<?php
/**
 * VITE
 */
define( "IS_VITE_DEVELOPMENT", true );
define( 'JS_LOAD_IN_FOOTER', true ) ;
define( 'JS_DEPENDENCY', array() ) ; // array( 'jquery' ) as example
define( 'DIST_DEF', 'dist' );
define( 'DIST_URI',  get_template_directory_uri() . '/' . DIST_DEF );
define( 'DIST_PATH', get_template_directory()     . '/' . DIST_DEF );
define('VITE_SERVER', 'http://localhost:3000');
define('VITE_ENTRY_POINT', '/main.js');

function cors_http_header() {
	header( "Access-Control-Allow-Origin: *" );
}
add_action( 'send_headers', 'cors_http_header' );

add_action( 'wp_enqueue_scripts', function() {
	if ( defined( 'IS_VITE_DEVELOPMENT') && IS_VITE_DEVELOPMENT === true ) {
		function vite_head_module_hook() {
			echo '<script type="module" crossorigin src="' . VITE_SERVER . VITE_ENTRY_POINT . '"></script>';
		}
		add_action( 'wp_footer', 'vite_head_module_hook' );
	} else {
		$manifest = json_decode( file_get_contents( DIST_PATH . '/manifest.json'), true );
		if ( is_array( $manifest ) ) {
			$manifest_key = array_keys( $manifest );
			if ( isset( $manifest_key[0] ) ) {
				foreach( @$manifest["main.css"] as $css_file ) {
					wp_enqueue_style( 'main', DIST_URI . '/' . $css_file );
				}
				$js_file = @$manifest["main.js"]['file'];
				if ( ! empty( $js_file ) ) {
					wp_enqueue_script( 'main', DIST_URI . '/' . $js_file, JS_DEPENDENCY, '', JS_LOAD_IN_FOOTER );
				}
			}
		}
	}
} );
