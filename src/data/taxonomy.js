export const getIndustryList = async () => {
  return window
    .fetch("/wp-json/wp/v2/industry?per_page=100")
    .then(res => res.json())
    .then(terms => terms)
}

export const getTopicList = async () => {
  return window
    .fetch(
      "/wp-json/wp/v2/categories?include=8370,1494,8340,8345,8485,579,577,1499,575"
    )
    .then(res => res.json())
    .then(terms => terms)
}
