import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Image from "./img/valhala1000.png";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./styles/Nav.less";
import { Badge } from "antd";
import {ProductContext} from './ContextProducts';

const Nav = () => {
  // eslint-disable-next-line
  const [cart, setcart] = useContext(ProductContext);
  
  return (
    <div class="header-nav">
      <Link to="/">
        <img class="img-nav" src={Image} alt="Logo" />
      </Link>
      <Link to="/login">
        <div className="user-nav">
          <Badge count={0} dot>
            <UserOutlined style={{ fontSize: 25 }} />
          </Badge>
        </div>
      </Link>
      <Link to="/myShopping">
        <div className="shopping-nav">
          <Badge Key="badge-shopping" count={cart.length}>
            <ShoppingCartOutlined style={{ fontSize: 25 }} />
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
