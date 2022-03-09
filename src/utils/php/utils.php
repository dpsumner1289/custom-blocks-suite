<?php

use GuzzleHttp\{Client, RequestOptions};

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
            if (empty($author_name)) {
                $author_name = "Constant Contact";
            }
            $gravatar = wp_get_attachment_image($meta['_thumbnail_id'][0], 'thumbnail');
            $author_headshot =
                '<figure class="author-mug guest flex row afc jfsb">
            ' . $gravatar . '
            <figcaption>' . $author_name . '</figcaption>
            </figure>';
        } else {
            $author_ID = $coauthor->ID;
            $gravatar = get_avatar($author_ID, 100);
            $author_name = $coauthor->display_name;
            if (empty($author_name)) {
                $author_name = "Constant Contact";
            }
            $author_headshot =
                '<figure class="author-mug flex row afc jfsb">
                ' . $gravatar . '
                <figcaption>' . $author_name . '</figcaption>
                </figure>';
        }

?>
        <?php echo $author_headshot; ?>
    <?php
    }
}

if (!function_exists('ctct_sf_webinar_query')) {
    function ctct_sf_webinar_query()
    {
        $filters = $_POST['filters'];
        $base_query = $_POST['base_query'];
        $accessToken = null;
        $instance_url = null;
        if (isset($_SESSION['accessToken'])) {
            $accessToken = $_SESSION['accessToken'];
        }
        if (isset($_SESSION['instance_url'])) {
            $instance_url = $_SESSION['instance_url'];
        }

        $request_client = new Client(['base_uri' => $instance_url]);

        if (!$base_query) {
            $params = explode(',', ltrim($filters));
            $params = preg_replace('/[^\da-z ]/i', '', $params);
            $query_params = '';
            foreach ($params as $filter) {
                $query_params .= ' AND ( Topics_of_Event__c includes( \'' . $filter . '\' ) ) ';
            }
            $query = str_replace('QUERY_VARIABLES_REPLACE', $query_params, CTCT_VARIABLE_QUERY);
        } else {
            $query = CTCT_INITIAL_QUERY;
        }
        try {
            $response = $request_client->get(CTCT_QUERY_URL, [
                RequestOptions::HEADERS => [
                    'Authorization' => 'Bearer ' . $accessToken,
                    'Content-Type: application/json',
                ],
                RequestOptions::QUERY => [
                    'q' => $query
                ]
            ]);
        } catch (\Exception $exception) {
            throw new Exception('Unable to filter by topics');
        }
        $json_response = json_decode($response->getBody());
        wp_send_json_success($json_response);
    }
    add_action("wp_ajax_ctct_sf_webinar_query", "ctct_sf_webinar_query");
    add_action("wp_ajax_nopriv_ctct_sf_webinar_query", "ctct_sf_webinar_query");
}

if (!function_exists('ctct_blogs_get_related_posts')) {
    function ctct_blogs_get_related_posts()
    {
        $topics = $_POST['topics'];
        $accessToken = null;
        $instance_url = null;
        if (isset($_SESSION['accessToken'])) {
            $accessToken = $_SESSION['accessToken'];
        }
        if (isset($_SESSION['instance_url'])) {
            $instance_url = $_SESSION['instance_url'];
        }

        $request_client = new Client(['base_uri' => $instance_url]);
        // $query = str_replace('QUERY_VARIABLES_REPLACE', '', CTCT_SINGLE_EVENT_QUERY);
        $params = explode(';', ltrim($topics));
        $params = preg_replace('/[^\da-z ]/i', '', $params);
        $query_params = '';
        foreach ($params as $topic) {
            $query_params .= ' AND ( Topics_of_Event__c includes( \'' . $topic . '\' ) ) ';
        }
        $query = str_replace('QUERY_VARIABLES_REPLACE', $query_params, CTCT_SINGLE_EVENT_QUERY);
        try {
            $response = $request_client->get(CTCT_QUERY_URL, [
                RequestOptions::HEADERS => [
                    'Authorization' => 'Bearer ' . $accessToken,
                    'Content-Type: application/json',
                ],
                RequestOptions::QUERY => [
                    'q' => $query
                ]
            ]);
        } catch (\Exception $exception) {
            throw new Exception('Unable to query Campaign object');
        }

        $json_response = json_decode($response->getBody());

        // return $json_response;
        wp_send_json_success($json_response);
    }
    add_action("wp_ajax_ctct_blogs_get_related_posts", "ctct_blogs_get_related_posts");
    add_action("wp_ajax_nopriv_ctct_blogs_get_related_posts", "ctct_blogs_get_related_posts");
}

