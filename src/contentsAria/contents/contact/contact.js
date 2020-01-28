import React from 'react'
import accountData from "./contactData";
import ContactItemCard from "./itemCard";

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contactAria">
        <br/>
        {accountData.map((data) => {
          return (
            <div>
              <ContactItemCard
                img_src={data.img_src}
                sns_name={data.sns_name}
                account_name={data.account_name}
                account_id={data.account_id}
                account_link={data.account_link}
              />
              <br/>
            </div>
          )
        })}
        <div className="itemCard">
          <div className="iconAria">
            <img className="icon" src="https://kirishima21.github.io/blog/mail.png"/>
          </div>
          <div className="textAria">
            <div className="mail">Gmail：ﾅｲｼｮﾀﾞﾖ！</div>
            <div className="mail">Mail：hello@krsm.me</div>
            <div className="mail">mastdon関連：mastodon@krsm.me</div>
          </div>
        </div>
      </div>
    )
  }

}

export default Contact;