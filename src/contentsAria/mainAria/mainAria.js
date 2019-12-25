import React from "react";
import store from '../../store'
import { connect } from 'react-redux'

class MainAria extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      viewPages: store.getState()
    }
  }

  render(){
    return(
      <div className="MainAria" >
        MainAria <br />
        {store.getState()}
        {this.props.viewPages}を表示します
        <input type="button" value="this.state.viewPages" onClick={() => console.log(this.props.viewPages)}></input>
        <input type="button" value="store.getState" onClick={() => console.log(store.getState())}></input>
      </div>
    )
  }
}

export default MainAria;