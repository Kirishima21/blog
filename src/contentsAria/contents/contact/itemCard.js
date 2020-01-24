import React from 'react'

class ItemCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="itemCard">
        <div className="iconAria">
          <img className="icon" src={this.props.img_src}/>
        </div>
        <div className="textAria">
          <div className="variety">SNS：{this.props.sns_name}</div>
          <div className="name">NAME：{this.props.account_name}</div>
          <div className="id">ID：@{this.props.account_id}</div>
          <div className="link">LINK：<a href={this.props.account_link}>{this.props.account_link}</a></div>
        </div>
      </div>
    )
  }
}

export default ItemCard;