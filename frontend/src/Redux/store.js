// src/Redux/store.js
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import { thunk } from "redux-thunk";

import { AuthReducer } from "./Authreducer/authreducer";
import { ProductReducer } from "./Productsredux/reducer";
const rootReducer = combineReducers({ auth: AuthReducer, ProductReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
