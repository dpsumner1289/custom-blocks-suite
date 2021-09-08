// debugging

export const log = message => {
  console.log(message)
}

// for the front end, so we can write JS similar to React without using React
export const htmlToElement = html => {
  var template = document.createElement("template")
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}
