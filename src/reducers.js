import { combineReducers } from 'redux';

import rateReducer from './slices/rateSlice';

export default combineReducers({
  rate: rateReducer
});