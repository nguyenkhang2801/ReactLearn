
import { combineReducers } from "redux";
import authen from "./authen";
import signInReducer from "./signin";


const rootReducer = combineReducers({
    signin: signInReducer,
    auth: authen
});

export default rootReducer;