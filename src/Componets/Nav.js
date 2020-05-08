import React from 'react';
import { Link } from 'react-router-dom';
import Image from './img/valhala1000.png';
import './css/Nav.css';
import { Input } from 'antd';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { Search } = Input;
    return (
      <div class="header-nav">
        <Link to="/">
          <img class="img-nav" src={Image} alt="Logo" />
        </Link>
        <Link to="/about">
          <b class="about-nav">About</b>
        </Link>
        <Link to="/contact">
          <b class="contact-nav">Contact</b>
        </Link>
        <Link to="/login">
          <b class="login-nav">Login</b>
        </Link>
        <div className="search-container">
        <Search className="search-box" placeholder="search on this website" enterButton />
        </div>
      </div>
    );
  }
}


export default Nav;