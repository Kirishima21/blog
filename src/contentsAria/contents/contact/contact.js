import React from 'react'
import accountData from "./contactData";
import ItemCard from "./itemCard";

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contactAria">
        {accountData.map((data) => {
          return (
            <div>
              <ItemCard
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
      </div>
    )
  }

}

export default Contact;