<?php
require_once plugin_dir_path(__FILE__) . 'utils/php/utils.php';

// import all of our block registrations 
require_once plugin_dir_path(__FILE__) . 'blocks/cta-hero/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/intro/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/image-text-split/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/recent-videos/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/home-recent-posts/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/home-featured/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/home-newsletter-signup/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/what-is-answer/index.php';
require_once plugin_dir_path(__FILE__) . 'blocks/taxonomy-masonry-feed/index.php';

// activate wp api
wp_enqueue_script( 'wp-api' );

// import assets
add_action('wp_enqueue_scripts', 'ctct_bcb_assets');
function ctct_bcb_assets()
{
    wp_enqueue_style('ctct-bcb-styles', CTCT_BLOCKS_URL . 'dist/blocks.style.build.css');
}

// let's defer this for page speed
function ctct_blocks_add_defer_attribute($tag, $handle)
{
    // add script handles to the array below
    $scripts_to_defer = array('ctct-bcb-styles');

    foreach ($scripts_to_defer as $defer_script) {
        if ($defer_script === $handle) {
            return str_replace(' src', ' defer="defer" src', $tag);
        }
    }
    return $tag;
}
add_filter('script_loader_tag', 'ctct_blocks_add_defer_attribute', 10, 2);
