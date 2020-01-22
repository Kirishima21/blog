function changePageAbout() {
  return {type: 'ABOUT'}
}

function changePageBlog() {
  return {type: 'BLOG'}
}

function changePageContact() {
  return {type: 'CONTACT'}
}

function changePageProduct() {
  return {type: "PRODUCT"}
}

function changePageTop() {
  return {type: "TOP"}
}

export {
  changePageAbout,
  changePageBlog,
  changePageContact,
  changePageProduct,
  changePageTop
}