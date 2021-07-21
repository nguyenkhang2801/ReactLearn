const initialState = false;

const authen = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHEN_SUCCESS": {
      return true;
    }
    case "AUTHEN_FAILED": {
      return false;
    }
    default: {
      return state;
    }
  }
}

export default authen;