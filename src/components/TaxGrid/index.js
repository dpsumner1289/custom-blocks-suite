import { getMedia } from "../../data/posts"

const { useState, useEffect } = wp.element

export default props => {
  const placeholderGrid = (
    <div className="placeholder-grid flex col full">
      <div className="row-1 flex row jfsb">
        <article className="post"></article>
        <article className="post"></article>
        <article className="post"></article>
      </div>
      <div className="row-2 flex row jfsb">
        <article className="post"></article>
        <article className="post"></article>
        <article className="post"></article>
      </div>
    </div>
  )
  const [split, setSplit] = useState("industry")
  const [grid, setGrid] = useState(placeholderGrid)
  const fillPosts = posts => {
    let middle
    if (props.tax === "industry") {
      middle = 2
    } else if (props.tax === "categories") {
      setSplit("categories")
      middle = 1
    }
    const getImage = post => {
      const image = getMedia({ rest: post._links["wp:featuredmedia"][0].href })
      console.log(image)
    }
    const postsRowOne = posts.slice(0, middle).map(post => {
      getImage(post)
      return <article className="post">{post.title.rendered}</article>
    })
    const postsRowTwo = posts.slice(middle, posts.length - 1).map(post => {
      getImage(post)
      return <article className="post">{post.title.rendered}</article>
    })
    return (
      <div className={`flex col full ${split}`}>
        <div className="row-1 flex row jfsb">{postsRowOne}</div>
        <div className="row-2 flex row jfsb">{postsRowTwo}</div>
      </div>
    )
  }
  useEffect(() => {
    if (props.posts.length) {
      setGrid(fillPosts(props.posts))
    }
  }, [props.posts])

  return grid
}
