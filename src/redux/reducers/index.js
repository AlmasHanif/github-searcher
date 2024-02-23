
import { combineReducers } from 'redux';
import { FETCH_USERS_SUCCESS, FETCH_USER_DETAILS_SUCCESS } from '../actions';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
  userDetails: userDetailsReducer,
});
