import React from "react";
import MainAria from "./mainAria/mainAria";
import SubAria from "./subAria/subAria";

class ContentsAria extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ContentsAria">
        <MainAria/>
        <SubAria/>
      </div>
    )
  }
}

export default ContentsAria;