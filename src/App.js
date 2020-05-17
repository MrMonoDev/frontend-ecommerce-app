import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import FooterP from './components/Footer';
import './components/styles/App.less';
import 'antd/dist/antd.less';

class App extends React.Component{
  
  render(){
    
    return(
      
      <div class="body">
      <Router>
        <Nav />
          <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/login" exact component = {Login}/>
          <Route path="/contact" exact component = {Contact}/>
          <Route path="/about" exact component = {About}/>
          </Switch>
          <FooterP />
      </Router>
      </div>
      );
  }
}


export default App;

