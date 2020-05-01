import React from 'react';
import {Link} from 'react-router-dom';
import Image from './img/valhala1000.png';
class Nav extends React.Component{
    constructor(props){
      super(props);
      this.state = {
           
      }
    }
    
    render(){
      
      return(
        <div>
          <nav>
            <Link to="/">
            <img src={Image} alt="Logo" />
            </Link>
            <Link to="/login">
                <a>Login</a>
            </Link><Link to="/contact">
                <a>Contact</a>
            </Link><Link to="/about">
                <a>About</a>
            </Link>
          </nav>
        </div>
        );
    }
  }
  
  
  export default Nav;