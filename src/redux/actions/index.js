import api from "../../services/apiChart";
// import api from "../../services/chart";
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

// export function getChart() {
//   return (dispatch) => {
//       const data = api;
//       dispatch(chartReducer(data));
//   }
// }
