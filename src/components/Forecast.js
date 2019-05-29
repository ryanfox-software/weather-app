import React from "react";

class Titles extends React.Component {

/*2,4,6,
  10,12,14,
  18,20,22,
  26,28,30
  34,36,38
  6:00am, 12:00 noon, 6:00pm
*/
  render(){

    var temps = [15];
    if(this.props.data == null){
      this.props.getDefaultForecast();
    }
    for(let i = 0; i < 15; i++){
      temps[i] = "";
      if(this.props.data != null){
          temps[i] = this.props.data.list[i+2%8].main.temp;
      }
    }


    return (
      <div className="forecast">
        <ul className="forecastpanel1">
            <li>Day 1:</li>
            <li>6:00 am: {temps[0]}</li>
            <li>12:00 pm: {temps[1]}</li>
            <li>6:00 pm: {temps[2]}</li>
        </ul>
        <ul className="forecastpanel2">
          <li>Day 2:</li>
          <li>6:00 am: {temps[3]}</li>
          <li>12:00 pm: {temps[4]}</li>
          <li>6:00 pm: {temps[5]}</li>
        </ul>
        <ul className="forecastpanel3">
          <li>Day 3:</li>
          <li>6:00 am: {temps[6]}</li>
          <li>12:00 pm: {temps[7]}</li>
          <li>6:00 pm: {temps[8]}</li>
        </ul>
        <ul className="forecastpanel4">
          <li>Day 4:</li>
          <li>6:00 am: {temps[9]}</li>
          <li>12:00 pm: {temps[10]}</li>
          <li>6:00 pm: {temps[11]}</li>
        </ul>
        <ul className="forecastpanel5">
          <li>Day 5:</li>
          <li>6:00 am: {temps[12]}</li>
          <li>12:00 pm: {temps[13]}</li>
          <li>6:00 pm: {temps[14]}</li>
        </ul>
      </div>
    );
  }
};

export default Titles;
