import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter

} from 'react-router-dom'
import Favorites from './favorites';
import Weather from './weather';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default withRouter(function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = props.history


  return (
    <>
      <Container>
        <br/>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction onClick={() => { history.push("/") }} label="Weather" icon={<Brightness4Icon />} />
          <BottomNavigationAction onClick={() => { history.push("/favorites") }} label="Favorites" icon={<FavoriteBorderIcon />} />
        </BottomNavigation>
      </Container>

      <Switch>
        <Route path="/favorites">
          <Favorites></Favorites>
        </Route>

        <Route path="/getWeatherByLocation">
          <Weather></Weather>
        </Route>

        <Route path="/">
          <Weather></Weather>
        </Route>
      </Switch>
    </>
  );
}
)

