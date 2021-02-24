import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { categoryReducer } from "./categoryReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({ 
    user: userReducer,
    category: categoryReducer,
    users: adminReducer
});

export default rootReducer;