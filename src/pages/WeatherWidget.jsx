// import React, {useState, useEffect} from 'react'
import React, { Component } from 'react'
import Moment from 'react-moment'
import '../styles/widget.css'
import {
  Container,
  Jumbotron
} from 'reactstrap'

const key = "770d3167b3eba3b1c6578ba7c1153c3b"
const url = "https://api.openweathermap.org/data/2.5/onecall"
const pitts = {
  lat : 40.44,
  lon : -79.99
}
const part = "hourly"
const indicate = {
  sun: "https://cdn.pixabay.com/photo/2013/07/13/10/23/sun-157126_1280.png",
  moon: "https://cdn.pixabay.com/photo/2020/04/15/07/17/moon-5045418_1280.jpg",
  rain: "https://cdn.pixabay.com/photo/2013/02/21/19/11/rain-84648_1280.jpg",
  thunderstorm: "https://cdn.pixabay.com/photo/2013/04/01/09/22/thunderstorm-98541_1280.png",
  snow: "https://cdn.pixabay.com/photo/2014/04/02/14/10/cloud-306404_1280.png",
  drizzle: "https://cdn.pixabay.com/photo/2016/03/31/15/03/background-1292963_1280.png",
  cloudy: "https://cdn.pixabay.com/photo/2014/04/03/11/56/clouds-312651_1280.png",
  clear: "https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg"
}


  export default class WeatherWidget extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentTemp: "",
        currentDescription: "",
        currentMessage: "",
        currentWindSpeed: "",
        currentWindDir: "",
        currentWindDeg: "",
        dailyMax: "",
        dailyMin: "",
        sunrise: "",
        sunset: "",
        time: ""
      }
    }
    convert(k) {
      k += -273.15
      let f = k * 9/5 
      f += 32
      return Math.round(f) + '°F'
    }
    toTitleCase(str) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
  }
    direction() {
      let deg = this.state.currentWindDeg
      if (338 < deg < 24) {
        return 'North'
      } else if (295 < deg < 337) {
        return 'NorthWest'
      } else if (248 < deg < 294) {
        return 'West'
      } else if (203 < deg < 247) {
        return 'SouthWest'
      } else if (157 < deg < 202) {
        return 'South'
      } else if (112 < deg < 156) {
        return 'SouthEast'
      } else if (69 < deg < 111) {
        return 'East'
      } else if (25 < deg < 68) {
        return 'NorthEast'
      } else {
          return 'Bonkers'
      }
    }
    photo() {
      let itIs = this.state.currentDescription
      if ( itIs === 'Rain') {
        return indicate.rain
      } else if (itIs === 'Thunderstorm') {
        return indicate.thunderstorm
      } else if (itIs === 'Drizzle') {
        return indicate.drizzle
      } else if (itIs === 'Clouds') {
        return indicate.cloudy
      } else if (itIs === 'Snow') {
        return  indicate.snow
      } else {
        return indicate.clear
      }
    }
    componentDidMount() {
    fetch(`${url}?lat=${pitts.lat}&lon=${pitts.lon}&exclude=${part}&appid=${key}`)
    .then(obj => {
      return obj.json()
    })
    .then(resp => {
        this.setState({
          currentTemp: this.convert(resp.current.temp),
          currentDescription: resp.current.weather[0].main,
          currentMessage: this.toTitleCase(resp.current.weather[0].description),
          currentWindSpeed: resp.current.wind_speed + 'mph',
          currentWindDir: resp.current.wind_deg + '°',
          currentWindDeg: resp.current.wind_deg,
          dailyMax: this.convert(resp.daily[0].temp.max),
          dailyMin: this.convert(resp.daily[0].temp.min),
          sunrise: resp.current.sunrise,
          sunset: resp.current.sunset,
          time: resp.current.dt
        })
        // console.log(resp)
      })}

render() {
  return (
    <Jumbotron>
      <Container><div className="pad">
   <div className="center-flex" style={{backgroundImage: `url(${this.photo()})`}}>
    <section>
    <h1>Current Weather</h1>
    <h3>for</h3>
    <h1>Pittsburgh, PA</h1>
    <h3>
      <Moment unix format="MM/DD/YYYY">{this.state.time}</Moment>
    </h3>
    <h3>{this.state.currentMessage}</h3>
    <h1>{this.state.currentTemp}</h1>
    <h4>High: {this.state.dailyMax}</h4>
    <h4>Low: {this.state.dailyMin}</h4>
    <h4>{'Sunrise: '}
    <Moment unix format="HH:MM">{this.state.sunrise}</Moment></h4>
    <h4>{'Sunset: '}
    <Moment unix format="HH:MM">{this.state.sunset}</Moment></h4>
    <h6>
      Wind speed: {this.state.currentWindSpeed}
      {' '}
      {this.direction()} @ {this.state.currentWindDir}
    </h6>
    <img id="indicator" alt="#" src={this.photo()} />
  </section>
  <p className="color-ivory">Widget by Dante Harasz</p>
</div></div>
</Container>
</Jumbotron>)
}}