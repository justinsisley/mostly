import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  token: '',
  username: '',
};

const logInAction = createAction('session.logIn');
const logOutAction = createAction('session.logOut');

export function logIn(username) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/session');

    dispatch(
      logInAction({
        token: data.token,
        username,
      }),
    );
  };
}

export function logOut() {
  return dispatch => dispatch(logOutAction());
}

export default handleActions(
  {
    [logInAction]: (state, action) => ({
      token: action.payload.token,
      username: action.payload.username,
    }),

    [logOutAction]: () => initialState,
  },
  initialState,
);
