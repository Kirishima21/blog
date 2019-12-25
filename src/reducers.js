

export default function settingPage(state = "top", action) {
  switch (action.type) {
    case 'TOP':
      return console.log("top動きました") // let state = "top"
    case 'ABOUT':
      return state = "about",
             console.log("about動きました"),
             Object.assign({}, state, {viewPages: "about"}),
             console.log(state)
    case 'PRODUCT':
      return console.log("product動きました")
    case 'BLOG':
      return console.log("blog動きました")
    case 'CONTACT':
      return console.log("contact動きました")
    default:
      return state
  }
}