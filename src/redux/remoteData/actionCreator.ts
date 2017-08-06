import { CallCountAction, ApiErrorAction } from './index';
import { Issue } from '../../common/model';
import { IssuesAction } from './index';

export const issuesActionCreator = (issues: Issue[]): IssuesAction => {
  return {
    type: 'GET_ISSUES',
    payload: issues
  };
};

export const callCountActionCreator = (callTotal: number): CallCountAction => {
  return {
    type: 'GET_CALL_TOTAL',
    payload: callTotal
  };
};

export const apiErrorMessageActionCreator = (message: string): ApiErrorAction => {
  return {
    type: 'API_ERROR',
    payload: message
  };
};
