import React from 'react';
import './styles/Login.less';
import Image from './img/valhala1000.png';
import {DatePicker, Input, Button, Form } from 'antd';
import {UserOutlined, MailOutlined} from '@ant-design/icons';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access: "Access",
      saccess: "Register",
      func: "Login",
      sfunc: "Sign up",
      nuser: "New user",
      cuser: "Cancel",
      fpass: "forgot password?",
      user: "",
      password: "",
      buttonE:false
    }
  }

  nRegist = () => {
    this.setState({ func: this.state.sfunc });
    this.setState({ access: this.state.saccess });
    this.setState({ nuser: this.state.cuser });
    this.setState({buttonE: true});
    document.getElementById('user-btn').className = "nuser-wrapper-second";
  }
  cnlRegist = () => {
    this.setState({ func: "Login" });
    this.setState({ access: "Access" });
    this.setState({ nuser: "New user" });
    this.setState({buttonE: false});
    document.getElementById('user-btn').className = "nuser-wrapper";
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    if (this.state.func === this.state.sfunc && event.target.name === "password") {
      var passVal = event.target.value;
      if (passVal.length >= 7) {
        this.setState({buttonE:false});
      } else {
        this.setState({buttonE:true});
      }
    }
  }
  comparePass = (event) => {
    var passVal = event.target.value;
    if (passVal === this.state.password && passVal.length >= 7) {
      this.setState({buttonE:false});
    } else {
      this.setState({buttonE:true});
    }
  }
  onSub = (event) => {

  }

  render() {

    return (
      <FormL />


    );
  }
}
class FormL extends Login {
  render() {
    if (this.state.func === this.state.sfunc) {
      var regist = <div>
        <Input.Password className="input" placeholder="Repeat Password" onChange={this.comparePass} required/><br />
        {this.state.error}
        <Input className="input" name="email" placeholder="Email" prefix={<MailOutlined />} onChange={this.handleChange} required/>
        <div>
        <Form.Item label="Birthday">
         <DatePicker bordered={false}/><br />
        </Form.Item> 
        </div>
      </div>;
    }
    if (this.state.nuser !== this.state.cuser) {
      var method = this.nRegist;
    } else {
      method = this.cnlRegist;
    }
    var nButtRegist = <div id="user-btn" className="nuser-wrapper">
       <Button type="link" onClick={method}>{this.state.nuser}</Button>
    </div>;
    return (
      <div className="father">
        <div className="login">
          <h3 className="title">{this.state.func}</h3>
          <img class="img-login" src={Image} alt="languages" />
          <div className="inner-margin">
            <form onSubmit={this.onSub}>
              <Input className="input" name="user" placeholder="User" prefix={<UserOutlined />} onChange={this.handleChange} required/><br />
              <Input.Password className="input" name="password" placeholder="Password" onChange={this.handleChange} required/><br />
              {regist}
              <Button type="primary" block disabled={this.state.buttonE}>{this.state.access}</Button>
            </form>
          </div>
        {nButtRegist}
      </div>
      </div>

    );
  }
}


export default Login;

