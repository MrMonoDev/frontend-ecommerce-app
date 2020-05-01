import React from 'react';
import './css/login.css';
import Image from './img/valhala1000.png';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      access:"Access",
      saccess:"Register",
      func:"Login",
      sfunc:"Sign up",
      nuser:"New user",
      cuser:"Cancel",
      user:"",
      password:"",
      email:"",
      error:""
      
    }
  }
  
  nRegist= ()=>{
    this.setState({func:this.state.sfunc});
    this.setState({access:this.state.saccess});
    this.setState({nuser:this.state.cuser});
  }
  cnlRegist = ()=>{
    this.setState({func:"Login"});
    this.setState({access:"Access"});
    this.setState({nuser:"New user"});
  }
  handleChange = (event)=>{
    this.setState({[event.target.name]: event.target.value});

    if (this.state.func === this.state.sfunc && event.target.name === "password") {
      var passVal=event.target.value;
      if (passVal.length >= 7) {
        var e = "";
        this.setState({error:e})
        document.getElementById('sub').removeAttribute("disabled","");
      }else{
        e = <div className="error">
              <p>Password too short!</p>
            </div>;
      this.setState({error:e});
      }
    }
  }
  comparePass = (event)=>{
    var passVal= event.target.value;
    if (passVal === this.state.password && passVal.length >= 7) {
      var e = "";
      this.setState({error:e})
      document.getElementById('sub').removeAttribute("disabled","");
    }else{
        e = <div className="error">
              <p>Password is different!</p>
            </div>;
      this.setState({error:e});
    document.getElementById('sub').setAttribute("disabled","");
    }
  }
  onSub = (event)=>{
   
  }
  
  render(){
    
    return(
      <Form />
      

      );
  }
}
class Form extends Login{
  render(){
    if (this.state.func === this.state.sfunc) {
      var regist =  <div>
                    <label>Repeat password</label><br/>
                    <input type="password" onChange={this.comparePass}required/><br/>
                    {this.state.error}
                    <label>E-mail</label><br/>
                    <input type="text" name="email" onChange={this.handleChange}required/>
                    </div>;
    }
    if (this.state.nuser !== this.state.cuser) {
      var method = this.nRegist;
    }else{
      method = this.cnlRegist;
    }
    var nButtRegist = <div className="nuser-wrapper">
                      <button onClick={method} className="nuser"><div class='rotate'>{this.state.nuser}</div></button>
                      </div>;
    return(
      <div className="login">
        <h3 className="title">{this.state.func}</h3>
        <img src={Image} alt="languages"/>
        <div className="inner-margin">
        <form onSubmit={this.onSub}>
          <label>User</label><br/>
          <input type="text" className="iuser" name="user" onChange={this.handleChange}required/><br/>
          <label>Password</label><br/>
          <input type="password" name="password" onChange={this.handleChange}required/><br/>
          {regist}
          <button type="submit" className="submit" id="sub">{this.state.access}</button>
        </form>
        {nButtRegist}
        </div>
      </div>
      );
  }
}


export default Login;

