<?php
// register the block
function register_home_recent_posts_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-home-recent-posts-block',
        'editor_style' => 'gutenberg-home-recent-posts-block-edit-style',
        'style' => 'gutenberg-home-recent-posts-block-edit-style',
        'attributes' => array(
            'postType' => array(
                'type' => 'string'
            ),
        ),
        'render_callback' => 'ctct_bcb_home_recent_posts',
    );
    register_block_type('ctct-bcb/home-recent-posts', $block_args);
}
add_action('init', 'register_home_recent_posts_block');

// render the block
function ctct_bcb_home_recent_posts($attributes)
{
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'orderby' => 'date',
        'order' => 'DESC',
        'post_status' => 'publish',
    );
    ob_start();
    $posts = new WP_Query($args);
    if ($posts->have_posts()) :
?>
        <section class="home-recent-posts flex col afs jfs">
            <h2 class="recent">Most Recent</h2>
            <div class="recent-posts-wrap flex row jfsb">
                <?php
                while ($posts->have_posts()) :
                    $posts->the_post();
                    $postID = get_the_ID();
                    $link = get_the_permalink($postID);
                    $title = get_the_title($postID);
                ?>
                    <article class="post">
                        <div class="post-meta flex row afc jfs">
                            <?php basic_author_header($postID); ?> |
                            <?php time_to_read(); ?>
                        </div>
                        <h3 class="post-title"> <a href="<?php echo $link; ?>"> <?php echo $title; ?></a></h3>
                        <a href="<?php echo $link; ?>"><?php echo file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/right-arrow.svg'); ?></a>
                    </article>
                <?php
                endwhile;
                ?>
            </div>
        </section>
<?php
    endif;
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}
