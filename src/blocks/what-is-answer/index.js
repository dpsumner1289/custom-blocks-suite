const { __ } = wp.i18n
const { RichText } = wp.blockEditor
const { registerBlockType } = wp.blocks

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/what-is-answer", {
  title: __("What Is - Answer Block"),
  icon: "yes-alt",
  category: "common",

  edit({ attributes, setAttributes }) {
    return (
      <div className="container intro">
        <RichText
          onChange={content => setAttributes({ content: content })}
          value={attributes.content}
          multiline="p"
          placeholder="Your intro text"
        />
      </div>
    )
  },

  save: props => null,
})
