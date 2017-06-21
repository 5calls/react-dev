import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { CallStateAction } from './action';

export interface CallState {
  currentIssue: Issue;
  contactIds: string[];
  completedIssueIds: string[];
  showFieldOfficeNumbers: boolean;
}

export const callStateReducer: Reducer<CallState> = (
  state: CallState = {} as CallState,
  action: CallStateAction): CallState => {
    switch (action.type) {
      case 'CURRENT_ISSUE_SELECTED':
        return Object.assign({}, state, {currentIssue: action.payload});
      case 'SUBMIT_OUTCOME':
        // tslint:disable-next-line
        console.log('callStateReducer() SUBMIT_OUTCOME action', action.payload);
        // TODO: return modified state
        return state;
      default:
        return state;
    }
  };
