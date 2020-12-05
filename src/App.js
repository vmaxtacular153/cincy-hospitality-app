import React from 'react';
import { Component } from 'react';
import './App.scss';
import MainButton from './elements/buttons/button.element';
import IndexNavbar from './components/navbar/navbar.component';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <IndexNavbar />
        <br />
        <h1>Heading Font</h1>
        <h3>Another Heading</h3>
        <p>paragraph font</p>
        <MainButton />
      </div>
     );
  }
}
 
export default App;