import { bindActionCreators } from "redux";
class Store {
  static instance;

  static getInstance() {
    if (this.instance instanceof this === false) {
      this.instance = new this();
    }
    return this.instance;
  }

  constructor() {
    this._baseAction = {};
  }

  init(store, actions) {
    this._store = store;
    this._actions = bindActionCreators(actions, store.dispatch);
    const handles = { ...this._baseAction, ...actions };

    const bind = (action, dispatch) => {
      if (typeof action === "function") {
        return bindActionCreators(action, dispatch);
      }
      if (typeof action === "object") {
        return Object.assign(
          {},
          ...Object.entries(action).map(([key, value]) => ({
            [key]: bind(value, dispatch),
          }))
        );
      }
    };
    this._actions = bind(handles, store.dispatch);
  }

  get actions() {
    return this._actions;
  }

  inject(actions) {
    const handles = { ...actions };

    const bind = (action, dispatch) => {
      if (typeof action === "function") {
        return bindActionCreators(action, dispatch);
      }
      if (typeof action === "object") {
        return Object.assign(
          {},
          ...Object.entries(action).map(([key, value]) => {
            if (Object.prototype.hasOwnProperty.call(this._actions, key))
              return { [key]: this._actions[key] };
            else
              return {
                [key]: bind(value, dispatch),
              };
          })
        );
      }
    };
    if (this._store) {
      this._actions = {
        ...this._actions,
        ...bind(handles, this._store.dispatch),
      };
    } else {
      Object.assign(this._baseAction, actions);
    }
  }
}

export default Store.getInstance();
