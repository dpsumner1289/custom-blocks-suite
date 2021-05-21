<?php
// block registration
function register_guten_intro_block()
{
    wp_register_script(
        'gutenberg-intro-block',
        CTCT_BLOCKS_URL . 'dist/blocks.build.js',
        array('wp-blocks', 'wp-element', 'wp-editor'),
    );

    // register our block's base CSS  
    wp_register_style(
        'gutenberg-intro-block-style',
        CTCT_BLOCKS_URL . 'dist/blocks.style.build.css',
        array('wp-blocks'),
    );

    // register our block's editor-specific CSS
    if (is_admin()) :
        wp_register_style(
            'gutenberg-intro-block-edit-style',
            CTCT_BLOCKS_URL . 'dist/blocks.editor.build.css',
            array('wp-edit-blocks'),
        );
    endif;

    // enqueue the script in the editor
    register_block_type('ctct-bcb/intro-block', array(
        'style' => 'gutenberg-intro-block-style',
        'editor_script' => 'gutenberg-intro-block',
        'editor_style' => 'gutenberg-intro-block-edit-style',
    ));
}
add_action('init', 'register_guten_intro_block');
