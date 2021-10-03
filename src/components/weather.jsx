import WeatherFor5Days from "./weatherFor5Days"
import Location from "./location";
import { CurrentWeather } from "./currentWeather";
import { MyCard } from "./card";
import { connect } from "react-redux"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";

//מספר צריך להשלח עם שתי ספרות ולכן אם הוא קטן מ - 10 יש להוסיף 0 לפניו
export function getIconToWeather(iconNumber) {
  if (iconNumber < 10)
    iconNumber = `0${iconNumber}`
  return (
    <img src={`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`} />
  )
}

function mapStateToProps(state) {
  return {
    locations: state.locationReducer
  }
}

export default connect(mapStateToProps)(function Weather(props) {

  const { locations } = props
  const location = locations.selectedLocation

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <Location></Location>
          </Col>
          <Col>
            <CurrentWeather locationKey={location.Key} localizedName={location.LocalizedName} ></CurrentWeather>
          </Col>
        </Row>
        <Row>
          <WeatherFor5Days locationKey={location.Key}></WeatherFor5Days>
        </Row>
      </Container>
    </>
  )
})