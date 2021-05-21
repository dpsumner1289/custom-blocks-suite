<?php
// register the block
function register_recent_videos_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-recent-videos-block',
        'editor_style' => 'gutenberg-recent-videos-block-edit-style',
        'style' => 'gutenberg-recent-vidoes-block-edit-style',
        'attributes' => array(
            'postType' => array(
                'type' => 'string'
            ),
        ),
        'render_callback' => 'ctct_bcb_recent_videos',
    );
    register_block_type('ctct-bcb/recent-videos', $block_args);
}
add_action('init', 'register_recent_videos_block');

// render the block
function ctct_bcb_recent_videos($attributes)
{
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 9,
        'post_status' => 'publish',
        'tax_query' => array(
            array(
                'taxonomy' => 'content_type',
                'field' => 'slug',
                'terms' => array('video')
            )
        )
    );
    $title = $attributes['contentType'];
    ob_start();
    $videos = new WP_Query($args);
    if ($videos->have_posts()) :
?>
        <section class="video-feed container container-main flex col afs jfs">
            <h2>Recent Videos</h2>
            <div class="feed-wrap flex row afs jfsb">
                <?php
                while ($videos->have_posts()) :
                    $videos->the_post();
                    $vidID = get_the_ID();
                    setup_postdata($vidID);
                    $title = get_the_title($vidID);
                    $custom = get_post_custom($vidID);
                    $excerpt = get_excerpt($vidID, 108);
                    foreach ($custom as $key => $value) {
                        if ("_oembed" == substr($key, 0, 7) && "_oembed_time" !== substr($key, 0, 12)) {
                            $video = $value;
                        }
                    }
                ?>
                    <article class="video">
                        <div class="color-wrap">
                            <div class="video-embed">
                                <?php echo $video[0]; ?>
                            </div>
                            <div class="copy-wrap">
                                <h4><?php echo $title; ?></h4>
                                <p><?php echo $excerpt; ?></p>
                            </div>
                        </div>
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
