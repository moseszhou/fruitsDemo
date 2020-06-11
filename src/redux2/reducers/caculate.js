import { handleActions } from "redux-actions";
import { ACTIONS } from "../actions/actionTypes";
const initData = {
  num: 0,
  name: "moses",
};

export default handleActions(
  {
    [ACTIONS.ADD]: (state, action) => {
      return { ...state, num: state.num + action.payload };
    },
    [ACTIONS.SUB]: (state, action) => {
      return { ...state, num: state.num - action.payload };
    },
  },
  initData
);
