import { Reducer } from 'redux';
import { Issue } from '../../common/model';
// import { ActionType, IssueSelectedAction } from '../action';
import { CallStateAction } from './action';

export interface CallState {
  currentIssue: Issue;
  contactIds: string[];
  completedIssueIds: string[];
  showFieldOfficeNumbers: boolean;
}

// export const selectedIssueReducer: Reducer<Issue> = (
//   state: Issue = {} as Issue,
//   action: IssueSelectedAction) => {
//     switch (action.type) {
//       case ActionType.ISSUE_SELECTED:
//         return Object.assign({}, action.payload);
//       default:
//         return state;
//     }
// };

export const callStateReducer: Reducer<CallState> = (
  state: CallState = {} as CallState,
  action: CallStateAction): CallState => {
    switch (action.type) {
      case 'CURRENT_ISSUE_SELECTED':
        return Object.assign({}, state, {currentIssue: action.payload});
      default:
        return state;
    }
  };
