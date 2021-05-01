import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <Router>

    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path='/item/:id'>
          <div>
            <ItemDetailContainer />
          </div>
        </Route>
        <Route path='/'>
          <ItemListContainer />
        </Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
