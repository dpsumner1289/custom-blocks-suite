const { useState } = wp.element
const { Button } = wp.components

const CustomizerButton = ({ props }) => {
  let isActive
  if (props.classLabel == props.activeState) {
    isActive = true
  } else {
    isActive = false
  }
  const [active, setActive] = useState(isActive)
  const setter = props.setter
  const handleClick = e => {
    setter(e)
    setActive(!active)
  }
  return (
    <Button
      key={props.label.toLowerCase()}
      id={props.classLabel + "-" + props.type}
      className={`${props.type}-button customizer-button`}
      onClick={handleClick}
      data-active={active}
      value={props.classLabel}
    >
      {props.label}
    </Button>
  )
}

export default CustomizerButton
