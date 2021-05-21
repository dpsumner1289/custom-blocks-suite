import { getIndustryList, getTopicList } from "../data/taxonomy"
const { useState, useEffect } = wp.element

export default props => {
  const [loading, setLoading] = useState(true)
  const [output, setOutput] = useState(true)
  const handleChange = e => {
    console.log("data", e.target.options[e.target.selectedIndex].dataset.name)
    props.onChange(
      e.target.value,
      e.target.options[e.target.selectedIndex].dataset.name
    )
  }

  useEffect(() => {
    if (props.terms.length) {
      setOutput(
        props.terms.map(term => {
          let output = ""
          if (term.id == props.selectedTerm) {
            output = (
              <option
                data-name={term.id}
                value={term._links["wp:post_type"][0].href}
                dangerouslySetInnerHTML={{ __html: term.name }}
                selected
              />
            )
          } else {
            output = (
              <option
                data-name={term.id}
                value={term._links["wp:post_type"][0].href}
                dangerouslySetInnerHTML={{ __html: term.name }}
              />
            )
          }
          return output
        })
      )
      setLoading(false)
    }
  }, [props.terms])
  return (
    <div>
      <label for="industry-select">{props.taxType}</label>
      <select
        name="industry-select"
        id="industry-select"
        onChange={handleChange}
      >
        {output}
      </select>
    </div>
  )
}
