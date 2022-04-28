import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact'
import  Add  from './components/pages/add';
import  Display  from './components/pages/display';
import  Update  from './components/pages/update';
import GPS from './components/pages/GPS'
import home from './components/pages/Home';
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
        <Route path='/add'> <Add /></Route>
        <Route path='/display'><Display/></Route>
        <Route path="/update/:id" component={Update}></Route>
        <Route path='/GPS' exact component={GPS}/>
        
      </Switch>
    </Router>
    );
  }
}
export default App;
