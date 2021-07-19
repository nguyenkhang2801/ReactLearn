
import { combineReducers } from "redux";
import signInReducer from "./signin";


const rootReducer = combineReducers({
    signin: signInReducer,
});

export default rootReducer;