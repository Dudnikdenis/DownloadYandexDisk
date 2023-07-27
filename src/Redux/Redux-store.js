import { applyMiddleware, combineReducers, createStore } from "redux";
import userDiskReducer from "./userDisk-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    userDisk: userDiskReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;