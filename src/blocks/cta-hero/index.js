const { __ } = wp.i18n
const { RichText, MediaUpload, PlainText } = wp.blockEditor
const { registerBlockType } = wp.blocks
const { Button, ButtonGroup } = wp.components

import CustomizerButton from "../../components/CustomizerButton"

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/cta-hero-block", {
  title: __("CTA Hero"),
  icon: "align-left",
  category: "common",
  edit({ attributes, setAttributes }) {
    // set some defaults for styling purposes
    const setDefaultAttributes = atts => {
      Object.keys(atts).map(key => {
        if (!attributes.key) {
          setAttributes({ key: atts[key] })
        }
      })
    }
    setDefaultAttributes({
      theme: "light",
      width: "lg",
    })

    // set the theme and width with buttons
    const setTheme = button => {
      setAttributes({ theme: button.target.value })
    }
    const setWidth = button => {
      setAttributes({ width: button.target.value })
    }
    const themeButtons = [
      {
        type: "theme",
        setter: setTheme,
        label: "Light",
        classLabel: "light",
        activeState: attributes.theme,
      },
      {
        type: "theme",
        setter: setTheme,
        label: "Dark",
        classLabel: "dark",
        activeState: attributes.theme,
      },
    ]
    const widthButtons = [
      {
        type: "width",
        setter: setWidth,
        label: "Large",
        classLabel: "lg",
        activeState: attributes.width,
      },
      {
        type: "width",
        setter: setWidth,
        label: "Medium",
        classLabel: "main",
        activeState: attributes.width,
      },
    ]
    const generateCustomButtons = buttons =>
      buttons.map(button => <CustomizerButton props={button} />)

    const CustomizerOptions = () => {
      return (
        <div className="flex row afc jfsb">
          <ButtonGroup className="theme-buttons customizer">
            {generateCustomButtons(themeButtons)}
          </ButtonGroup>
          <ButtonGroup className="width-buttons customizer">
            {generateCustomButtons(widthButtons)}
          </ButtonGroup>
        </div>
      )
    }

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
        <CustomizerOptions />
        <section
          className={`${attributes.theme} cta-hero flex row afc jfc container container-${attributes.width}`}
        >
          <div className="item_3_5">
            <MediaUpload
              onSelect={media => {
                if (media.sizes.hasOwnProperty("ctaHero")) {
                  setAttributes({ imageUrl: media.sizes.ctaHero.url })
                } else {
                  setAttributes({ imageUrl: media.sizes.full.url })
                }
                setAttributes({
                  imageAlt: media.alt,
                })
              }}
              type="image"
              value={attributes.imageID}
              render={({ open }) => getImageButton(open)}
            />
          </div>
          <div className="flex col item_2_5 cta-content__side">
            <PlainText
              onChange={content => setAttributes({ title: content })}
              value={attributes.title}
              placeholder="Title"
              className="heading"
            />
            <RichText
              onChange={content => setAttributes({ content: content })}
              value={attributes.content}
              multiline="p"
              placeholder="Content"
            />
            <div className="flex row afc cta-hero__button">
              <RichText
                onChange={content => setAttributes({ link: content })}
                value={attributes.link}
                placeholder="Link"
              />
              <i class="fas fa-chevron-circle-right"></i>
            </div>
          </div>
        </section>
      </div>
    )
  },

  save: props => null,
})
