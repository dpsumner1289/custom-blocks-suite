<?php
// register the block
function register_image_text_split_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-image-text-split-block',
        'editor_style' => 'gutenberg-image-text-split-block-edit-style',
        'style' => 'gutenberg-image-text-split-block-edit-style',
        'attributes' => array(
            'eyebrow' => array(
                'type' => 'string'
            ),
            'title' => array(
                'type' => 'string'
            ),
            'content' => array(
                'type' => 'string'
            ),
            'className' => array(
                'type' => 'string',
            ),
            'image' => array(
                'type' => 'string'
            ),
            'imageAlt' => array(
                'type' => "string",
            ),
            'imageUrl' => array(
                'type' => "string",
            ),
            'imageLeft' => array(
                'type' => 'boolean',
                'default' => true
            )
        ),
        'render_callback' => 'ctct_bcb_image_text_split',
    );
    register_block_type('ctct-bcb/image-text-split', $block_args);
}
add_action('init', 'register_image_text_split_block');

// render the block
function ctct_bcb_image_text_split($attributes)
{
    $title = $attributes['title'];
    $eyebrow = $attributes['eyebrow'];
    $text = $attributes['content'];
    $image_props = array(
        'imageUrl' => $attributes['imageUrl'],
        'imageAlt' => $attributes['imageAlt']
    );
    $orientation = ' imageRight';
    if ($attributes['imageLeft']) {
        $orientation = ' imageLeft';
    }
    ob_start(); ?>
    <section class="text-image-split flex row afc jfc container container-main <?php echo $orientation; ?>">
        <section class="image-side flex item_2_5">
            <?php render_image($image_props); ?>
        </section>
        <section class="text-side item_3_5" <?php echo if_is_gs_page('itemprop="mainEntity" itemscope itemtype="https://schema.org/Question"'); ?>>
            <?php if ($eyebrow) : ?><span class="eyebrow"><?php echo $eyebrow; ?></span><?php endif; ?>
            <?php if ($title) : ?><h3 <?php echo if_is_gs_page('itemprop="name"'); ?>><?php echo $title; ?></h3>
            <?php endif; ?>
            <div class="text-half" <?php echo if_is_gs_page('itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"'); ?>>
                <div <?php echo if_is_gs_page('itemprop="text"'); ?>><?php echo $text; ?></div>
            </div>
        </section>
    </section>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}
