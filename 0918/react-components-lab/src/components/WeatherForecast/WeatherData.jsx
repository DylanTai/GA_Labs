// src/components/WeatherForecast/WeatherData.jsx
const WeatherData = ({day, conditions, time}) => {
  return (
    <div>
      <h2>{day}</h2>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  )
}
export default WeatherData
