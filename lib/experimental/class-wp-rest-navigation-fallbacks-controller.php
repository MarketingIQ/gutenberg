<?php
/**
 * WP_REST_Navigation_Fallbacks_Controller class
 *
 * REST Controller to create/fetch a fallback Navigation Menu.
 *
 * @package Gutenberg
 * @subpackage REST_API
 * @since 6.3.0
 */

/**
 * Import dependencies.
 */
require __DIR__ . '/class-wp-navigation-fallbacks-gutenberg.php';

/**
 * REST Controller to create/fetch a fallback Navigation Menu.
 */
class WP_REST_Navigation_Fallbacks_Controller extends WP_REST_Controller {

	/**
	 * The Post Type for the Controller
	 *
	 * @var string
	 */
	private $post_type;

	/**
	 * Constructs the controller.
	 *
	 * @since 5.9.0
	 */
	public function __construct() {
		$this->namespace = 'wp-block-editor/v1';
		$this->rest_base = 'navigation-fallbacks';
		$this->post_type = 'wp_navigation';
	}

	/**
	 * Registers the controllers routes.
	 *
	 * @return void
	 */
	public function register_routes() {

		// Lists a single nav item based on the given id or slug.
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
					'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::READABLE ),
				),
				'schema' => array( $this, 'get_item_schema' ),
			)
		);
	}

	/**
	 * Checks if a given request has access to read fallbacks.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
	 */
	public function get_item_permissions_check( $request ) {

		$post_type = get_post_type_object( $this->post_type );

		// Getting fallbacks requires creating and reading `wp_navigation` posts.
		if ( ! current_user_can( $post_type->cap->create_posts ) || ! current_user_can( 'edit_theme_options' ) || ! current_user_can( 'edit_posts' ) ) {
			return new WP_Error(
				'rest_cannot_create',
				__( 'Sorry, you are not allowed to create Navigation Menus as this user.', 'gutenberg' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		if ( 'edit' === $request['context'] && ! current_user_can( $post_type->cap->edit_posts ) ) {
			return new WP_Error(
				'rest_forbidden_context',
				__( 'Sorry, you are not allowed to edit Navigation Menus as this user.', 'gutenberg' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		return true;
	}

	/**
	 * Gets the most appropriate fallback Navigation Menu.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function get_item( $request ) {
		$post = WP_Navigation_Fallbacks_Gutenberg::get_fallback_menu();

		if ( empty( $post ) ) {
			return rest_ensure_response( new WP_Error( 'no_fallback_menu', __( 'No fallback menu found.', 'gutenberg' ), array( 'status' => 404 ) ) );
		}

		$response = $this->prepare_item_for_response( $post, $request );

		return $response;
	}

	/**
	 * Retrieves the fallbacks' schema, conforming to JSON Schema.
	 *
	 * @return array Item schema data.
	 */
	public function get_item_schema() {
		if ( $this->schema ) {
			return $this->add_additional_fields_schema( $this->schema );
		}

		$this->schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'navigation-fallbacks',
			'type'       => 'object',
			'properties' => array(
				'id' => array(
					'description' => __( 'The unique identifier for the Navigation Menu.', 'gutenberg' ),
					'type'        => 'integer',
					'context'     => array( 'view', 'edit', 'embed' ),
					'readonly'    => true,
				),
			),
		);

		return $this->add_additional_fields_schema( $this->schema );
	}

	/**
	 * Matches the post data to the schema we want.
	 *
	 * @param WP_Post         $item The wp_navigation Post object whose response is being prepared.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response $response The response data.
	 */
	public function prepare_item_for_response( $item, $request ) {
		$data = array();

		$schema = $this->get_item_schema();

		if ( isset( $schema['properties']['id'] ) ) {
			$data['id'] = (int) $item->ID;
		}

		$context = ! empty( $request['context'] ) ? $request['context'] : 'view';
		$data    = $this->add_additional_fields_to_object( $data, $request );
		$data    = $this->filter_response_by_context( $data, $context );

		return rest_ensure_response( $data );
	}
}
