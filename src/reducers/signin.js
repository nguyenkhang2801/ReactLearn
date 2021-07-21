const initialState = {
  username: "",
  lastname: "",
  select: "",
  gender: "",
  email: "",
  phone: "",
  password: "",
  confirm: "",
  id: "",
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS": {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default signInReducer;