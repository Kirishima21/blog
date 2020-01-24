import {createStore} from "redux";

export const reducers = (state = "top", action) => {
  switch (action.type) {
    case 'TOP':
      console.log("top動きました")
      return state = "top"
    case 'ABOUT':
      console.log("about動きました")
      return state = "about"
    case 'PRODUCT':
      console.log("product動きました")
      return state = "product"
    case 'BLOG':
      console.log("blog動きました")
      return state = "blog"
    case 'CONTACT':
      console.log("contact動きました")
      return state = "contact"
    default:
      return state
  }
}

const store = createStore(reducers)

export default store;