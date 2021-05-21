const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { serverSideRender: ServerSideRender } = wp

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/home-featured-posts", {
  title: __("Home Featured Posts"),
  icon: "feedback",
  category: "common",

  edit: props => {
    return (
      <ServerSideRender
        block="ctct-bcb/home-featured-posts"
        attributes={props.attributes}
      />
    )
  },
  save: props => null,
})
