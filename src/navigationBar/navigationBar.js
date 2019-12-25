import React from "react";
import store from "../store";

import { connect } from 'react-redux'

const top = function () {
  store.dispatch({type: 'TOP'})
}

const about = function () {
  store.dispatch({type: 'ABOUT'})
}

const product = function () {
  store.dispatch({type: 'PRODUCT'})
}

const blog = function () {
  store.dispatch({type: 'BLOG'})
}

const contact = function () {
  store.dispatch({type: 'CONTACT'})
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