import { Reducer } from 'redux';
import { CallStateAction } from './index';

export interface CallState {
  currentIssueId: string;
  contactIndexes: string[];
  completedIssueIds: string[];
  showFieldOfficeNumbers: boolean;
}

export const callStateReducer: Reducer<CallState> = (
  state: CallState = {} as CallState,
  action: CallStateAction): CallState => {
    switch (action.type) {
      case 'CURRENT_ISSUE_SELECTED':
        return Object.assign({}, state, {currentIssueId: action.payload});
      case 'COMPLETE_ISSUE':
        let newCompletedIssues: string[] = [];
        if (state.completedIssueIds) {
          newCompletedIssues = [...state.completedIssueIds];
        }
        newCompletedIssues.push(state.currentIssueId);
        let newState = {...state };
        newState.completedIssueIds = newCompletedIssues;
        return newState;
      case 'NEXT_CONTACT':
        let newIndexes = {...state.contactIndexes};
        if (!newIndexes[state.currentIssueId]) {
          newIndexes[state.currentIssueId] = 1;
        } else {
          newIndexes[state.currentIssueId]++;
        }
        return {...state, contactIndexes: newIndexes};
      default:
        return state;
    }
  };
