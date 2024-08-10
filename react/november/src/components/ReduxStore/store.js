import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import colorReducer from "./colorReducer";
import todoReducer from "./todoReducer";
const reducer = combineReducers({
    count:counterReducer,
    color:colorReducer,
    todo:todoReducer
})
const store = createStore(reducer)
export default store