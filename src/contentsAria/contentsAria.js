import React from "react";
import MainAria from "./mainAria/mainAria";
import SubAria from "./subAria/subAria";
import store from "../store";
import {connect} from 'react-redux';

class ContentsAria extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let view
    let x = store.getState()
    if (x === "blog") {
      view = <SubAria/>
    }

    return (
      <div className="ContentsAria">
        <MainAria/>
        {view}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

export default connect(mapStateToProps)(ContentsAria);