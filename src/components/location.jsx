
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Input } from "./input";
import { connect } from "react-redux"
import { setSelectedLocation, addFavoriteLocation } from "../redux/actions/locationAction";
import { Toast } from 'primereact/toast';
import '../index.css';
import StarsIcon from '@material-ui/icons/Stars';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from '@material-ui/core/Button';

function mapStateToProps(state) {
  return {
    locations: state.locationReducer
  }
}

export default connect(mapStateToProps)(function Location(props) {

  const { dispatch, locations } = props

  const [selector, setSelector] = useState(locations.selectedLocation);
  const toast = useRef(null)

  let location = {
    Version: 1,
    Key: "215854",
    LocalizedName: "Tel Aviv",
    Country: "Israel"
  }

  function addLocationToFavorites() {
    dispatch(addFavoriteLocation(locations.selectedLocation))
    toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Saved to Favorites', life: 3000 });
  }


  useEffect(() => {
      if (selector) {
        location.Version = selector.Version
        location.Key = selector.Key
        location.LocalizedName = selector.LocalizedName
        location.IsFavorite = false
        dispatch(setSelectedLocation(location))
      }
      else
        toast.current.show({ severity: 'warn', summary: 'Warn Message', detail: 'Location Not Found', life: 3000 });
  }, [selector]);


  return (
    <Container>
      <Toast ref={toast} />
      <Row>
        <Col>
          <Input setSelector={setSelector}></Input>
        </Col>
        <Col>
          {locations.selectedLocation.IsFavorite ? <><label>the location is favorite </label><StarsIcon></StarsIcon></> :
            <Button onClick={addLocationToFavorites} color="primary">Save to Favorites</Button>}
        </Col>
      </Row>
    </Container>
  );
})