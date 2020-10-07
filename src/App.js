import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from '../src/components/Game/Game';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/game' component={Game}/>
        </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
