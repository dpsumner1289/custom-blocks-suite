<?php
function render_image($props)
{
    $output = '<figure class="flex"><img class="imgfix" src="' . $props['imageUrl'] . '" alt="' . $props['imageAlt'] . '" /></figure>';
    echo $output;
}

if (!function_exists("basic_author_header")) {
    function basic_author_header()
    {
        $ID = get_queried_object()->data->ID;
        $coauthor = get_coauthors()[0];

        if ($coauthor->type === "guest-author") {
            $ID = $coauthor->ID;
            $meta = get_post_meta($ID);
            $author_name = $coauthor->display_name;
            if(empty($author_name)) {
                $author_name = "Constant Contact";
            }
            $gravatar = wp_get_attachment_image($meta['_thumbnail_id'][0], 'thumbnail');
            $author_headshot =
            '<figure class="author-mug guest flex row afc jfsb">
            ' . $gravatar . '
            <figcaption>' . $author_name .'</figcaption>
            </figure>';
        } else {
            $author_ID = get_queried_object()->post_author;
            $gravatar = get_avatar($author_ID, 100);
            $author_name = get_the_author_meta($author_ID, "display_name");
            if(empty($author_name)) {
                $author_name = "Constant Contact";
            }
            $author_headshot =
                '<figure class="author-mug flex row afc jfsb">
                ' . $gravatar . '
                <figcaption>' . $author_name .'</figcaption>
                </figure>';
        }

?>
            <?php echo $author_headshot; ?>
<?php
    }
}
