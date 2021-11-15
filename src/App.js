import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import MyPokemon from './components/pokemon/MyPokemon';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route exact path="/mypokemon/" component={MyPokemon} />
          </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;
