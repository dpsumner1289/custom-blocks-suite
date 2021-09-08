<?php
// register the block
function register_home_featured_posts_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-home-featured-posts-block',
        'editor_style' => 'gutenberg-home-featured-posts-block-edit-style',
        'style' => 'gutenberg-home-featured-posts-block-edit-style',
        'attributes' => array(
            'postType' => array(
                'type' => 'string'
            ),
        ),
        'render_callback' => 'ctct_bcb_home_featured_posts',
    );
    register_block_type('ctct-bcb/home-featured-posts', $block_args);
}
add_action('init', 'register_home_featured_posts_block');

// render the block
function ctct_bcb_home_featured_posts($attributes)
{
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC',
        'meta_query' => array(array(
            'key' => 'home_featured',
            'value' => 'on'
        )),
        'post_status' => 'publish',
    );
    ob_start();
    $posts = new WP_Query($args);
    if ($posts->have_posts()) :
        $count = 1;
?>
        <section class="home-featured-posts flex col afs jfs">
            <h2 class="featured">Featured</h2>
            <div class="featured-posts-wrap flex row jfsb">
                <?php
                while ($posts->have_posts()) :
                    $posts->the_post();
                    $postID = get_the_ID();
                    $link = get_the_permalink($postID);
                    $title = get_the_title($postID);
                    $image = get_the_post_thumbnail_url($postID, 'large');
                    if($count == 1) {
                        $snippet_length = 128;
                    } else {
                        $snippet_length = 55;
                    }
                    $excerpt = get_excerpt($postID, $snippet_length, false);
                ?>
                    <article class="post">
                        <figure class="featured-post-image" style="background-image:url(<?php echo $image; ?>)">
                    <a href="<?php echo $link; ?>"></a>
                    </figure>
                        <div class="post-meta flex row afc jfs">
                            <?php basic_author_header($postID); ?> |
                            <?php time_to_read(); ?>
                        </div>
                        <h3 class="post-title"> <a href="<?php echo $link; ?>"> <?php echo $title; ?></a></h3>
                        <p class="excerpt"><?php echo $excerpt; ?></p>
                        <a href="<?php echo $link; ?>" class="more-arrow"><?php echo file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/right-arrow.svg'); ?></a>
                    </article>
                <?php
                $count++;
                endwhile;
                ?>
            </div>
            <a class="readmore-posts flex afc jfsb" href="">More<span> featured articles</span><i class="fas fa-angle-right"></i></a>
        </section>
<?php
    endif;
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}
