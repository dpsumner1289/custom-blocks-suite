const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText, MediaUpload, PlainText } = wp.blockEditor
const { InspectorControls } = wp.editor
const { PanelBody, Button, ButtonGroup } = wp.components
const { serverSideRender: ServerSideRender } = wp

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/home-newsletter-signup", {
  title: __("Home Newsletter Signup"),
  icon: "feedback",
  category: "common",

  edit({ attributes, setAttributes }) {
    // image upload component
    const getImageButton = openEvent => {
      if (attributes.imageUrl) {
        return (
          <img
            src={attributes.imageUrl}
            onClick={openEvent}
            className="image"
          />
        )
      } else {
        return (
          <div className="button-container">
            <Button onClick={openEvent} className="button button-large">
              Select image
            </Button>
          </div>
        )
      }
    }

    return (
      <div>
        <InspectorControls>
          <PanelBody>
            <MediaUpload
              onSelect={media => {
                setAttributes({
                  imageUrl: media.sizes.full.url,
                  imageAlt: media.alt,
                })
                console.log(attributes)
              }}
              type="image"
              value={attributes.imageID}
              render={({ open }) => getImageButton(open)}
            />
          </PanelBody>
        </InspectorControls>
        <div
          className="home-newsletter-signup form-container flex col afc"
          style={{ backgroundImage: attributes.imageUrl }}
        >
          <h2 className="cta">
            <PlainText
              onChange={content => setAttributes({ title: content })}
              value={attributes.title}
              placeholder="Title"
              className="cta"
            />
          </h2>
          <form
            id="subscribe"
            className="signup-form-actual-form signup-form-actual-form-footer flex row nowrap"
            accept-charset="utf-8"
            action="https://cloud.c.constantcontact.com/jmmlsubscriptions/coi_verify"
            method="GET"
            target="_blank"
          >
            <input
              id="subbox"
              className="newsletter-email-field newsletter-email-field-footer"
              maxlength="255"
              name="email"
              required="required"
              type="text"
              placeholder="Enter your email address"
            />
            <input name="sub" type="hidden" value="1" />
            <input name="method" type="hidden" value="JMML_hints_tips" />
            <input id="page" name="page" type="hidden" value="" />
            <input
              id="subbutton"
              className="item_2_7 submit_optin_form"
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    )
  },
  save: props => null,
})
