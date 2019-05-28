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
    var mydata = this.props.data;
    //var temps = ["Weather Forecast not established. Please select city"];
    var temps = [15];
    for(let i = 0; i < 15; i++){
      temps[i] = "";
      if(this.props.data != null){
          temps[i] = this.props.data.list[i+2%8].main.temp;
      }
    }


    return (
      <div className="forecast">
      <div className="forecastpanel1">
        Temperature at
        6:00 am
        {temps[0]}
        12:00 pm
        {temps[1]}
        6:00 pm
        {temps[2]}
      </div>
      <div className="forecastpanel2">
      Temperature at
      6:00 am
      {temps[3]}
      12:00 pm
      {temps[4]}
      6:00 pm
      {temps[5]}
      </div>
      <div className="forecastpanel3">
      Temperature at
      6:00 am
      {temps[6]}
      12:00 pm
      {temps[7]}
      6:00 pm
      {temps[8]}
      </div>
      <div className="forecastpanel4">
      Temperature at
      6:00 am
      {temps[9]}
      12:00 pm
      {temps[10]}
      6:00 pm
      {temps[11]}
      </div>
      <div className="forecastpanel5">
      Temperature at
      6:00 am
      {temps[12]}
      12:00 pm
      {temps[13]}
      6:00 pm
      {temps[14]}
      </div>
      </div>
    );
  }
};

export default Titles;
