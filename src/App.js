import React from 'react';
import { Component } from 'react';
import './App.scss';
import IndexNavbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';
import CardContainer from './containers/card-container';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <IndexNavbar />
        <Header />
        <SearchBar />
        <CardContainer />
      </div>
     );
  }
}
 
export default App;