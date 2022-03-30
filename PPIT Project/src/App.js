import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import Results from './components/pages/Results'
import Write from './components/pages/Write'
import GPS from './components/pages/GPS'
import home from './components/pages/Home';
import Edit from './components/pages/Edit';
import QR from './components/pages/QR'

class App extends Component{

render() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={home}/>
        <Route path='/QR' exact component={QR}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/Results' exact component={Results}/>
        <Route path='/write' exact component={Write}/>
        <Route path='/GPS' exact component={GPS}/>
        <Route path='/edit/:id' exact component={Edit}/>
      </Switch>
    </Router>
    );
  }
}
export default App;
