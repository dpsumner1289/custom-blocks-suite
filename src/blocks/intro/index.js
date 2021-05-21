const { __ } = wp.i18n
const { RichText } = wp.blockEditor
const { registerBlockType } = wp.blocks

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/intro", {
  title: __("Intro Block"),
  icon: "editor-aligncenter",
  category: "common",
  attributes: {
    body: {
      type: "array",
      source: "children",
      selector: ".intro_body",
    },
  },

  edit({ attributes, className, setAttributes }) {
    return (
      <div className="container intro">
        <RichText
          onChange={content => setAttributes({ body: content })}
          value={attributes.body}
          multiline="p"
          placeholder="Your intro text"
        />
      </div>
    )
  },

  save({ attributes }) {
    return (
      <div className="intro container container-sm">
        <div className="intro_content">
          <div className="intro_body">{attributes.body}</div>
        </div>
      </div>
    )
  },
})
