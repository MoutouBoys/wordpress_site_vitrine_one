<?php
function accron_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'accron_custom_header_args', array(
		'default-image'          => '',
		'default-text-color'     => '0083E3',
		'width'                  => 2000,
		'height'                 => 200,
		'flex-height'            => true,
		'wp-head-callback'       => 'accron_header_style',
	) ) );
}
add_action( 'after_setup_theme', 'accron_custom_header_setup' );

if ( ! function_exists( 'accron_header_style' ) ) :

function accron_header_style() {
	$header_text_color = get_header_textcolor();

	?>
	<style type="text/css">
	<?php
		if ( ! display_header_text() ) :
	?>
		.site-title,
		.site-description {
			position: absolute;
			clip: rect(1px, 1px, 1px, 1px);
		}
	<?php
		else :
	?>
		body .header h4.site-title,
		body .header p.site-description {
			color: #<?php echo esc_attr( $header_text_color ); ?>;
		}
	<?php endif; ?>
	</style>
	<?php
}
endif;
