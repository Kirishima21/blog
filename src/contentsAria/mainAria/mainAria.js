import React from "react"
import {pageStore} from "../../store"

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
    return(
      <div className="MainAria" >
        MainAria <br />
        {this.state.page}を表示します
        MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />MainAria <br />
      </div>
    )
  }
}

export default MainAria;