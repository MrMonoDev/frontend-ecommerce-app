import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import MyShoppings from './components/MyShoppings';
import Home from './components/Home';
import Nav from './components/Nav';
import FooterP from './components/Footer';
import './components/styles/App.less';
import 'antd/dist/antd.less';

class App extends React.Component{
  
  render(){
    return(
      <div className="body">
      <Router>
          <Nav />
          <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/login" exact component = {Login}/>
          <Route path="/myShopping" exact component = {MyShoppings}/>
          </Switch>
          <FooterP />
      </Router>
      </div>
      );
  }
}


export default App;

