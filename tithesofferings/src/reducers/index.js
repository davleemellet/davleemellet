export const newUserReducer = (newUserSignUp = [], action) => {
    if (action.payload === 'USER_SIGNUP') {
        return [...newUserSignUp, [action.payload.firstname,
            action.payload.lastname,
            action.payload.organization,
            action.payload.contactNumber,
            action.payload.email,
            action.payload.username,
            action.payload.password
        ]]
    }
    return newUserSignUp
};


export const LoginComponent = (state = initialState, action) => {
        switch (action.type) {
            // This reducer handles the case when action type is USER_LOGIN
            case "USER_LOGIN":
                return state.map(user => {
                    if (user.username !== action.username) {
                        return user;
                    }
                    if (user.password == action.password) {
                        return {
                            ...user,
                            login_status: 'LOGGED IN'
                        }
                    }
                });
            default:
                return state
        }
    }
    // 
    // 0781999498