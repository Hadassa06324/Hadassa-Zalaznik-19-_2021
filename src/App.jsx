import './App.css';
import { Provider } from 'react-redux';
import store from './redax/stor';
import Navbar from './components/navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          {/* <Weather></Weather> */}
        </Router>
      </Provider>
    </div>
  );
}


export default App;