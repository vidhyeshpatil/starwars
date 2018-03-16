import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginScreen extends Component {
  
  constructor() {
	super();
	
	this.state = {
		data : [],
		inputData: {
			charName: '',
			pwd: ''
		},
		errorMsgs: {
			charName : '',
			pwd : ''
		}
	}
  }
  
  componentWillMount() {
	let url = "https://swapi.co/api/people/";
	
	this.getAPICall(url);
  }  
  
  // API Call to get response of Star War Characters
  getAPICall = (url) => {
	fetch(url)
		.then(res => res.json())
		.then(res => {this.updateComponent("data", res.results)})
		.catch((error) => {
			alert(error);
		});
  }
  
  // stores the data as per current input value
  onInputChange = (e) => {
	this.state.inputData[e.target.id] = e.target.value;
  }
  
  // moves to nextScreen after all validation checks
  onSubmitBtn = () => {
	
	(this.validateForm()) && this.props.history.push('/searchScreen');
  }
  
  // validation checks
  validateForm = () => {
	let errorMsgs = this.state.errorMsgs, inputData = this.state.inputData, 
		isValidChar, isCharEmpty, isValidPwd, isPwdEmpty;
	
	isValidChar = this.checkVal(inputData, "name", "charName");
	isCharEmpty = (inputData.charName.length > 0);
	errorMsgs.charName = (!isCharEmpty) ? "Please Enter Character Name" : (!isValidChar) ? "Please Enter Valid Character Name" : "";
	
	isValidPwd = this.checkVal(inputData, "birth_year", "pwd");
	isPwdEmpty = (inputData.pwd.length > 0);
	errorMsgs.pwd = (!isPwdEmpty) ? "Please Enter Password" : (!isValidPwd) ? "Please Enter Valid Pwd" : "";
	
	return (isValidChar && isValidPwd) || this.updateComponent("errorMsgs", errorMsgs);
  }
  
  // checks value in the response
  checkVal = (inputData, type1, type2) => {
	let val = this.state.data.filter((currVal) => {
				return (currVal[type1] === inputData[type2])
			  });
	
	return (val.length > 0) || false;
  }
  
  // updates the respective component
  updateComponent = (stateToChange, val) => {
	this.setState({[stateToChange]: val})
  }
  
  render() {
	return (
      <div className = "formParent">
		<div className = "formGroup">
			<h2 className = "formTitle"> DETAILS </h2>
			<input id = "charName" className = "inputTag" type = "text" placeholder = "Enter Star Wars Character" onChange = {(e) => this.onInputChange(e)} />
			<span className = "error">{this.state.errorMsgs.charName}</span>
			<input id = "pwd" className = "inputTag" type = "password" placeholder = "Enter Password" onChange = {(e) => this.onInputChange(e)} />
			<span className = "error">{this.state.errorMsgs.pwd}</span>
			<button type = "submit" className="loginBtn" onClick = {() => this.onSubmitBtn()}> Login </button>
		</div>
      </div>
    );
  }
}

export default withRouter(LoginScreen);