import { Issue } from '../../common/model';
import { OutcomeData, CurrentIssueAction, SubmitOutcomeAction, NextContact } from './index';

export const selectIssueActionCreator = (issue: Issue): CurrentIssueAction => {
  return {
    type: 'CURRENT_ISSUE_SELECTED',
    payload: issue
  };
};

export const completeIssueActionCreator = (outcomeData: OutcomeData): SubmitOutcomeAction => {
  return {
    type: 'COMPLETE_ISSUE',
    payload: outcomeData
  };
};

export const moveToNextActionCreator = (): NextContact => {
  return {
    type: 'NEXT_CONTACT'
  };
};
