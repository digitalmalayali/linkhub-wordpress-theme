<?php

// Enqueue style.css

add_action('wp_enqueue_scripts', 'linkhub_enqueue_styles');

function linkhub_enqueue_styles()
{
	wp_enqueue_style(
		'linkhub-style',
		get_stylesheet_uri()
	);
}

// Enqueue block variations

add_action('enqueue_block_editor_assets', 'linkhub_enqueue_block_variations');

function linkhub_enqueue_block_variations()
{
	wp_enqueue_script(
		'linkhub-block-variations',
		get_theme_file_uri('assets/js/block-variations.js'),
		array(
			'wp-blocks',
			'wp-dom-ready',
			'wp-i18n'
		),
		wp_get_theme()->get('Version'),
		true
	);
}

// Register block styles

add_action('init', 'linkhub_register_block_styles');

function linkhub_register_block_styles()
{
	// Rounded style for site logo
	register_block_style('core/site-logo', array(
		'name'         => 'rounded',
		'label'        => __('Rounded', 'linkhub'),
		'inline_style' => '.wp-block-site-logo.is-style-rounded img {
			border-radius: 100%;
		}'
	));
	// Align center for summary
	register_block_style('core/details', array(
		'name'         => 'align-center',
		'label'        => __('Align Center', 'linkhub'),
		'inline_style' => '.wp-block-details.is-style-align-center {
			text-align: center;
		}'
	));
}

// Register pattern category

add_action('init', 'linkhub_register_pattern_categories');

function linkhub_register_pattern_categories()
{
	register_block_pattern_category('linkhub/patterns', array(
		'label'       => __('Linkhub Patterns', 'linkhub'),
		'description' => __('Custom patterns for Linkhub theme.', 'linkhub')
	));
}
