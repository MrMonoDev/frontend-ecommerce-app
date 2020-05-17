import React from 'react';
import { Link } from 'react-router-dom';
import Image from './img/valhala1000.png';
import './styles/Nav.less';

class Nav extends React.Component {

  render() {
    return (

      <div class="header-nav">
        <Link to="/">
          <img class="img-nav" src={Image} alt="Logo" />
        </Link>
        <Link to="/about">
          <div class="about-nav">
          <a href="#" style={{color:'#030852'}}>About</a>
          </div>
        </Link>
        <Link to="/contact">
          <div class="contact-nav">
          <a href="#" style={{color:'#030852'}}>Contact</a>
          </div>
        </Link>
        <Link to="/login">
          <div class="login-nav">
          <a href="#" style={{color:'#030852'}}>Login</a>
          </div>
        </Link>
      </div>
    );
  }
}


export default Nav;