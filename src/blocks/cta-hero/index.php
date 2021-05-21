<?php
function register_guten_cta_hero_block()
{

    $block_args = array(
        'editor_script' => 'gutenberg-cta-hero-block',
        'editor_style' => 'gutenberg-cta-hero-block-edit-style',
        'style' => 'gutenberg-cta-hero-block-style',
        'attributes' => array(
            'title' => array(
                'type' => 'string'
            ),
            'content' => array(
                'type' => 'string'
            ),
            'link' => array(
                'type' => 'string',
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
            'theme' => array(
                'type' => 'string',
            ),
            'width' => array(
                'type' => 'string',
            ),
        ),
        'render_callback' => 'ctct_bcb_cta_hero_block',
    );

    register_block_type('ctct-bcb/cta-hero-block', $block_args);
}
add_action('init', 'register_guten_cta_hero_block');

function ctct_bcb_cta_hero_block($attributes)
{
    $title = $attributes['title'];
    $text = $attributes['content'];
    $link = wp_kses($attributes['link'], array(
        'a' => array(
            'href' => array(),
            'title' => array(),
            'target' => array()
        )
    ));
    $image_props = array(
        'imageUrl' => $attributes['imageUrl'],
        'imageAlt' => $attributes['imageAlt']
    );
    if ($attributes['width'] == 'main') {
        $width_classes = array('item_1_2', 'item_1_2');
    } else if ($attributes['width'] == 'lg') {
        $width_classes = array('item_3_5', 'item_2_5');
    }
    ob_start(); ?>
    <section class="cta-hero container container-<?php echo $attributes['width']; ?> flex row afc jfc <?php echo $attributes['theme']; ?>">
        <div class="flex <?php echo $width_classes[0]; ?> cta-hero__image">
            <?php render_image($image_props); ?>
        </div>
        <div class="<?php echo $width_classes[1]; ?> cta-hero__content flex col">
            <h3 class="cta-hero__title"><?php echo $title; ?></h3>
            <div class="cta-hero__body"><?php echo $text; ?></div>
            <div class="cta-hero__link flex row afc">
                <?php echo $link; ?>
                <i class="fas fa-chevron-circle-right"></i>
            </div>
        </div>
    </section>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}
