import { DEEZER_REDUCER } from '../actions';

const initialState = {};

export default function chartReducer(state = initialState, action) {
  switch (action.type) {
  case DEEZER_REDUCER:
    return {
      ...state,
      action,
    };
  default:
    return state;
  }
}
