<?php
// register the block
function register_home_featured_authors_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-home-featured-authors-block',
        'editor_style' => 'gutenberg-home-featured-authors-block-edit-style',
        'style' => 'gutenberg-home-featured-authors-block-edit-style',
        'attributes' => array(
            'postType' => array(
                'type' => 'string'
            ),
        ),
        'render_callback' => 'ctct_bcb_home_featured_authors',
    );
    register_block_type('ctct-bcb/home-featured-authors', $block_args);
}
add_action('init', 'register_home_featured_authors_block');

// render the block
function ctct_bcb_home_featured_authors($attributes)
{
    ob_start();
    $featured_authors = get_post_meta(get_the_ID(), 'featured_authors_row', true);
?>
    <section class="home-featured-authors flex col afs jfs">
        <h2>Featured Authors</h2>
        <div class="featured-authors-wrap flex row jfsb">
            <?php foreach ($featured_authors as $author) {
                $name = get_the_author_meta('display_name', intval($author));
                $company = get_the_author_meta('company', intval($author));
                $job_title = get_the_author_meta('job_title', intval($author));
                $link = get_author_posts_url($author);
                $image = get_avatar_url($author, array('size' => '80'));

            ?>
                <article class="author flex row afs jfs">
                    <a href="<?php echo $link; ?>">
                        <figure class="featured-author-image" style="background-image:url(<?php echo $image; ?>)">
                        </figure>
                    </a>
                    <div class="author-meta flex col afs jfs">
                        <h3 class="author-name"> <a href="<?php echo $link; ?>"> <?php echo $name; ?></a></h3>
                        <?php if (!empty($job_title)) {
                            echo "<h4>" . $job_title . ",</h4>";
                        } ?>
                        <?php if (!empty($company)) {
                            echo "<h4>" . $company . "</h4>";
                        } else {
                            echo "<h4>Constant Contact</h4>";
                        } ?>
                        <a href="<?php echo $link; ?>" class="more-arrow flex row afc jfsb"> See all articles<?php echo file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/right-arrow.svg'); ?></a>
                    </div>
                </article>
            <?php
            } ?>
        </div>
    </section>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}
