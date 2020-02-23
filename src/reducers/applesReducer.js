import { handleActions } from "redux-actions";
import { ACTIONS } from "../actions/actionTypes";
const initData = {
  picking: false,
  currentId: 3,
  list: [
    {
      id: 0,
      weight: 239,
      type: "apple",
      eaten: false
    },
    {
      id: 1,
      weight: 280,
      type: "pear",
      eaten: false
    },
    {
      id: 2,
      weight: 346,
      type: "apple",
      eaten: false
    }
  ]
};

export default handleActions(
  {
    [ACTIONS.START_PICK_APPLE]: (state, action) => {
      return { ...state, picking: true };
    },
    [ACTIONS.END_PICK_APPLE]: (state, action) => {
      if (action.error || !action.payload) {
        return state;
      }
      const { weight, type } = action.payload;
      return {
        ...state,
        picking: false,
        list: [
          ...state.list,
          { weight, type, etan: false, id: state.currentId + 1 }
        ],
        currentId: state.currentId + 1
      };
    },
    [ACTIONS.EAT_APPLE]: (state, action) => {
      let { id } = action.payload;
      const list = [...state.list];
      list.every(item => {
        if (item.id === id) {
          item.eaten = true;
          return false;
        }
        return true;
      });
      return { ...state, list };
    }
  },
  initData
);
