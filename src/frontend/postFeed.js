import { getFeaturedImageUrl } from "../data/posts"
import { htmlToElement } from "../utils/js/utils"

export default props => {
  let split = "industry"
  let posts = props.posts
  let middle
  if (props.tax === "industry") {
    middle = 2
  } else if (props.tax === "categories") {
    split = "categories"
    middle = 1
  }
  const getImage = async post => {
    return getFeaturedImageUrl({
      rest: post._links["wp:featuredmedia"][0].href,
    }).then(image => `<img src="${image}" />`)
  }
  const postsRowOne = () => {
    return posts.slice(0, middle).map(post => {
      getImage(post).then(image => {
        const row1 = document.querySelector(".row-1")
        const postHTML = `<article class="post">${image}${post.title.rendered}</article>`
        row1.innerHTML += postHTML
      })
    })
  }
  const postsRowTwo = () => {
    return posts.slice(middle, posts.length).map(post => {
      getImage(post).then(image => {
        const row2 = document.querySelector(".row-2")
        const postHTML = `<article class="post">${image}${post.title.rendered}</article>`
        row2.innerHTML += postHTML
      })
    })
  }
  return {
    html: htmlToElement(`<div class="flex col full ${split}">
      <div class="row-1 flex row jfsb"></div>
      <div class="row-2 flex row jfsb"></div>
    </div>`),
    callbacks: [postsRowOne, postsRowTwo],
  }
}
