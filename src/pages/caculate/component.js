import React, { Component } from "react";
import { connect } from "react-redux";
import storeController from "../../redux/storeController";
import styles from "./index.module.css";
import "../../redux2/actions/index";
class Caculate extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className={styles.view}>
        <div
          className={styles.btn}
          onClick={() => {
            storeController.actions.caculate.sub(1);
          }}
        >
          -
        </div>
        <div className={styles.num}>{num}</div>
        <div
          className={styles.btn}
          onClick={() => {
            storeController.actions.caculate.add(1);
          }}
        >
          +
        </div>
      </div>
    );
  }
}
export default connect((state) => state.caculate)(Caculate);
