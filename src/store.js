import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const middleWares = [thunkMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

const configureStore = initialState =>
  createStoreWithMiddleware(rootReducer, initialState);

export default configureStore;
