import { bindActionCreators } from "redux";
class Store {
  static instance;

  static getInstance() {
    if (this.instance instanceof this === false) {
      this.instance = new this();
    }
    return this.instance;
  }

  init(store, actions) {
    this._store = store;
    this._actions = bindActionCreators(actions, store.dispatch);
  }

  get actions() {
    return this._actions;
  }
}

export default Store.getInstance();
