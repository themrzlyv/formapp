import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { categoryReducer } from "./categoryReducer";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({ 
    user: userReducer,
    category: categoryReducer,
    users: adminReducer,
    posts: postReducer
});

export default rootReducer;