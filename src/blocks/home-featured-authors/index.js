const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { serverSideRender: ServerSideRender } = wp

import "./editor.scss"
import "./style.scss"
import "./responsive.scss"

registerBlockType("ctct-bcb/home-featured-authors", {
  title: __("Home - Featured Authors"),
  icon: "groups",
  category: "common",

  edit: props => {
    return (
      <ServerSideRender
        block="ctct-bcb/home-featured-authors"
        attributes={props.attributes}
      />
    )
  },
  save: props => null,
})
