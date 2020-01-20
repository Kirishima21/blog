import {appDispatcher} from "./appDispatcher";

export const ActionType = {
  CHANGE_PAGE_TOP: "CHANGE_PAGE_TOP",
  CHANGE_PAGE_ABOUT: "CHANGE_PAGE_ABOUT",
  CHANGE_PAGE_PRODUCT: "CHANGE_PAGE_PRODUCT",
  CHANGE_PAGE_BLOG: "CHANGE_PAGE_BLOG",
  CHANGE_PAGE_CONTACT: "CHANGE_PAGE_CONTACT"
}

export const Actions ={
  changePageTop: () => {
    appDispatcher.dispatch({
      actionType: ActionType.CHANGE_PAGE_TOP,
    })
  },
  changePageAbout: () => {
    appDispatcher.dispatch({
      actionType: ActionType.CHANGE_PAGE_ABOUT,
    })
  },
  changePageProduct: () => {
    appDispatcher.dispatch({
      actionType: ActionType.CHANGE_PAGE_PRODUCT,
    })
  },
  changePageBlog: () => {
    appDispatcher.dispatch({
      actionType: ActionType.CHANGE_PAGE_BLOG,
    })
  },
  changePageContact: () => {
    appDispatcher.dispatch({
      actionType: ActionType.CHANGE_PAGE_CONTACT,
    })
  }
}