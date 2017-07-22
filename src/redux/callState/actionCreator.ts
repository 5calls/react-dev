import { OutcomeData, CurrentIssueAction, SubmitOutcomeAction, NextContact } from './index';

/* Redux Data Flow: The IssueListItem View Component was clicked, the method was 
    passed up through the Redux Container which called this actionCreator.
    This action creator will create an object(defined as an "action") that has a
    defined type ('CURRENT_ISSUE_SELECTED') which is constrained by an enum in the 
    action.ts file. It also has a payload that is also defined in the action.ts file.

    Redux will then "Dispatch" that object, which will send this object through the reducers.
    A reducers that matches this action type will take charge of it an run its defined reducer logic.
    See /src/redux/callState/reducer.ts for next step in Redux Data Flow
 */
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
