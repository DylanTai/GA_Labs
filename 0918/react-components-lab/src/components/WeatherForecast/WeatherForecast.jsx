// src/components/WeatherForecast/WeatherForecast.jsx
import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon.jsx'
import WeatherData from './WeatherData.jsx'

const WeatherForecast = ({weather}) => {
  const day = weather.day;
  const conditions = weather.conditions;
  const time = weather.time;
  const img = weather.img;
  return (
    <div className="weather">
      <WeatherIcon src={img} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  )
}

export default WeatherForecast