if (!function_exists('ctct_blogs_feed_posts_by_term')) {
    function ctct_blogs_feed_posts_by_term()
    {
        $filters = stripslashes(html_entity_decode($_POST['filters']));
        $filters = rtrim($filters, "\0");
        $filters = json_decode($filters, true);
        $term = $filters['term'];
        $tax = $filters['tax'];
        $args = array(
            'post_status' => 'publish',
        );
        if ($tax == 'industry') {
            $middle = 2;
            $numPosts = 5;
            $tax_slug = $tax;
            $term_slug = get_term( $term)->slug; 
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'industry',
                    'terms' => array($term)
                )
            );
        } else {
            $middle = 1;
            $numPosts = 4;
            $args['cat'] = array($term);
            $tax_slug = 'category';
            $term_slug = get_category( $term )->slug;
        }
        $link_to_more = trailingslashit(get_site_url(null, $tax_slug)) . $term_slug;
        $args['posts_per_page'] = $numPosts;
        $postCount = 1;
        $posts = new WP_Query($args);
    ?>
        <div class="flex col full <?php echo $tax; ?>">
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
                    <?php if ($image) : echo "<a href='" . $url . "'><img src='" . $image . "' /></a>";
                    endif; ?>
                    <div class="post-meta flex row afc jfs">
                        <?php basic_author_header($postID); ?> |
                        <?php time_to_read(); ?>
                    </div>
                    <h3 class="post-title"><a href="<?php echo $url; ?>"><?php echo get_the_title(); ?></a></h3>
                    <a href="<?php echo $link; ?>" class="flex row afc more-arrow">Read now<?php echo file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/right-arrow.svg'); ?></a>
                </article>
            <?php
                if ($postCount == $middle || ($postCount <= $middle && $postCount >= $foundposts)) {
                    ctct_blogs_form_or_cta($tax);
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
        <?php
        die();
    }
    add_action("wp_ajax_ctct_blogs_feed_posts_by_term", "ctct_blogs_feed_posts_by_term");
    add_action("wp_ajax_nopriv_ctct_blogs_feed_posts_by_term", "ctct_blogs_feed_posts_by_term");
}

if (!function_exists("ctct_blogs_form_or_cta")) {
    function ctct_blogs_form_or_cta($type = "categories")
    {
        if ($type == "categories") {
        ?>
            <div class="feed-newsletter-signup flex col jfc afc" style="background-image:url(<?php echo '/wp-content/plugins/ctct-blogs-custom-blocks/src/assets/img/robins-egg-bg.jpg'; ?>)">
                <h2 class="cta">Not sure where to start with marketing? That’s why we created <span>The Download</span>.</h2>
                <button><a href="https://www.constantcontact.com/guides/making-sense-of-online-marketing">Get the Guide</a></button>
            </div>
        <?php
        } else {
        ?>
            <div class="feed-cta flex col afc jfc" style="background-image:url(<?php echo '/wp-content/plugins/ctct-blogs-custom-blocks/src/assets/img/constant-blue-bg.jpg'; ?>)">
                <h3>Grow your business with online marketing</h3>
                <p>Email marketing, social media, ads and more.</p>
                <button class="cta-button flex row afc jfc"><a href="https://go.constantcontact.com/signup.jsp">Start a Trial</a></button>
            </div>
<?php
        }
    }
}
