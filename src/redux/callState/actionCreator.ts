import { OutcomeData, CurrentIssueAction, SubmitOutcomeAction, NextContact } from './index';

export const selectIssueActionCreator = (issueId: string): CurrentIssueAction => {
  return {
    type: 'CURRENT_ISSUE_SELECTED',
    payload: issueId
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
