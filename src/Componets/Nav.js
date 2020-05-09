import React from 'react';
import { Link } from 'react-router-dom';
import Image from './img/valhala1000.png';
import './css/Nav.css';
import { Input } from 'antd';
import { LoginOutlined, MessageOutlined, InfoCircleOutlined } from '@ant-design/icons';

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
          <div class="about-nav">
            <InfoCircleOutlined style={{fontSize:'15px', color:'#050505'}}/>
          <a>About</a>
          </div>
        </Link>
        <Link to="/contact">
          <div class="contact-nav">
            <MessageOutlined style={{fontSize: '15px', color:'#050505'}}/>
          <a>Contact</a>
          </div>
        </Link>
        <Link to="/login">
          <div class="login-nav">
          <LoginOutlined style={{ fontSize: '15px', color: '#050505' }} />
          <a>Login</a>
          </div>
        </Link>
        <div className="search-container">
          <Search className="search-box" placeholder="search on this website" enterButton />
        </div>
      </div>
    );
  }
}


export default Nav;