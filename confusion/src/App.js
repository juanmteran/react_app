import Main from './components/MainComponent';
import { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {

  render() {
          return (
            <BrowserRouter>
              <Main/>
              
            </BrowserRouter>
          );
  }
}

export default App;
