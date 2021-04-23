import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
