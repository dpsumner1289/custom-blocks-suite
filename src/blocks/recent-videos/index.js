const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Spinner } = wp.components
const { withSelect } = wp.data
const { serverSideRender: ServerSideRender } = wp

import "./editor.scss"
import "./style.scss"

registerBlockType("ctct-bcb/recent-videos", {
  title: __("Recent Videos"),
  icon: "feedback",
  category: "common",

  edit: props => {
    return (
      <ServerSideRender
        block="ctct-bcb/recent-videos"
        attributes={props.attributes}
      />
    )
  },
  save: props => null,
})
