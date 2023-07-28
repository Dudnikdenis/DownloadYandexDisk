import { applyMiddleware, combineReducers, createStore } from "redux";
import userDiskReducer from "./userDisk-reducer";
import thunkMiddleware from "redux-thunk";
import resourceDiskReducer from "./resourceDisk-reducer";

let reducers = combineReducers({
    userDisk: userDiskReducer,
    resourceDisk:resourceDiskReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;