import React from "react";
import { Link } from "react-router-dom";
import Image from "./img/valhala1000.png";
import { MenuOutlined } from "@ant-design/icons";
import "./styles/Nav.less";

class Nav extends React.Component {
  state = {
    menuP: ""
  }
  responsiveChange = (a) => {
     if (a.matches) {
      this.setState({menuP:<div className="menu-ico" ><MenuOutlined style={{fontSize:"40px"}} /></div>});
    } else { 
      this.setState({menuP: 
          <div>
          <Link to="/about">
            <div class="about-nav">
              <a>About</a>
            </div>
          </Link>
          <Link to="/contact">
            <div class="contact-nav">
              <a>Contact</a>
            </div>
          </Link>
          <Link to="/login">
            <div class="login-nav">
              <a>Login</a>
            </div>
          </Link>
        </div> })
    }
  };
  render() {    
    var screen = window.matchMedia("(max-width: 1024px)");
    {screen.addListener(()=>this.responsiveChange(screen))}
    return (
      <div class="header-nav" onLoad={() => this.responsiveChange(screen)}>
        <Link to="/">
          <img class="img-nav" src={Image} alt="Logo" />
        </Link>
         {this.state.menuP}
      </div>
    );
  }
}

export default Nav;
