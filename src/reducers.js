import { combineReducers } from 'redux';

import rateReducer from './Slices/rate';

export default combineReducers({
  rate: rateReducer
});