import axios from 'axios'

const API_KEY = 'WajUtpkD3TkDGsZIsWAdsaq8D6b7Ru2s'//NqreXIG0KHDy6Js2jBW8DAAimUlA2Hfz//	23ILefPmaTsLCEHmfJ8pUGR9k0lHHDhO// UeBeczneP0NFawavzOMKplb9Ltyyf9AO
const API_HOST_AND_VERSION = 'http://dataservice.accuweather.com/v1/'



export default function getLocation(locationName) {
  const LocationUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=NqreXIG0KHDy6Js2jBW8DAAimUlA2Hfz&q=${locationName}&language=en-us`

  return axios.get(LocationUrl).then((response) => {
    return response.data
  })
    .catch((err) => { alert(err) })
}

export function getWeatherForFiveDays(locationKey) {
  debugger
  const Url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=NqreXIG0KHDy6Js2jBW8DAAimUlA2Hfz&language=en-us&details=false&metric=false`

  return axios.get(Url).then((response) => {
    return response.data
  })
}

export function getCurrentWeather(locationKey) {

  const Url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=NqreXIG0KHDy6Js2jBW8DAAimUlA2Hfz&language=en-us&details=false`

  return axios.get(Url).then((response) => {
    return response.data
  })
}


// export  function getGeoLocation(locationName) {
//   debugger
//   const LocationUrl = "https://developer.mozilla.org/en-US/docs/Web/API/URL_API"

//   return axios.get(LocationUrl,{headers: {"Access-Control-Allow-Origin": "*"}
//   }).then((response) => {
//       return response
//     })
//     .catch((err)=>{alert(err)})
// }
