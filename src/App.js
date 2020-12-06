import React from 'react';
import { Component } from 'react';
import './App.scss';
import MainButton from './elements/buttons/button.element';
import IndexNavbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <IndexNavbar />
        <Header />
        <MainButton />
      </div>
     );
  }
}
 
export default App;