<?php
// register the block
function register_what_is_answer_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-what-is-answer',
        'editor_style' => 'gutenberg-what-is-answer-edit-style',
        'style' => 'gutenberg-what-is-answer-style',
        'attributes' => array(
            'content' => array(
                'type' => 'string'
            ),
        ),
        'render_callback' => 'ctct_bcb_what_is_answer',
    );
    register_block_type('ctct-bcb/what-is-answer', $block_args);
}
add_action('init', 'register_what_is_answer_block');

// render the block
function ctct_bcb_what_is_answer($attributes)
{
    $content = $attributes['content'];
    ob_start();
?>
    <section class="intro gs-intro container container-sm">
        <div class="intro_content" <?php echo if_is_gs_page('itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"'); ?>>
            <div class="intro_body" <?php echo if_is_gs_page('itemprop="text"'); ?>><?php echo $content; ?></div>
        </div>
    </section>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}
