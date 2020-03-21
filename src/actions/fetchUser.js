import {
  FETCH_USER,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS
} from './constants';

import fetchUserSerivce from '../services';

export default username => {
  return dispatch  => {
    dispatch(fetchUser());
    fetchUserSerivce(username)
      .then(user => dispatch(fetchUserSuccess(user)))
      .catch(error => dispatch(fetchUserFailed(error)))
  }
}

const fetchUser = () => ({
  type: FETCH_USER
});

const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    user
  },
})

const fetchUserFailed = error => ({
  type: FETCH_USER_FAILED,
  payload: { error }
})