import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import todoReducer from "./redux/reducers/todoReducer";


export default createStore(todoReducer, applyMiddleware(logger))