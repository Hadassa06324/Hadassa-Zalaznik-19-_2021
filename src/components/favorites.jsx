import { MyCard } from './card'
import { connect } from "react-redux"
import { deleteFavoriteLocation, viewfavorite } from "../redax/actions/locationAction";
import { CurrentWeather } from './currentWeather';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import  Button  from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import NavigationIcon from '@material-ui/icons/Navigation'
import { Container } from "react-bootstrap";
import ClearIcon from '@material-ui/icons/Clear';


function mapStateToProps(state) {
  debugger
  return {
    locations: state.locationReducer
  }
}

export default connect(mapStateToProps)(function Favorites(props) {
  const { dispatch, locations } = props
  const history = useHistory()
  const toast = useRef(null);

  function toWeather(item) {
    dispatch(viewfavorite(item))
    return history.push('/getWeatherByLocation')
  }

  function remove(index) {
    dispatch(deleteFavoriteLocation(index))
    toast.current.show({ severity: 'info', summary: 'Info Message', detail: 'Location deleted', life: 3000 });
  }

  return (<>
  <Container>
    <Toast ref={toast} />
    {locations.favoriteLocation.map((item, index) => {
      return <div key={index} style={{ display: 'inline-block' }}>
        <MyCard index={index} >
          <h1>{item.LocalizedName}</h1>
          <CurrentWeather locationKey={item.Key}></CurrentWeather>
          <span>
          <Button onClick={() => toWeather(item)}> <NavigationIcon sx={{ mr: 1 }} />To weather</Button>
          <Button onClick={() => remove(index)}><ClearIcon sx={{ mr: 1 }} />Remove</Button>
          </span>
        </MyCard>
      </div>
    })}
    </Container>
  </>)
})