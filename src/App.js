import React from "react";
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import Table from "./components/Table";
import WeatherCarousel from "./components/WeatherCarousel";
import './App.css';

const API_KEY = "aa1576da92d23ebbe8e2de9391fc5899";

class App extends React.Component{
  state = {
    allowDups: false,
    list: [],
  }

  getWeather = async (e) => {
    const city = e.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    this.updateState(data,city);
    console.log(data);
  }
  updateState = async (data, city) => {
    const tempList = this.state.list.slice();
    if(tempList.length == null){//adding first element
      this.setState({
        list:{city: city, temperature: data.main.temp, humidity: data.main.humidity, description: data.weather[0].description, icon: data.weather[0].icon}
      });
      return;
    }
    else{//concating to an already existing list
      if(this.state.allowDups === false){
        for(let i = 0; i < tempList.length; ++i){
          if(tempList[i].city === city){
            tempList[i] = {city: city, temperature: data.main.temp, humidity: data.main.humidity, description: data.weather[0].description, icon: data.weather[0].icon};
            this.setState({
              list: tempList
            });
            return;
          }
        }
      }
      this.setState({
        list: this.state.list.concat([{city: city, temperature: data.main.temp, humidity: data.main.humidity, description: data.weather[0].description, icon: data.weather[0].icon}])
      });
    }
  }
  updateDup = async (e) =>{
    var b = false;
    if(e.value === "true"){
      b = true;
    }
    else{
      b = false;
    }
    this.setState({
      allowDups: b
    });

  }

//setting up props for weather.js from our app state
  render(){
    return(
      <html>
        <Titles />
        <Table
            list = {this.state.list}
        />
        <Weather
            getWeather={this.getWeather}
            updateDup={this.updateDup}
        />
        <br></br>
        <WeatherCarousel
          list={this.state.list}
        />
      </html>
    );
  }
};

export default App;
