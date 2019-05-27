import React from "react";
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import Table from "./components/Table";

const API_KEY = "aa1576da92d23ebbe8e2de9391fc5899";

class App extends React.Component{
  state = {
    list: [],
  }

  getWeather = async (e) => {
    const city = e.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    //console.log(data);
    if(this.state.list == null){
      this.setState({
        list:{city: city, temperature: data.main.temp, humidity: data.main.humidity, description: data.weather[0].description}
      });
    }
    else{
      this.setState({
        list: this.state.list.concat([{city: city, temperature: data.main.temp, humidity: data.main.humidity, description: data.weather[0].description}])
      });
    }

    console.log(this.state.list);
  }

//setting up props for weather.js from our app state
  render(){
    return(
      <div>
        <Titles />
        <Weather
          getWeather={this.getWeather}
        />
        <Table
          list ={this.state.list}/>
      </div>
    );
  }
};

export default App;
