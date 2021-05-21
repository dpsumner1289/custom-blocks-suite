export const getIndustryList = async () => {
  return window
    .fetch("/wp-json/wp/v2/industry")
    .then(res => res.json())
    .then(terms => terms)
}

export const getTopicList = async () => {
  return window
    .fetch("/wp-json/wp/v2/categories")
    .then(res => res.json())
    .then(terms => terms)
}
