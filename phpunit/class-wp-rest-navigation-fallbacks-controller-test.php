<?php
/**
 * Unit tests covering WP_REST_Navigation_Fallbacks_Controller functionality.
 *
 * Note: that these tests are designed to provide high level coverage only. The majority of the tests
 * are made directly against the WP_Navigation_Fallbacks_Gutenberg class as this:
 *
 * - is where the bulk of the logic is.
 * - is also consumed by the Navigation block's server side rendering.
 *
 * @package WordPress
 * @subpackage REST API
 */

/**
 * @group restapi
 * @group navigation
 */
class WP_REST_Navigation_Fallbacks_Controller_Test extends WP_Test_REST_Controller_Testcase {

	protected static $admin_user;
	protected static $editor_user;

	public static function wpSetUpBeforeClass( $factory ) {
		self::$admin_user = $factory->user->create( array( 'role' => 'administrator' ) );

		self::$editor_user = $factory->user->create( array( 'role' => 'editor' ) );
	}

	public function set_up() {
		parent::set_up();

		wp_set_current_user( self::$admin_user );
	}

	/**
	 * @covers WP_REST_Navigation_Fallbacks_Controller::register_routes
	 *
	 * @since 6.3.0 Added Navigation Fallbacks endpoint.
	 */
	public function test_register_routes() {
		$routes = rest_get_server()->get_routes();

		$this->assertArrayHasKey( '/wp-block-editor/v1/navigation-fallbacks', $routes, 'Fallback route should be registered.' );
	}

	/**
	 * @covers WP_REST_Navigation_Fallbacks_Controller
	 *
	 * @since 6.3.0 Added Navigation Fallbacks endpoint.
	 */
	public function test_should_not_return_menus_for_users_without_permissions() {

		wp_set_current_user( self::$editor_user );

		$request  = new WP_REST_Request( 'GET', '/wp-block-editor/v1/navigation-fallbacks' );
		$response = rest_get_server()->dispatch( $request );
		$data     = $response->get_data();

		$this->assertEquals( 403, $response->get_status(), 'Response should indicate user does not have permission.' );

		$this->assertEquals( 'rest_cannot_create', $data['code'], 'Response should indicate user cannot create.' );

		$this->assertEquals( 'Sorry, you are not allowed to create Navigation Menus as this user.', $data['message'], 'Response should indicate failed request status.' );
	}

	/**
	 * @covers WP_REST_Navigation_Fallbacks_Controller
	 *
	 * @since 6.3.0 Added Navigation Fallbacks endpoint.
	 */
	public function test_get_item() {

		$request  = new WP_REST_Request( 'GET', '/wp-block-editor/v1/navigation-fallbacks' );
		$response = rest_get_server()->dispatch( $request );
		$data     = $response->get_data();

		$this->assertEquals( 200, $response->get_status(), 'Status should indicate successful request.' );

		$this->assertIsArray( $data );

		$this->assertArrayHasKey( 'id', $data );

		$this->assertEquals( 'wp_navigation', get_post_type( $data['id'] ) );

		// Check that only a single Navigation fallback was created.
		$navs_in_db = $this->get_navigations_in_database();

		$this->assertCount( 1, $navs_in_db, 'Only the existing Navigation menus should be present in the database.' );

	}

	/**
	 * @covers WP_REST_Navigation_Fallbacks_Controller
	 *
	 * @since 6.3.0 Added Navigation Fallbacks endpoint.
	 */
	public function test_get_item_schema() {
		$request  = new WP_REST_Request( 'OPTIONS', '/wp-block-editor/v1/navigation-fallbacks' );
		$response = rest_get_server()->dispatch( $request );
		$data     = $response->get_data();

		$this->assertEquals( 200, $response->get_status(), 'Status should indicate successful request.' );

		$this->assertArrayHasKey( 'schema', $data, '"schema" key should exist in response.' );

		$schema = $data['schema'];

		$this->assertEquals( 'object', $schema['type'] );

		$this->assertArrayHasKey( 'id', $schema['properties'], 'Schema should have an "id" property.' );
		$this->assertEquals( 'integer', $schema['properties']['id']['type'], 'Schema "id" property should be an integer.' );
		$this->assertTrue( $schema['properties']['id']['readonly'], 'Schema "id" property should be readonly.' );
	}

	private function get_navigations_in_database() {
		$navs_in_db = new WP_Query(
			array(
				'post_type'      => 'wp_navigation',
				'post_status'    => 'publish',
				'posts_per_page' => -1,
				'orderby'        => 'date',
				'order'          => 'DESC',
			)
		);

		return $navs_in_db->posts ? $navs_in_db->posts : array();
	}

	/**
	 * @doesNotPerformAssertions
	 */
	public function test_prepare_item() {
		// Covered by the core test.
	}

	/**
	 * @doesNotPerformAssertions
	 */
	public function test_context_param() {
		// Covered by the core test.
	}

	/**
	 * @doesNotPerformAssertions
	 */
	public function test_get_items() {
		// Covered by the core test.
	}

	/**
	 * @doesNotPerformAssertions
	 */
	public function test_create_item() {
		// Controller does not implement create_item().
	}

	/**
	 * @doesNotPerformAssertions
	 */
	public function test_update_item() {
		// Controller does not implement update_item().
	}

	/**
	 * @doesNotPerformAssertions
	 */
	public function test_delete_item() {
		// Controller does not implement delete_item().
	}



}
