import React, { Component } from 'react'

export class SignUp extends Component {
	constructor(props){
		super(props);

		this.state={
				step: 1,
				firstName: '',
				lastName: '',
				organization: '',
				contactNumber: '',
				emailAddress: '',
				confirmEmail: '',
				username: '',
				password: '',
				confirmPassword: ''
			}
	}
	

  render() {

	const {firstName, lastName, organization, contactNumber, emailAddress, confirmEmail, username, password, confirmPassword} = this.state;
	
	return (
	  <div>SignUp</div>
	)
  }
}

export default SignUp