const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { serverSideRender: ServerSideRender } = wp

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/home-recent-posts", {
  title: __("Home Recent Posts"),
  icon: "feedback",
  category: "common",

  edit: props => {
    return (
      <ServerSideRender
        block="ctct-bcb/home-recent-posts"
        attributes={props.attributes}
      />
    )
  },
  save: props => null,
})
