const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Button, ToggleControl } = wp.components
const { RichText, MediaUpload, PlainText } = wp.blockEditor

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/image-text-split", {
  title: __("Image Text Split"),
  icon: "align-right",
  category: "common",

  edit: function (props) {
    const { attributes, setAttributes } = props
    const getImageButton = openEvent => {
      if (attributes.imageUrl) {
        return (
          <img
            src={attributes.imageUrl}
            onClick={openEvent}
            className="image imgfix"
          />
        )
      } else {
        return (
          <div className="button-container">
            <Button onClick={openEvent} className="button button-large">
              {__("Select image")}
            </Button>
          </div>
        )
      }
    }
    const onAlignmentChange = () => {
      setAttributes({ imageLeft: !attributes.imageLeft })
    }
    const switchOrientation = () => {
      return attributes.imageLeft ? " imageLeft" : " imageRight"
    }
    const imageSize = atts => {
      return atts.sizes.textImageSplit
        ? atts.sizes.textImageSplit.url
        : atts.sizes.full.url
    }

    return (
      <div>
        {
          <ToggleControl
            label="Image Left"
            checked={attributes.imageLeft}
            onChange={onAlignmentChange}
          />
        }
        <section
          className={
            "text-image-split flex row afc jfc container container-main" +
            switchOrientation()
          }
        >
          <section className="image-side flex item_2_5">
            <MediaUpload
              onSelect={media => {
                console.log(media)
                setAttributes({
                  imageAlt: media.alt,
                  imageUrl: imageSize(media),
                })
              }}
              type="image"
              value={attributes.imageID}
              render={({ open }) => getImageButton(open)}
            />
          </section>
          <section className="text-side item_3_5">
            <PlainText
              className="eyebrow"
              value={attributes.eyebrow}
              onChange={content => {
                setAttributes({ eyebrow: content })
              }}
              placeholder="Eyebrow Title"
              tagName="span"
            />
            <PlainText
              className="title"
              value={attributes.title}
              onChange={content => {
                setAttributes({ title: content })
              }}
              placeholder="Title"
              tagName="h3"
            />
            <RichText
              className="text-half"
              value={attributes.content}
              onChange={value => setAttributes({ content: value })}
              tagName="p"
              placeholder="Enter some text here"
            />
          </section>
        </section>
      </div>
    )
  },
  save: props => null,
})
