<?php
/**
 * Overrides Core's wp-includes/block-patterns.php to add category descriptions for WP 6.2.
 *
 * @package gutenberg
 */

/**
 * Registers the block pattern categories.
 */
function gutenberg_register_core_block_patterns_categories() {
	// Register new core block pattern categories.
	register_block_pattern_category(
		'call-to-action',
		array(
			'label'       => _x( 'Call to Action', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Sections whose purpose is to trigger a specific action.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'team',
		array(
			'label'       => _x( 'Team', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'A variety of designs to display your team members.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'testimonials',
		array(
			'label'       => _x( 'Testimonials', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Share reviews and feedback about your brand/business.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'services',
		array(
			'label'       => _x( 'Services', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Briefly describe what your business does and how you can help.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'contact',
		array(
			'label'       => _x( 'Contact', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Display your contact information.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'about',
		array(
			'label'       => _x( 'About', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Introduce yourself.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'portfolio',
		array(
			'label'       => _x( 'Portfolio', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Showcase your latest work.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'gallery',
		array(
			'label'       => _x( 'Gallery', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Different layouts for displaying images.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'media',
		array(
			'label'       => _x( 'Media', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Different layouts containing video or audio.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'posts',
		array(
			'label'       => _x( 'Posts', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'Display your latest posts in lists, grids or other layouts.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'products',
		array(
			'label'       => _x( 'Products', 'Block pattern category', 'gutenberg' ),
			'description' => __( "Display your store's products in lists, grids or other layouts.", 'gutenberg' ),
		)
	);

	// Site building pattern categories.
	// Todo: register in the Site Editor only.
	register_block_pattern_category(
		'footer',
		array(
			'label'       => _x( 'Footers', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'A variety of footer designs displaying information and site navigation.', 'gutenberg' ),
		)
	);
	register_block_pattern_category(
		'header',
		array(
			'label'       => _x( 'Headers', 'Block pattern category', 'gutenberg' ),
			'description' => __( 'A variety of header designs displaying your site title and navigation.', 'gutenberg' ),
		)
	);
}
add_action( 'init', 'gutenberg_register_core_block_patterns_categories' );

/**
 * Registers Gutenberg-bundled patterns, with a focus on headers and footers
 * for site editing.
 *
 * @since 6.2.0
 * @access private
 */
function gutenberg_register_core_block_patterns() {
	if ( ! get_theme_support( 'core-block-patterns' ) ) {
		return;
	}

	$core_block_patterns = array(
		'centered-footer',
		'centered-footer-with-social-links',
		'centered-header',
		'centered-logo-in-navigation',
		'footer-with-background-color-and-three-columns',
		'footer-with-credit-line-and-navigation',
		'footer-with-large-font-size',
		'footer-with-navigation-and-credit-line',
		'footer-with-search-site-title-and-credit-line',
		'footer-with-site-title-and-credit-line',
		'header-with-large-font-size',
		'left-aligned-footer',
		'right-aligned-footer',
		'simple-header',
		'simple-header-inside-image',
		'simple-header-with-background-color',
		'simple-header-with-image',
		'simple-header-with-tagline',
		'simple-header-with-tagline-2',
		'site-title-and-menu-button',
		'site-title-and-vertical-navigation',
	);

	foreach ( $core_block_patterns as $core_block_pattern ) {
		register_block_pattern(
			'core/' . $core_block_pattern,
			require __DIR__ . '/block-patterns/' . $core_block_pattern . '.php'
		);
	}
}
add_action( 'init', 'gutenberg_register_core_block_patterns' );

/**
 * Register any patterns that the active theme may provide under its
 * `./patterns/` directory. Each pattern is defined as a PHP file and defines
 * its metadata using plugin-style headers. The minimum required definition is:
 *
 *     /**
 *      * Title: My Pattern
 *      * Slug: my-theme/my-pattern
 *      *
 *
 * The output of the PHP source corresponds to the content of the pattern, e.g.:
 *
 *     <main><p><?php echo "Hello"; ?></p></main>
 *
 * If applicable, this will collect from both parent and child theme.
 *
 * Other settable fields include:
 *
 *   - Description
 *   - Viewport Width
 *   - Categories       (comma-separated values)
 *   - Keywords         (comma-separated values)
 *   - Block Types      (comma-separated values)
 *   - Post Types       (comma-separated values)
 *   - Inserter         (yes/no)
 *
 * @since 6.0.0
 * @access private
 */
function gutenberg_register_theme_block_patterns() {
	$default_headers = array(
		'title'         => 'Title',
		'slug'          => 'Slug',
		'description'   => 'Description',
		'viewportWidth' => 'Viewport Width',
		'categories'    => 'Categories',
		'keywords'      => 'Keywords',
		'blockTypes'    => 'Block Types',
		'postTypes'     => 'Post Types',
		'inserter'      => 'Inserter',
		'templateTypes' => 'Template Types',
	);

	/*
	 * Register patterns for the active theme. If the theme is a child theme,
	 * let it override any patterns from the parent theme that shares the same slug.
	 */
	$themes   = array();
	$wp_theme = wp_get_theme();
	if ( $wp_theme->parent() ) {
		$themes[] = $wp_theme->parent();
	}
	$themes[] = $wp_theme;

	foreach ( $themes as $theme ) {
		$dirpath = $theme->get_stylesheet_directory() . '/patterns/';
		if ( ! is_dir( $dirpath ) || ! is_readable( $dirpath ) ) {
			continue;
		}
		if ( file_exists( $dirpath ) ) {
			$files = glob( $dirpath . '*.php' );
			if ( $files ) {
				foreach ( $files as $file ) {
					$pattern_data = get_file_data( $file, $default_headers );

					if ( empty( $pattern_data['slug'] ) ) {
						_doing_it_wrong(
							'_register_theme_block_patterns',
							sprintf(
							/* translators: %s: file name. */
								__( 'Could not register file "%s" as a block pattern ("Slug" field missing)', 'gutenberg' ),
								$file
							),
							'6.0.0'
						);
						continue;
					}

					if ( ! preg_match( '/^[A-z0-9\/_-]+$/', $pattern_data['slug'] ) ) {
						_doing_it_wrong(
							'_register_theme_block_patterns',
							sprintf(
							/* translators: %1s: file name; %2s: slug value found. */
								__( 'Could not register file "%1$s" as a block pattern (invalid slug "%2$s")', 'gutenberg' ),
								$file,
								$pattern_data['slug']
							),
							'6.0.0'
						);
					}

					if ( WP_Block_Patterns_Registry::get_instance()->is_registered( $pattern_data['slug'] ) ) {
						continue;
					}

					// Title is a required property.
					if ( ! $pattern_data['title'] ) {
						_doing_it_wrong(
							'_register_theme_block_patterns',
							sprintf(
							/* translators: %1s: file name; %2s: slug value found. */
								__( 'Could not register file "%s" as a block pattern ("Title" field missing)', 'gutenberg' ),
								$file
							),
							'6.0.0'
						);
						continue;
					}

					// For properties of type array, parse data as comma-separated.
					foreach ( array( 'categories', 'keywords', 'blockTypes', 'postTypes', 'templateTypes' ) as $property ) {
						if ( ! empty( $pattern_data[ $property ] ) ) {
							$pattern_data[ $property ] = array_filter(
								preg_split(
									'/[\s,]+/',
									(string) $pattern_data[ $property ]
								)
							);
						} else {
							unset( $pattern_data[ $property ] );
						}
					}

					// Parse properties of type int.
					foreach ( array( 'viewportWidth' ) as $property ) {
						if ( ! empty( $pattern_data[ $property ] ) ) {
							$pattern_data[ $property ] = (int) $pattern_data[ $property ];
						} else {
							unset( $pattern_data[ $property ] );
						}
					}

					// Parse properties of type bool.
					foreach ( array( 'inserter' ) as $property ) {
						if ( ! empty( $pattern_data[ $property ] ) ) {
							$pattern_data[ $property ] = in_array(
								strtolower( $pattern_data[ $property ] ),
								array( 'yes', 'true' ),
								true
							);
						} else {
							unset( $pattern_data[ $property ] );
						}
					}

					// Translate the pattern metadata.
					$text_domain = $theme->get( 'TextDomain' );
					//phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText, WordPress.WP.I18n.NonSingularStringLiteralContext, WordPress.WP.I18n.NonSingularStringLiteralDomain, WordPress.WP.I18n.LowLevelTranslationFunction
					$pattern_data['title'] = translate_with_gettext_context( $pattern_data['title'], 'Pattern title', $text_domain );
					if ( ! empty( $pattern_data['description'] ) ) {
						//phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText, WordPress.WP.I18n.NonSingularStringLiteralContext, WordPress.WP.I18n.NonSingularStringLiteralDomain, WordPress.WP.I18n.LowLevelTranslationFunction
						$pattern_data['description'] = translate_with_gettext_context( $pattern_data['description'], 'Pattern description', $text_domain );
					}

					// The actual pattern content is the output of the file.
					ob_start();
					include $file;
					$pattern_data['content'] = ob_get_clean();
					if ( ! $pattern_data['content'] ) {
						continue;
					}

					register_block_pattern( $pattern_data['slug'], $pattern_data );
				}
			}
		}
	}
}
remove_action( 'init', '_register_theme_block_patterns' );
add_action( 'init', 'gutenberg_register_theme_block_patterns' );
