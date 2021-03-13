import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import Image from "./img/valhala1000.png";
import { ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import "./styles/Nav.less";
import { Badge } from "antd";
import {ProductContext} from './ContextProducts';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import moment from "moment";


export const Nav = () => {
  // eslint-disable-next-line
  const [cart, setcart] = useContext(ProductContext);
  const { Option } = Select;
  const [activity, setactivity] = useState(false);
  const [shiftUser, setshiftUser] = useState("New User Account");
  const [title, settitle] = useState("Login");
  const [userNameTitle, setuserNameTitle] = useState("User");
  const [repeatPass, setrepeatPass] = useState("");
  function disabledDate(current) {
    const today = moment();
    const ago = moment().subtract(18, 'year');
    const diff = today.diff(ago, 'day');
    return current > moment().endOf('day').subtract(diff, 'day')
  }
  const [birthDate, setbirthDate] = useState("");
  const [email, setemail] = useState("");
  const selectAfter = (
    <Select defaultValue="@gmail.com" className="select-after">
      <Option value="@gmail.com">@gmail.com</Option>
      <Option value="@yahoo.com">@yahoo.com</Option>
      <Option value="@outlook.com">@outlook.com</Option>
    </Select>
  );

  const newUser = () => {
    if (shiftUser === "Login"){
      setshiftUser("New User Account");
      settitle("Login");
      setuserNameTitle("User");
      setrepeatPass("");
      setbirthDate("");
      setemail("");
    }else{
      setshiftUser("Login");
      settitle("Create Account");
      setuserNameTitle("New User");
      setrepeatPass(
        <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="repeatPassword"
                  label="Repeat Password"
                  rules={[{ required: true, message: 'Please repeat password' }]}
                >
                  <Input.Password placeholder="Please repeat password" onChange={passMatch} />
                </Form.Item>
              </Col>
            </Row>
      );
      setbirthDate(
        <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="birthDate"
                  label="Birth Date"
                  rules={[{ required: true, message: 'Please add birthdate' }]}
                >
                  <DatePicker style={{width:310}} showToday={false} disabledDate={disabledDate} 
                  defaultPickerValue={moment().subtract(18,'year')}/>
                </Form.Item>
              </Col>
            </Row>
      );
      setemail(
        <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter email' }]}
                >
                  <Input addonAfter={selectAfter} placeholder="Please enter email" />
                </Form.Item>
              </Col>
            </Row>
      );
    }
  }
  const passMatch = () => {

  }
  const active = () => {
    setactivity(true);
  }
  const deactive = () => {
    setactivity(false);
  }
  return (
    <div class="header-nav">
      <Link to="/">
        <img class="img-nav" src={Image} alt="Logo" />
      </Link>
      <Link to="#">
        <div className="user-nav">
          <Badge count={0} dot>
            <UserOutlined style={{ fontSize: 25 }} onClick={active} />
          </Badge>
        </div>
      </Link>
      <Link to="/myShopping">
        <span className="shopping-nav">
          <Badge Key="badge-shopping" count={cart.length} overflowCount={9}>
            <ShoppingCartOutlined style={{ fontSize: 25 }} />
          </Badge>
        </span>
      </Link>
        <Drawer
          title={title}
          width={360}
          onClose={deactive}
          visible={activity}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={newUser} style={{ marginRight: 8 }}>
                {shiftUser}
              </Button>
              <Button onClick={deactive} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark autoComplete="off">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="user"
                  label={userNameTitle}
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please enter password' }]}
                >
                  <Input.Password placeholder="Please enter password" />
                </Form.Item>
              </Col>
            </Row>
            {repeatPass}
            {birthDate}
            {email}
          </Form>
        </Drawer>
    </div>
  );
};







      


