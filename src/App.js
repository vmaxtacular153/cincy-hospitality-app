import React from 'react';
import { Component } from 'react';
import './App.scss';
import MainButton from './elements/button.element';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>Heading Font</h1>
        <p>paragraph font</p>
        <MainButton />
        <MainButton />
      </div>
     );
  }
}
 
export default App;