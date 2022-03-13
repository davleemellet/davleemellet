import React, { Component } from 'react'

import FormSignUpStep1 from './FormSignUpStep1'
import FormSignUpStep2 from './FormSignUpStep2'
import FormSignUpStep3 from './FormSignUpStep3'

export class SignUpForm extends Component {
	constructor(props){
		super(props);

		this.state={
			step: 1,
			firstname: '',
			lastname: '',
			organization: '',
			contactNumber: '',
			emailAddress: '',
			confirmEmail: '',
			username: '',
			password: '',
			confirmPassword: '',
		};
	}

	// Proceed to the next Step
	nextStep = ()=>{
		const {step}= this.state
		this.setState({step: step +1})
	};	
	// Procced to the previous step
	prevStep = ()=>{
		const {step}= this.state
		this.setState({step: step -1})
	};
	//  Handle Input Fields Changes
	handleChange = input => e => {
		this.setState({[input]: e.target.value})

		if(this.state.firstname !== ''){
			this.setState({firstnameHelper:false})
		}
	};

  render() {
	const {step} = this.state;
	const {firstname, lastname, organization, contactNumber, emailAddress, confirmEmail, username, password, confirmPassword} = this.state;
	const inputValues ={firstname, lastname, organization, contactNumber, emailAddress, confirmEmail, username, password, confirmPassword};

	const formTitles={
			'FormSignUpStep1':{
				'mainTitle':'Sign Up',
				'Subtitle':'Please enter your full name and organization'
			},
			'FormSignUpStep2':'Please enter your contact number and email address',
			'FormSignUpStep3':'Please enter your username and password'
		};

	const formLabels={
		'FormSignUpStep1':{
			'firstname':'First Name',
			'lastname':'Last Name',
			'organization':'Organization'
		},
		'FormSignUpStep2':{
			'contactNumber': 'Contact Number',
			'emailAddress': 'Email Address',
			'confirmEmail': 'Confirm Email Address'
		},
		'FormSignUpStep3':{
			'username': 'Username',
			'password': 'Password',
			'confirmPassword': 'Confirm Password'
		}
	}
  
	const formHelpers={
		'FormSignUpStep1':{
			'firstnameError':"Please enter your First Name",
			'lastnameError':"Please enter your Last Name",
			'organizationError':"Please enter your Organization Name"
		}
	}

	// eslint-disable-next-line default-case
	switch (step) {
		case 1:
			return (
				<FormSignUpStep1 
				title = {formTitles.FormSignUpStep1}
				helpers = {formHelpers.FormSignUpStep1}
				labels = {formLabels.FormSignUpStep1}
				nextStep = {this.nextStep}
				handleChange = {this.handleChange}
				values = {inputValues}				
				/>
			)
		case 2: 
			return (
				<FormSignUpStep2 />
			)

		case 3: 
			return (
				<FormSignUpStep3 />
			)
	}
  }
}

export default SignUpForm