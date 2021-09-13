import { useEffect, useState } from "react";
import { getWeatherForFiveDays } from "../api/Api";
import { MyCard } from "./card";
import moment from "moment";
import { fToC } from './convert'
import { getIconToWeather } from "./weather";

export default function WeatherFor5Days(props) {

  const { locationKey } = props
  const [weatherList, setWeatherList] = useState([])


  useEffect(() => {
    getWeatherForFiveDays(locationKey).then((response) => {
      setWeatherList(response.DailyForecasts)
    })
  }, []);


  return (
    <>
      {weatherList.map((item, index) => {
        return <div key={index} style={{ display: 'inline-block' }}>
          <MyCard >
            {getIconToWeather(item.Night.Icon)}
            {getIconToWeather(item.Day.Icon)}<br />
            <label>{`${fToC(item.Temperature.Minimum.Value)}\xB0C`} - {`${fToC(item.Temperature.Maximum.Value)}\xB0C`}</label>
            <label>{item.Day.HasPrecipitation && 'Has Precipitation'}</label><br />
            <label>{moment(item.Date).format('dddd')}</label><br />
          </MyCard></div>
      })}
    </>
  );
}