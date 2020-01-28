import {createStore} from "redux";

export const reducers = (state = "top", action) => {
  switch (action.type) {
    case 'TOP':
      return state = "top"
    case 'ABOUT':
      return state = "about"
    case 'PRODUCT':
      return state = "product"
    case 'BLOG':
      return state = "blog"
    case 'CONTACT':
      return state = "contact"
    default:
      return state
  }
}

const store = createStore(reducers)

export default store;