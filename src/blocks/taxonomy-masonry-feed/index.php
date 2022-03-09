<?php
// register the block
function register_tax_masonry_feed_block()
{
    wp_register_script(
        'tax-masonry-feed-frontend',
        CTCT_BLOCKS_URL . "/dist/frontend.build.js",
    );
    function add_type_attribute($tag, $handle, $src)
    {
        if ('tax-masonry-feed-frontend' !== $handle) {
            return $tag;
        }
        return str_replace('text/javascript', 'module', $tag);
    }
    add_filter('script_loader_tag', 'add_type_attribute', 10, 3);
    $block_args = array(
        'editor_script' => 'gutenberg-tax-masonry-feed',
        'editor_style' => 'gutenberg-tax-masonry-feed-edit-style',
        'style' => 'gutenberg-tax-masonry-feed-style',
        'script' => 'tax-masonry-feed-frontend',
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
            'markup' => array(
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
    $markup = json_decode($attributes["markup"], true);
    $select_tax_props = $markup['selectTaxProps'];
    $tax_props = $markup['taxProps'];
    $slide_props = $markup['slideProps'];
    $grid_props = $markup['gridProps'];
    $args = array(
        'post_status' => 'publish'
    );
    if ($grid_props['tax'] == 'industry') {
        $middle = 2;
        $modal_label = "industries";
        $args['posts_per_page'] = 5;
        $numPosts = 5;
        $tax_slug = $grid_props['tax'];
        $term_slug = get_term( $tax_props['selectedTerm'], $grid_props['tax'] )->slug;
        $args['tax_query'] = array(
            array(
                'taxonomy' => $grid_props['tax'],
                'terms' => array($tax_props['selectedTerm'])
            ),
        );
    } else {
        $middle = 1;
        $modal_label = "topics";
        $args['posts_per_page'] = 4;
        $tax_slug = 'category';
        $term_slug = get_category( $tax_props['selectedTerm'] )->slug;
        $numPosts = 4;
        $args['cat'] = array($tax_props['selectedTerm']);
    }
    $link_to_more = trailingslashit(get_site_url(null, $tax_slug)) . $term_slug;
    $postCount = 1;
    $posts = new WP_Query($args);
    $selectedTermName = get_term( $tax_props['selectedTerm'] )->name;
?>
    <div class="taxonomy-masonry-feed flex col <?php echo $modal_label; ?>-feed">
        <div class="wrapper flex row afc jfs">
            <h2><?php echo $select_tax_props['selected']['title']; ?></h2>
            <?php echo "<button class='open-modal flex row afc jfsb' data-open='". $grid_props['tax'] ."'>".$selectedTermName."<a class='more-plus'>" . file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/plus.svg') . "</a></button>"; ?>
            <div class="termsList flex col <?php echo $grid_props['tax']; ?>">
                <a class="close-termsList" data-taxList="<?php echo $grid_props['tax']; ?>"><i class="fas fa-times"></i></a>
                <ul class="slide-container flex col">
                    <?php 
                    foreach ($tax_props["terms"] as $term) {
                        $selected = "";
                        if ($tax_props['selectedTerm'] == $term['id'])
                            $selected = " selected";
                        echo "
                        <li class='slide flex row afc" . $selected . "'>
                            <button class='termSelectButton term flex row afc' data-id='" . $term['id'] . "' data-tax='" . $grid_props['tax'] . "' data-rest='" . $term["_links"]["wp:post_type"][0]["href"] . "' value='".$term['name']."'>" . $term['name'] . "
                            </button>
                            <i class='fas fa-angle-right'></i>
                        </li>
                        ";
                    } ?>
                </ul>
            </div>
        </div>
        <div class="posts-feed <?php echo $grid_props['tax']; ?>-posts-feed">
            <div class="flex col full <?php echo $grid_props['tax']; ?>">
                <?php while ($posts->have_posts()) : $posts->the_post();
                    $foundposts = $posts->found_posts;
                    $postID = get_the_ID();
                    $image = get_the_post_thumbnail_url(get_the_ID(), 'large');
                    $url = get_the_permalink(get_the_ID());
                    $link = get_the_permalink($postID);
                    if ($postCount == 1) {
                        echo "<div class='row-1 flex row jfsb'>";
                    }
                ?>
                    <article class="flex col afs jfs">
                        <?php if ($image) : echo "<figure class='post-image' style='background-image:url(" . $image . ")'><a href='" . $url . "' ></a></figure>";
                        endif; ?>
                        <div class="post-meta flex row afc jfs">
                            <?php basic_author_header($postID); ?> |
                            <?php time_to_read(); ?>
                        </div>
                        <h3 class="post-title"><a href="<?php echo $url; ?>"><?php echo get_the_title(); ?></a></h3>
                        <a href="<?php echo $link; ?>" class="more-arrow flex row afc">Read now <?php echo file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/right-arrow.svg'); ?></a>
                    </article>
                <?php
                    if ($postCount == $middle || ($postCount <= $middle && $postCount >= $foundposts)) {
                        ctct_blogs_form_or_cta($grid_props['tax']);
                        echo "</div>";
                    }
                    if ($postCount == $middle && $postCount < $foundposts) {
                        echo "<div class='row-2 flex row jfsb'>";
                    }
                    if ($postCount == $numPosts || $postCount > $foundposts) {
                        echo "</div>";
                    }
                    $postCount++;
                endwhile; ?>
            </div>
            <a class="readmore-posts flex afc jfsb" href="<?php echo $link_to_more; ?>">More <i class="fas fa-angle-right"></i></a>
        </div>
    </div>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
    die();
}
