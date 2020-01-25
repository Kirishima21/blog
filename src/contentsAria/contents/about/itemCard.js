import React from 'react'

class AboutItemCard extends React.Component {

  render() {
    return (
      <div className={this.props.itemCardColor}>
        <div className="textAria">
          <div className="title">{this.props.title}</div>
          <div className="name">{this.props.contents}</div>
          <div className="supplement">{this.props.supplement}</div>
          <div className="supplement">{this.props.supplementOne}</div>
        </div>
      </div>
    )
  }

}

export default AboutItemCard