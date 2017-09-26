import axios from 'axios';
import { SET_CURRENT_USER } from './actionTypes';
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "./setAuthorizationToken";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user: user
  }
}

export const login = (data) => dispatch =>
  axios.post('/api/auth', data).then(
    res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    }
  );

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
}