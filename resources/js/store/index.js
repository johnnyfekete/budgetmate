import { combineReducers } from 'redux';

import auth from './auth';
import categories from './categories';

const rootReducer = combineReducers({
  auth,
  categories,
});

export default rootReducer;
