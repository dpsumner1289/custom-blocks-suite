const move = upOrDown => {
  const slideContainer = document.querySelector(".slide-container")
  const distFromTop = parseInt(slideContainer.style.top)
  const activeSlide = document.querySelector(".active-slide")
  const previousSlide = activeSlide.previousSibling
  const nextSlide = activeSlide.nextSibling
  if (upOrDown == "up" && nextSlide) {
    slideContainer.style.top = `${distFromTop - 200}px`
    activeSlide.classList.remove("active-slide")
    nextSlide.classList.add("active-slide")
  } else if (upOrDown == "down" && previousSlide) {
    slideContainer.style.top = `${distFromTop + 200}px`
    activeSlide.classList.remove("active-slide")
    previousSlide.classList.add("active-slide")
  }
}

export default e => {
  const keyCode = e.which || e.keyCode
  switch (keyCode) {
    case 38:
      move("up")
      break
    case 40:
      move("down")
      break
  }
}
