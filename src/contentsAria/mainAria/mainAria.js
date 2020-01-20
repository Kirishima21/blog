import React from "react"
import {pageStore} from "../../store";

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
        {/*
        {store.getState()}
        {this.state.page}を表示します
        <input type="button" value="this.state.viewPages" onClick={() => console.log(this.props.viewPages)}></input>
        <input type="button" value="store.getState" onClick={() => console.log(store.getState())}></input>
        */}
      </div>
    )
  }
}

export default MainAria;