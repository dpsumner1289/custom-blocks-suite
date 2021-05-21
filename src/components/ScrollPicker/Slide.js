import scrollSlideByKey from "../../functionality/scrollSlideByKey"

const { useState, useEffect } = wp.element

export default props => {
  const [className, setClassName] = useState("slide")
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (props.active) {
      setClassName("slide active-slide")
      setStyle({ backgroundImage: props.background })
    }
    document.addEventListener("keydown", scrollSlideByKey)
  }, [props.active])

  useEffect(() => {
    const activeSlide = document.querySelector(".active-slide")
    if (activeSlide) {
      const dist = activeSlide.offsetTop
      const slideContainer = document.querySelector(".slide-container")
      slideContainer.style.top = `-${dist}px`
    }
  }, [className])

  return (
    <div className={className} style={style}>
      {props.name}
      <a href={props.link} className="slide-button">
        Explore Industry
      </a>
    </div>
  )
}
