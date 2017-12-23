import axios from 'axios';
import history from '../history';

const defaultUser = {};

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const getUser = user => ({
  type: GET_USER,
  user
})

const removeUser = () => ({
  type: REMOVE_USER
})

export const me = () => dispatch => {
  axios.get('/auth/me')
  .then(res => res.data)
  .then(user => {
    dispatch(getUser(user));
  })
  .catch(console.error);
}

export const logout = () => dispatch => {
  axios.delete('/auth/logout')
  .then(() => {
    dispatch(removeUser());
    history.push('/music');
  })
  .catch(console.error);
}

export default (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
