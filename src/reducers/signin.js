const initialState = {
  username: "",
  lastname: "",
  hobby: "",
  gender: "",
  email: "",
  phone: "",
  password: "",
  confirm: "",
  id: "",
  auth: false,
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS": {
      const newState = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default signInReducer;