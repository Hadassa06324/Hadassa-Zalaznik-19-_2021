import { getCurrentWeather } from "../api/Api";
import { useEffect, useState } from "react";
import { getIconToWeather } from './weather'
import moment from "moment";

export const CurrentWeather = (props) => {

    const { locationKey, localizedName } = props
    const [currentWeather, setCurrentWeather] = useState()

    useEffect(() => {
        getCurrentWeather(locationKey).then((response) => {
            setCurrentWeather(response[0])
        })
    }, []);



    return (
        <>
            {currentWeather && <>
                <h1>{localizedName}</h1>
                {getIconToWeather(currentWeather.WeatherIcon)}
                <br /><label> {currentWeather.WeatherText} </label><br></br>
                <label> {moment(currentWeather.LocalObservationDateTime).format('LLLL')} </label>
                <br></br>
                <h1> {`${currentWeather.Temperature.Metric.Value}\xB0C`} </h1>
                <br></br><br/>
            </>}
        </>
    )
}