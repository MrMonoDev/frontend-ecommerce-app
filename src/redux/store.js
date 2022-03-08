import { createStore, combineReducers } from "redux";
import { cart } from "./reducers";

const reducers = {cart}

const store = createStore(combineReducers(reducers));

export default store;