import React from 'react'
import aboutContents from "./aboutContents";
import AboutItemCard from "./itemCard";

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br/>
        {aboutContents.map((aboutData) => {
          return (
            <div>
              <AboutItemCard
                itemCardColor={aboutData.itemCardColor}
                title={aboutData.title}
                contents={aboutData.contents}
                supplement={aboutData.supplement}
                supplementOne={aboutData.supplementOne}
              />
              <br/>
            </div>
          )
        })}
      </div>
    )
  }

}

export default About;