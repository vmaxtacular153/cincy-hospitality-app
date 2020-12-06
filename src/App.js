import React from 'react';
import { Component } from 'react';
import './App.scss';
import IndexNavbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';
import CardContainer from './containers/card-container';
import Footer from './components/footer/footer.component';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <IndexNavbar />
        <Header />
        <SearchBar />
        <CardContainer />
        <Footer />
      </div>
     );
  }
}
 
export default App;