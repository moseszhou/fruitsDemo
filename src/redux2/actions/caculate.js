import { createAction } from "redux-actions";
import { ACTIONS } from "./actionTypes";
const _add = createAction(ACTIONS.ADD);

const _sub = createAction(ACTIONS.SUB);

export const add = (num = 1) => (dispatch, getState) => {
  dispatch(_add(num));
};

export const sub = (num = 1) => (dispatch, getState) => {
  dispatch(_sub(num));
};
