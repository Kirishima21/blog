import React from "react";

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img className="titleImage" src="title.svg" />
      </div>
    )
  }
}

export default PageTitle;