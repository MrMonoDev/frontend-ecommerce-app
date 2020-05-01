import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Componets/Login';
import Contact from './Componets/Contact';
import About from './Componets/About';
import Home from './Componets/Home';
import Nav from './Componets/Nav';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
         
    }
  }
  
  render(){
    
    return(
      <Router>
        <Nav />
          <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/login" exact component = {Login}/>
          <Route path="/contact" exact component = {Contact}/>
          <Route path="/about" exact component = {About}/>
          </Switch>
      </Router>
      );
  }
}


export default App;

