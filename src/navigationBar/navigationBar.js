import React from "react"
import store from "../store"
import {changePageAbout, changePageBlog, changePageContact, changePageProduct, changePageTop} from "../actionCreater";

const top = function () {
  store.dispatch(changePageTop())
}

const about = function () {
  store.dispatch(changePageAbout())
}

const product = function () {
  store.dispatch(changePageProduct())
}

const blog = function () {
  store.dispatch(changePageBlog())
}

const contact = function () {
  store.dispatch(changePageContact())
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavigationMenu">
        <div className="top">
          <input type="button" value="top" onClick={() => { top() }}></input>
        </div>
        <div className="about">
          <input type="button" value="about" onClick={() => { about() }}></input>
        </div>
        <div className="product">
          <input type="button" value="product" onClick={() => { product() }}></input>
        </div>
        <div className="blog">
          <input type="button" value="blog" onClick={() => { blog() }}></input>
        </div>
        <div className="contact">
          <input type="button" value="contact" onClick={() => { contact() }}></input>
        </div>
      </div>
    )
  }
}



export default NavigationBar ;