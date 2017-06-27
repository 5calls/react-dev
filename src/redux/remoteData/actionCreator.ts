import { Issue } from '../../common/model';
import { IssuesAction } from './index';

export const issuesActionCreator = (issues: Issue[]): IssuesAction => {
  return {
    type: 'GET_ISSUES',
    payload: issues
  };
};
