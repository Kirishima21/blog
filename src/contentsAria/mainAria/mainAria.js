import React from "react"
import {connect} from 'react-redux';
import store from "../../store";

/*それぞれのコンテンツのインポート*/
import About from "../contents/about/about";
import Blog from "../contents/blog/blog";
import Contact from "../contents/contact/contact";
import Product from "../contents/product/product";
import Top from "../contents/top/top";

class MainAria extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    let view
    let x = store.getState()
    if (x === "top") {
      view = <Top/>
    } else if (x === "about") {
      view = <About/>
    } else if (x === "product") {
      view = <Product/>
    } else if (x === "blog") {
      view = <Blog/>
    } else if (x === "contact") {
      view = <Contact/>
    } else {
      view = "なにかしらの問題が発生しました。ページのリロードをお願いします"
    }

    return (
      <div className="MainAria">
        {view}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {state}
}

export default connect(mapStateToProps)(MainAria);