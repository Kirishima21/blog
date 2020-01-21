import React from "react"
import {pageStore} from "../../store"

/*それぞれのコンテンツのインポート*/
import About from "../contents/about/about";
import Blog from "../contents/blog/blog";
import Contact from "../contents/contact/contact";
import Product from "../contents/product/product";
import Top from "../contents/top/top";

class MainAria extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      page: pageStore.page
    }

    pageStore.onChange = () => {
      this.setState({page: pageStore.page})
    }

  }

  render(){

    let view
    if (this.state.page === "top"){
      view = <Top/>
    } else if (this.state.page === "about"){
      view = <About/>
    } else if (this.state.page === "product"){
      view = <Product/>
    } else if (this.state.page === "blog"){
      view = <Blog/>
    } else if (this.state.page === "contact"){
      view = <Contact/>
    }

    return(
      <div className="MainAria" >
        MainAria <br />
        {view}
      </div>
    )
  }
  
}

export default MainAria;