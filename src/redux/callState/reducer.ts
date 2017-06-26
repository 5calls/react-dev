import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { CallStateAction } from './action';

export interface CallState {
  currentIssue: Issue;
  contactIndexes: string[];
  completedIssueIds: string[];
  showFieldOfficeNumbers: boolean;
}

export const callStateReducer: Reducer<CallState> = (
  state: CallState = {} as CallState,
  action: CallStateAction): CallState => {
    switch (action.type) {
      case 'CURRENT_ISSUE_SELECTED':
        return Object.assign({}, state, {currentIssue: action.payload});
      case 'COMPLETE_ISSUE':
        let newCompletedIssues: string[] = [];
        if (state.completedIssueIds) {
          newCompletedIssues = [...state.completedIssueIds];
        }
        newCompletedIssues.push(state.currentIssue.id);
        let newState = {...state };
        newState.completedIssueIds = newCompletedIssues;
        return newState;
      case 'NEXT_CONTACT':
        let newIndexes = {...state.contactIndexes};
        if (!newIndexes[state.currentIssue.id]) {
          newIndexes[state.currentIssue.id] = 1;
        } else {
          newIndexes[state.currentIssue.id]++;
        }
        return {...state, contactIndexes: newIndexes};
      default:
        return state;
    }
  };
