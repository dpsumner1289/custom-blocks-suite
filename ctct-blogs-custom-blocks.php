<?php
/*
 * Plugin name: CTCT Blogs Custom Blocks
 * Plugin URI: https://constantcontact.com/
 * Description: Adds custom blocks for a richer Gutenberg editing experience.
 * Version: 1.0
 * Author: Douglas Sumner
 * Author URI: https://constantcontact.com/
 */

if (!defined('ABSPATH')) {
    exit;
}

$url = plugin_dir_url(__FILE__);
define('CTCT_BLOCKS_URL', $url);

require_once plugin_dir_path(__FILE__) . 'src/init.php';
