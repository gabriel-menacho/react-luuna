import initialState from '../../initialState';
import { SET_REPOSITORIES, SET_USERS } from './actionTypes';

export default function(state = initialState.ajaxCall, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    case SET_REPOSITORIES:
        return { ...state, repositories: payload };
    default:
      return state;
  }
}