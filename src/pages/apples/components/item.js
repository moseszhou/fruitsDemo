import React, { Component } from "react";
import styles from "./item.module.css";
export default class Item extends Component {
  render() {
    const { type, weight, id, onPress } = this.props;
    return (
      <div className={styles.view}>
        <img
          className={styles.image}
          alt={type}
          src={
            type === "apple"
              ? require("../img/apple.jpg")
              : require("../img/pear.jpg")
          }
        ></img>
        <div className={styles.middleView}>
          <div className={styles.name}>{`${type} - ${id}号`}</div>
          <div className={styles.weight}>{weight}克</div>
        </div>
        <div className={styles.button} onClick={onPress}>
          吃掉
        </div>
      </div>
    );
  }
}
