import axios from "axios"

const initBlock = () => {
  // this is just the little plus sign that goes in the picker button, we need it to be scoped to the whole function
  let plusSign = false

  const handleOpen = e => {
    const modal = e.currentTarget.dataset.open
    const target = document.querySelector(`.termsList.${modal}`)
    if (target.classList.contains("active")) {
      target.classList.remove("active")
    } else {
      target.classList.add("active")
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
  const setSelectorButtonText = (target, text) => {
    Array.prototype.slice
      .call(document.querySelectorAll(`[data-open='${target}']`))
      .map(button => {
        if (!plusSign) {
          plusSign = button.children.item(0).outerHTML
        }
        button.innerHTML = text + plusSign
      })
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
      postFeed.innerHTML = response.data
    })
    setSelectorButtonText(e.target.dataset.tax, e.target.value)
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

  const selectors = document.getElementsByClassName("open-modal")
  Array.prototype.slice
    .call(selectors)
    .map(selector => selector.addEventListener("click", handleOpen))

  let buttons = Array.from(document.getElementsByClassName("termSelectButton"))
  buttons.map(button => {
    button.addEventListener("click", clickToSet)
  })
}

initBlock()
