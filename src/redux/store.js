import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const middleWares = [thunkMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

// const configureStore = (initialState) =>
//   createStoreWithMiddleware(rootReducer, initialState);

// export default configureStore;

// Configure the store
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(createReducer(), initialState);

  // 添加一个对象以跟踪已注册的异步 Reducer
  store.asyncReducers = {};

  //创建注入 reducer 函数
  // 此函数添加 async reducer，并创建一个新的组合 reducer
  // 创建注入 reducer 函数
  // 此函数添加 async reducer，并创建一个新的组合 reducer
  store.injectReducer = (asyncReducers) => {
    const keys = Object.keys(asyncReducers);
    if (keys.length === 0) return;

    keys.forEach((key) => {
      if (
        !Reflect.has(store.asyncReducers, key) ||
        store.asyncReducers[key] !== asyncReducers[key]
      ) {
        store.asyncReducers[key] = asyncReducers[key];
      }
    });
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  function createReducer(asyncReducers) {
    return combineReducers({
      ...rootReducer,
      ...asyncReducers,
    });
  }
  // 返回修改后的 store
  return store;
}
