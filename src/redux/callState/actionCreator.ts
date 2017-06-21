import { OutcomeData } from './callThunk';
import { Issue } from '../../common/model';
import { CurrentIssueAction, SubmitOutcomeAction } from './action';

export const selectIssueActionCreator = (issue: Issue): CurrentIssueAction => {
  return {
    type: 'CURRENT_ISSUE_SELECTED',
    payload: issue
  };
};

export const submitOutcomeActionCreator = (outcomeData: OutcomeData): SubmitOutcomeAction => {
  return {
    type: 'SUBMIT_OUTCOME',
    payload: outcomeData
  };
};
