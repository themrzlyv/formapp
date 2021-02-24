import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";

const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(thunk), composeWithDevTools())
);

export type RootStore = ReturnType<typeof rootReducer>

export default store;