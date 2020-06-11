import { createAction } from "redux-actions";
import { ACTIONS } from "./actionTypes";
import { pickAppleApi } from "../../api/appleService";
const startPickApple_action = createAction(ACTIONS.START_PICK_APPLE);

const endPickApple_action = createAction(ACTIONS.END_PICK_APPLE);

const eatApple_action = createAction(ACTIONS.EAT_APPLE);

export const pickApple = (type) => (dispatch, getState) => {
  if (getState().apples.picking) return;
  dispatch(startPickApple_action());
  pickAppleApi(type).then((res) => {
    if (res.error === null) {
      dispatch(endPickApple_action(res.data));
    }
  });
};

export const eatApple = (id) => (dispatch) => {
  dispatch(eatApple_action(id));
};
