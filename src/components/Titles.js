import React from "react";

class Titles extends React.Component {
  render(){
    return (
      <div slds-text-heading_medium slds-m-vertical_medium className="title">
      
        <h1 slds-text-heading_medium slds-m-vertical_medium>Current Weather Report</h1>
        {/*<p>Displays weather conditions</p>*/}
      </div>
    );
  }
};

export default Titles;
