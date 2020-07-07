import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import MyShoppings from "./components/MyShoppings";
import Home from "./components/Home";
import Nav from "./components/Nav";
import FooterP from "./components/Footer";
import "./components/styles/App.less";
import "antd/dist/antd.less";
import {ProductProvider} from './components/ContextProducts';

function App() {
  return (
    <ProductProvider>
      <div className="body">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/myShopping" exact component={MyShoppings} />
          </Switch>
          <FooterP />
        </Router>
      </div>
    </ProductProvider>
  );
}

export default App;
