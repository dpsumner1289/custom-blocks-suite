export const getFilteredPosts = props => {
  let numPosts
  if (props.tax === "categories") {
    numPosts = 4
  } else if (props.tax === "industry") {
    numPosts = 5
  }
  return window
    .fetch(`${props.rest}&per_page=${numPosts}`)
    .then(res => res.json())
    .then(posts => posts)
}

export const getAuthorMeta = props => {}

export const getMedia = props => {
  return window
    .fetch(`${props.rest}`)
    .then(res => res.json())
    .then(img => {
      console.log(img)
      const picked = (({ author }) => ({ author }))(img)
      return picked
    })
}
