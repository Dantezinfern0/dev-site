import React, {useState, useEffect} from 'react'
import Moment from 'react-moment'
import '../styles/widget.css'

// data for fetch url
const key = "770d3167b3eba3b1c6578ba7c1153c3b"
const url = "https://api.openweathermap.org/data/2.5/onecall"
const pitts = {
  lat : 40.44,
  lon : -79.99
}
const part = "hourly"

// data for dynamic background switch
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

const WeatherWidget = () => {
  const  [errors, setErrors] =  useState(false)
  const  [weather,setWeather] = useState({})


  const getWeather = async () => {
    const get = await fetch(`${url}?lat=${pitts.lat}&lon=${pitts.lon}&exclude=${part}&appid=${key}`);
    get
      .json()
      .then(resp => {
        setWeather({
          currentTemp: convert(resp.current.temp),
          currentDescription: resp.current.weather[0].main,
          currentMessage: toTitleCase(resp.current.weather[0].description),
          currentWindSpeed: resp.current.wind_speed + 'mph',
          currentWindDir: resp.current.wind_deg + '°',
          currentWindDeg: resp.current.wind_deg,
          dailyMax: convert(resp.daily[0].temp.max),
          dailyMin: convert(resp.daily[0].temp.min),
          sunrise: resp.current.sunrise,
          sunset: resp.current.sunset,
          time: resp.current.dt
        })
        console.log(resp)
      })
      .catch(err => {
        setErrors(err)
        console.log(errors)
      });
  }

  const convert = (k) => {
    k += -273.15
    let f = k * 9/5 
    f += 32
    return Math.round(f) + '°F'
  }

  function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
  const direction = () => {
    let deg = weather.currentWindDeg
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
  const photo = () => {
    let itIs = weather.currentDescription
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

  useEffect(() => {
    getWeather()
  },[])
  
  return <div className="center-flex" 
  style={{backgroundImage: `url(${photo()})`}}>
    <section>
    <h1>
      Current Weather
    </h1>
    <p>Pittsburgh, PA</p>
    <h2>
      Current: {weather.currentTemp}
    </h2>
    <h3>
      Conditions: {weather.currentMessage}
    </h3>
    <h3>High: {weather.dailyMax}</h3>
    <h3>Low: {weather.dailyMin}</h3>
    <h3>{'Sunrise: '}
    <Moment unix format="hh:mm">{weather.sunrise}</Moment>AM</h3>
    <h3>{'Sunset: '}
    <Moment unix format="hh:mm">{weather.sunset}</Moment>PM</h3>
    <h4>
      Wind speed: {weather.currentWindSpeed}
    </h4>
    <h4>
      Wind direction: {direction()} @ {weather.currentWindDir}
    </h4>
    <br />
    <img id="indicator" alt="#" src={photo()} />
  </section>
  <p>Widget by DankDevTeam</p>
</div>
}
export default WeatherWidget