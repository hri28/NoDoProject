import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Home from './components/Home'
import Todo from "./components/Todo"
import Ab from "./components/Ab"
import Timer from "./components/Timer"
import Notes from "./components/Notes"
import Form from './components/Form';
import FormSignup from './components/FormSignup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Login1 from './components/Login1'


function App() {
  return (
      <Router>
      <div className="App">
      {/* <Navbar /> */}
      {/* <Todo /> */}
      <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/todo' exact component={Todo} />
          <Route path= '/ab' exact component={Ab} />
          <Route path='/timer' exact component={Timer} />
          <Route path='/notes' exact component={Notes} />
          <Route path = '/form' exact component={Form} />
          <Route path='/login1' exact component={Login1} />
          <Route path='/formsignup' exact component={FormSignup} />
        </Switch>
        </div>
      </Router>
    
  );
}


export default App;
