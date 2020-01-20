import {appDispatcher} from "./appDispatcher";

export const pageStore = { page: "top", onChange: null}

export const ActionType = {
  CHANGE_PAGE_TOP: "CHANGE_PAGE_TOP",
  CHANGE_PAGE_ABOUT: "CHANGE_PAGE_ABOUT",
  CHANGE_PAGE_PRODUCT: "CHANGE_PAGE_PRODUCT",
  CHANGE_PAGE_BLOG: "CHANGE_PAGE_BLOG",
  CHANGE_PAGE_CONTACT: "CHANGE_PAGE_CONTACT"
}

appDispatcher.register(payload => {
  if(payload.actionType === ActionType.CHANGE_PAGE_TOP) {
    pageStore.page = "top"
    pageStore.onChange()
  }
  if(payload.actionType === ActionType.CHANGE_PAGE_ABOUT) {
    pageStore.page = "about"
    pageStore.onChange()
  }
  if(payload.actionType === ActionType.CHANGE_PAGE_PRODUCT) {
    pageStore.page = "product"
    pageStore.onChange()
  }
  if(payload.actionType === ActionType.CHANGE_PAGE_BLOG) {
    pageStore.page = "blog"
    pageStore.onChange()
  }
  if(payload.actionType === ActionType.CHANGE_PAGE_CONTACT) {
    pageStore.page = "contact"
    pageStore.onChange()
  }
})