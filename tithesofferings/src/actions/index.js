// Action Creator
// Action creator function for creating a new user

export const newUserSignUp =(firstname, lastname, organization, contactNumber, email, username, password) =>{
	// Return an Action
	return {
		type: 'USER_SIGNUP',
		payload:{
			firstName: firstname,
			lastName: lastname,
			organization: organization,
			contactNumber: contactNumber,
			email: email,
			username: username,
			password: password
		}
	};
};

// Action creator function for creating a new user login
export const userLogin =(username, password) =>{
	// Return an Action object
	return{
		type: "USER_LOGIN",
		payload:{
			username: username,
			password: password,
		}
	};
};