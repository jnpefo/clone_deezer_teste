import { combineReducers } from 'redux';
import chartReducer from './chartReducer'

const rootReducer = combineReducers({
  fetchChart: chartReducer,
});

export default rootReducer;
