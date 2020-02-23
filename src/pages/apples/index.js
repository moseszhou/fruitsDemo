import React, { Component } from "react";
import Item from "./components/item";
import { connect } from "react-redux";
import storeController from "../../storeController";
import styles from "./index.module.css";
class ApplePage extends Component {
  caculate(list) {
    let appleCount = 0;
    let appleWeightSum = 0;
    let appleCount_eaten = 0;
    let appleWeightSum_eaten = 0;
    let pearCount = 0;
    let pearWeightSum = 0;
    let pearCount_eaten = 0;
    let pearWeightSum_eaten = 0;
    list.forEach(item => {
      if (item.type === "apple" && !item.eaten) {
        appleCount++;
        appleWeightSum += item.weight;
      } else if (item.type === "apple" && item.eaten) {
        appleCount_eaten++;
        appleWeightSum_eaten += item.weight;
      } else if (item.type === "pear" && !item.eaten) {
        pearCount++;
        pearWeightSum += item.weight;
      } else if (item.type === "pear" && item.eaten) {
        pearCount_eaten++;
        pearWeightSum_eaten += item.weight;
      }
    });
    return {
      appleCount,
      appleCount_eaten,
      appleWeightSum,
      appleWeightSum_eaten,
      pearCount,
      pearCount_eaten,
      pearWeightSum,
      pearWeightSum_eaten
    };
  }

  render() {
    const {
      apples: { picking, list }
    } = this.props;
    let {
      appleCount,
      appleCount_eaten,
      appleWeightSum,
      appleWeightSum_eaten,
      pearCount,
      pearCount_eaten,
      pearWeightSum,
      pearWeightSum_eaten
    } = this.caculate(list);
    return (
      <div className={styles.view}>
        <div>水果篮</div>
        <div className={styles.infoBox}>
          <div className={styles.infoBox_item}>
            <div className={styles.infoBox_header}>当前</div>
            <div className={styles.infoBox_num}>
              {appleCount}个苹果，{appleWeightSum}克
            </div>
            <div className={styles.infoBox_num}>
              {pearCount}个苹果，{pearWeightSum}克
            </div>
          </div>
          <div className={styles.infoBox_item}>
            <div className={styles.infoBox_header}>已吃水果</div>
            <div className={styles.infoBox_num}>
              {appleCount_eaten}个苹果，{appleWeightSum_eaten}克
            </div>
            <div className={styles.infoBox_num}>
              {pearCount_eaten}个苹果，{pearWeightSum_eaten}克
            </div>
          </div>
        </div>
        <div>
          {list
            .filter(item => !item.eaten)
            .map(item => (
              <Item
                key={item.id}
                {...item}
                onPress={() =>
                  storeController.actions.eatApple({ id: item.id })
                }
              ></Item>
            ))}
        </div>
        <div className={styles.buttons}>
          <div
            className={styles.pickButton}
            onClick={() => storeController.actions.pickApple("apple")}
          >
            采摘苹果
          </div>
          <div
            className={styles.pickButton}
            onClick={() => storeController.actions.pickApple("pear")}
          >
            采摘香梨
          </div>
        </div>
        {picking && <div className={styles.loading}></div>}
      </div>
    );
  }
}
export default connect(({ apples }) => ({ apples }))(ApplePage);
