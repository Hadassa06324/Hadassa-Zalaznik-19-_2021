import './App.css';
import { Provider } from 'react-redux';
import store from './redux/stor';
import Navbar from './components/navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
        </Router>
      </Provider>
    </div>
  );
}


export default App;
