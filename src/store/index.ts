import { combineReducers, createStore } from "redux";
import { filesReducer } from "./filesReducer";
// import { filesReducer } from "./filesreducer";

// const rootReducer = combineReducers({
//   files: filesReducer,
// });

export const store = createStore(filesReducer);
