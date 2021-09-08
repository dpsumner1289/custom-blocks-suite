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
            $author_ID = get_queried_object()->post_author;
            $gravatar = get_avatar($author_ID, 100);
            $author_name = get_the_author_meta($author_ID, "display_name");
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
        }
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
                    <h3><a href="<?php echo $url; ?>"><?php echo get_the_title(); ?></a></h3>
                    <a href="<?php echo $link; ?>"><?php echo file_get_contents(WP_PLUGIN_DIR . '/ctct-blogs-custom-blocks/src/assets/img/right-arrow.svg'); ?></a>
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
                <h2 class="cta">Subscribe to our newsletter for marketing advice in your inbox.</h2>
                <form id="subscribe" class="signup-form-actual-form signup-form-actual-form-footer flex row nowrap" accept-charset="utf-8" action="https://cloud.c.constantcontact.com/jmmlsubscriptions/coi_verify" method="GET" target="_blank">
                    <input id="subbox" class="newsletter-email-field newsletter-email-field-footer" maxlength="255" name="email" required="required" type="text" placeholder="Enter your email address" />
                    <input name="sub" type="hidden" value="1" />
                    <input name="method" type="hidden" value="JMML_hints_tips" />
                    <input id="page" name="page" type="hidden" value="" />
                    <input id="subbutton" class="item_2_7 submit_optin_form" type="submit" value="Sign up" />
                </form>
            </div>
        <?php
        } else {
        ?>
            <div class="feed-cta flex col afc jfc" style="background-image:url(<?php echo '/wp-content/plugins/ctct-blogs-custom-blocks/src/assets/img/constant-blue-bg.jpg'; ?>)">
                A short, succinct headline.
                <button class="cta-button flex row afc jfc">CTA</button>
            </div>
<?php
        }
    }
}
