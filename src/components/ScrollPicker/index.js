import Slide from "./Slide"

export default props => {
  return (
    <section className={`scroll-picker ${props.type} ${props.active}`}>
      <div className="active-window">
        <div className="slide-container">
          {props.terms.map(term => {
            let active = false
            if (parseInt(props.selectedTerm) == term.id) {
              active = true
            }
            const slideProps = {
              active: active,
              name: term.name,
            }
            return <Slide {...slideProps} />
          })}
        </div>
      </div>
    </section>
  )
}
