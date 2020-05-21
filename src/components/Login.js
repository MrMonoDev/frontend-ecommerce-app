import React from 'react';
import './styles/Login.less';
import Image from './img/valhala1000.png';
import {DatePicker, Input, Button, Alert } from 'antd';
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
      passwordRepeat:"",
      email:"",
      birthday:"",
      buttonE:false,
      alertP:"",
      actButtCrtl:false,
      classE:"nuser-wrapper"
    }
  }

  nRegist = () => {
    this.setState({ func: this.state.sfunc });
    this.setState({ access: this.state.saccess });
    this.setState({ nuser: this.state.cuser });
    this.setState({buttonE:true});
    this.setState({classE:"nuser-wrapper-second"});
  }
  cnlRegist = () => {
    this.setState({ func: "Login" });
    this.setState({ access: "Access" });
    this.setState({ nuser: "New user" });
    this.setState({classE:"nuser-wrapper"});
  }
  handleChange = (event) => {
    this.activeButton();
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.func === this.state.sfunc && event.target.name === "password") {
      var passVal = event.target.value;
      if (passVal.length >= 7) {
        this.setState({alertP: ""});
      } else {
        this.setState({alertP: <Alert message="Type at least 7 caracters" type="error" showIcon />});
      }
    }
    if (this.state.passwordRepeat !== ""){
      if (this.state.passwordRepeat !== event.target.value && event.target.name === "password"){
        this.setState({alertP: <Alert message="Passwords must match!" type="error" showIcon />});
      }else{
        this.setState({alertP: <Alert message="Passwords match!" type="success" showIcon />});
      }
    }
    
  }
  comparePass = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    var passVal = event.target.value;
    if (passVal === this.state.password && passVal.length >= 7) {
      this.setState({alertP: <Alert message="Passwords match!" type="success" showIcon />}); 
    } else {
      this.setState({alertP: <Alert message="Passwords must match!" type="error" showIcon />});
    }
  }
  datePickValue = (date, dateString) =>{
    var dateS = dateString;
    this.setState({birthday:dateS});
    this.activeButton();
    
  }
  activeButton = () => {
    if(this.state.user !== "" && this.state.password !== "" && this.state.email !== "" && this.state.birthday !== ""){
      this.setState({buttonE:false});
      console.log("all data set");
    }else{
      this.setState({buttonE:true});
      console.log("not all data is set");
    }
  }
  onSub = () => {
    console.log(this.state.password + " " + this.state.passwordRepeat);
    console.log(this.state.user);
    console.log(this.state.email);
    console.log(this.state.birthday);
    
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
        <Input.Password className="input" name="passwordRepeat" placeholder="Repeat Password" onChange={this.comparePass} required/><br />
        {this.state.alertP}
        <Input className="input" name="email" placeholder="Email" prefix={<MailOutlined />} onChange={this.handleChange} required/>
        <div>
         <DatePicker placeholder="Date of birth" name="birthday" style={{width:"100%"}} onChange={(date, dateString)=>this.datePickValue(date, dateString)} /><br />
        </div>
      </div>;
    }
    if (this.state.nuser !== this.state.cuser) {
      var method = this.nRegist;
    } else {
      method = this.cnlRegist;
    }
    var nButtRegist = <div className={this.state.classE}>
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
              <Button type="primary" block disabled={this.state.buttonE} onClick={this.onSub}>{this.state.access}</Button>
            </form>
          </div>
        {nButtRegist}
      </div>
      </div>

    );
  }
}


export default Login;

