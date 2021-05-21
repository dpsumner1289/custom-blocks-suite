<?php
// register the block
function register_tax_masonry_feed_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-tax-masonry-feed',
        'editor_style' => 'gutenberg-tax-masonry-feed-edit-style',
        'style' => 'gutenberg-tax-masonry-feed-style',
        'attributes' => array(
            'posts' => array(
                'type' => 'array'
            ),
            'termList' => array(
                'type' => 'array'
            ),
            'selectedTax' => array(
                'type' => 'string'
            ),
            'curTaxTitle' => array(
                'type' => 'string'
            ),
            'selectedTerm' => array(
                'type' => 'string'
            ),
            
        ),
        'render_callback' => 'ctct_bcb_tax_masonry_feed',
    );
    register_block_type('ctct-bcb/tax-masonry-feed', $block_args);
}
add_action('init', 'register_tax_masonry_feed_block');

// render the block
function ctct_bcb_tax_masonry_feed($attributes)
{
    ob_start();

    $args = array(
        'tax_query' => array(
            array(
                'taxonomy' => 'industry',
            ),
        )
    );
    // $industry_feed = new WP_Query($args);
?>
    <section class="intro gs-intro container container-sm">
        <div class="intro_content" <?php echo if_is_gs_page('itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"'); ?>>
            <div class="intro_body" <?php echo if_is_gs_page('itemprop="text"'); ?>>Taxonomy feed</div>
        </div>
    </section>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}
