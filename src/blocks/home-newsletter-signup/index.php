<?php
// register the block
function register_home_newsletter_signup_block()
{
    $block_args = array(
        'editor_script' => 'gutenberg-home-newsletter-signup-block',
        'editor_style' => 'gutenberg-home-newsletter-signup-block-edit-style',
        'style' => 'gutenberg-home-newsletter-signup-block-edit-style',
        'attributes' => array(
            'postType' => array(
                'type' => 'string'
            ),
            'title' => array(
                'type' => 'string'
            ),
        ),
        'render_callback' => 'ctct_bcb_home_newsletter_signup',
    );
    register_block_type('ctct-bcb/home-newsletter-signup', $block_args);
}
add_action('init', 'register_home_newsletter_signup_block');

// render the block
function ctct_bcb_home_newsletter_signup($attributes)
{
    ob_start();
?>
    <div class="home-newsletter-signup form-container flex col afc">
        <h2 class="cta"><?php echo $attributes['title']; ?></h2>
        <form id="subscribe" class="signup-form-actual-form signup-form-actual-form-footer flex row nowrap" accept-charset="utf-8" action="https://cloud.c.constantcontact.com/jmmlsubscriptions/coi_verify" method="GET" target="_blank">
            <input id="subbox" class="newsletter-email-field newsletter-email-field-footer" maxlength="255" name="email" required="required" type="text" placeholder="Enter your email address" />
            <input name="sub" type="hidden" value="1" />
            <input name="method" type="hidden" value="JMML_hints_tips" />
            <input id="page" name="page" type="hidden" value="" />
            <input id="subbutton" class="item_2_7 submit_optin_form" type="submit" value="Sign up" />
        </form>
    </div>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}
