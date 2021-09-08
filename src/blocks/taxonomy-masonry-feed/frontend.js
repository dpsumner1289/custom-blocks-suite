import axios from "axios"

const initBlock = () => {
  const handleOpen = e => {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active")
    } else {
      e.target.classList.add("active")
    }
  }
  const closeModal = tax => {
    const modal = document.querySelector(`.termsList.${tax}`)
    return modal.classList.contains("active")
      ? modal.classList.remove("active")
      : null
  }
  const getDynamicSiteUrl = () => window.location.origin
  const getAjaxUrl = () => `${getDynamicSiteUrl()}/wp-admin/admin-ajax.php`
  const changeSelected = newSelected => {
    document.querySelector(".slide.selected").classList.remove("selected")
    newSelected.parentNode.classList.add("selected")
  }
  const clickToSet = e => {
    const ajaxUrl = getAjaxUrl()
    const postFeed = document.querySelector(
      `.${e.target.dataset.tax}-posts-feed`
    )
    let params = new FormData()
    let filters = {
      tax: e.target.dataset.tax,
      term: e.target.dataset.id,
    }

    params.append("action", "ctct_blogs_feed_posts_by_term")
    params.append("filters", JSON.stringify(filters))

    const results = axios.post(ajaxUrl, params).then(response => {
      console.log(response)
      postFeed.innerHTML = response.data
    })

    changeSelected(e.target)
    closeModal(e.target.dataset.tax)
    return Promise.resolve(results)
  }
  const exToClose = e => {
    closeModal(e.target.dataset.taxlist)
  }

  const closeButtons = Array.from(
    document.getElementsByClassName("close-termsList")
  )
  closeButtons.map(button => button.addEventListener("click", exToClose))

  const selectors = document.getElementsByClassName("termsList")
  Array.prototype.slice
    .call(selectors)
    .map(selector => selector.addEventListener("click", handleOpen))

  let buttons = Array.from(document.getElementsByClassName("termSelectButton"))

  buttons.map(button => {
    button.addEventListener("click", clickToSet)
  })
}

initBlock()
