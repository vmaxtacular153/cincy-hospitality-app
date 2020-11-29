import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MainButton from './elements/button.element';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <MainButton />
        <MainButton />
      </div>
     );
  }
}
 
export default App;