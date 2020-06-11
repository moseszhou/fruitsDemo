import React, { Component } from "react";
import CaculateComponent from "./component";
import reducers from "../../redux2/reducers/index";
import storeController from "../../redux/storeController";

export default class Caculate extends Component {
  constructor(props) {
    super(props);
    this.state = { load: false };
  }
  render() {
    return (
      <div>
        <div
          onClick={() => {
            storeController._store.injectReducer(reducers);
            this.setState((preState) => ({ load: !preState.load }));
          }}
        >
          load
        </div>
        {this.state.load && <CaculateComponent></CaculateComponent>}
      </div>
    );
  }
}
