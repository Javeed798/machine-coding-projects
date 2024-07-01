import { combineReducers } from "redux";
import someSlice from "./slices/someSlice";

export const rootReducer = combineReducers({
  some: someSlice
})