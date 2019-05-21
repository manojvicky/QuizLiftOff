import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducer";
import thunk from "redux-thunk";

const LoggerMiddleware = store => next => action => {
  console.group(action.type);
  console.log("%c Prev. State", "color: orange", store.getState());
  console.log("%c Action", "color: green", action);
  next(action);
  console.log("%c Next State", "color: blue", store.getState());
  console.groupEnd();
};
const store = createStore(reducers, applyMiddleware(thunk, LoggerMiddleware));
export default store;
