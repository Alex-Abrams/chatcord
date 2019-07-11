import * as APIUtil from '../util/api_util';

export const RECEIVE_FOFFLINES = 'RECEIVE_FOFFLINES';


export const receiveFofflines = (fofflines) => ({
  type: RECEIVE_FOFFLINES,
  fofflines,
});

export const requestFofflines = (fofflines) => dispatch => {
  APIUtil.fetchFofflines()
  .then(fofflines => {dispatch(receiveFofflines(fofflines))});
}
