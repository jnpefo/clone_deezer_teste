import api from "../../services/api";
export const DEEZER_REDUCER = 'DEEZER_REDUCER';

export const chartReducer = (state) => ({
  type: DEEZER_REDUCER,
  state,
});

export function getChart() {
  return async (dispatch) => {
      const data = await api();
      dispatch(chartReducer(data));
  }
}
