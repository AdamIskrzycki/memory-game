import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './components/Game/Game';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/game' component={Game}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
