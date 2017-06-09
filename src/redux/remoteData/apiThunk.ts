import * as api from '../../services/apiServices';
import {issuesActionCreator} from './actionCreator';

export const getIssues = (address: string = '') => {
  return (dispatch, getState) => {
    api.getIssues(address)
      .then((response) => {
        // tslint:disable-next-line:no-console
        console.log('Response Issues', response.data.issues);
        dispatch(issuesActionCreator(response.data.issues));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`getIssue error: ${error.message}`, error));
  };
};
