const { useState, useEffect } = wp.element

export default props => {
  const [selected, setSelected] = useState(props.selected.value)
  const handleChange = e => {
    props.onChange(e.target.value)
    setSelected(e.target.value)
  }
  const checkIfSelected = e => {
    if (e.target.value === props.selected.value) {
      return "selected"
    }
  }
  const selectDefault = () => {
    if (!props.selected) {
      return "selected"
    }
  }
  useEffect(() => {}, [])
  console.log("selectProps", props)

  return (
    <div>
      <label for="taxonomy-select">Choose a Taxonomy:</label>
      <select
        name="taxonomy-select"
        id="taxonomy-select"
        onChange={handleChange}
      >
        <option {...(props.selected ? "" : "selected")} disabled value>
          {" "}
          -- select an option --{" "}
        </option>
        <option value="industry">Industry</option>
        <option value="topic">Topic</option>
      </select>
    </div>
  )
}
