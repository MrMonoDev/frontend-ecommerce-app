import React from 'react';
import { Link } from 'react-router-dom';
import Image from './img/valhala1000.png';
import './styles/Nav.css';
import { LoginOutlined, MessageOutlined, InfoCircleOutlined } from '@ant-design/icons';

class Nav extends React.Component {

  render() {
    return (

      <div class="header-nav">
        <Link to="/">
          <img class="img-nav" src={Image} alt="Logo" />
        </Link>
        <Link to="/about">
          <div class="about-nav">
            <InfoCircleOutlined style={{fontSize:'15px'}}/>
          <b>About</b>
          </div>
        </Link>
        <Link to="/contact">
          <div class="contact-nav">
            <MessageOutlined style={{fontSize: '15px'}}/>
          <b>Contact</b>
          </div>
        </Link>
        <Link to="/login">
          <div class="login-nav">
          <LoginOutlined style={{ fontSize: '15px' }} />
          <b>Login</b>
          </div>
        </Link>
      </div>
    );
  }
}


export default Nav;