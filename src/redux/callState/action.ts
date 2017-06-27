import { OutcomeData } from './callThunk';
import { Action } from 'redux';
import { CallStateAction } from './action';
import { Issue } from '../../common/model';

export type CallStateActionType =
  'CURRENT_ISSUE_SELECTED' |
  'COMPLETE_ISSUE' |
  'NEXT_CONTACT' |
  'SET_CONTACT_IDS' |
  'SET_SHOW_FIELD_OFFICE_NUMBERS'
  ;

export interface CallStateAction extends Action {
  type: CallStateActionType;
  payload?: {};
}

export interface CurrentIssueAction extends CallStateAction {
    type: 'CURRENT_ISSUE_SELECTED';
    payload: Issue;
}

export interface SubmitOutcomeAction extends CallStateAction {
  type: 'COMPLETE_ISSUE';
  payload: OutcomeData;
}

export interface NextContact extends CallStateAction {
  type: 'NEXT_CONTACT';
}

export interface SetContactIdsAction extends CallStateAction {
    type: 'SET_CONTACT_IDS';
    payload: string[];
}

export interface SetShowFieldOfficeNumbers extends CallStateAction {
  type: 'SET_SHOW_FIELD_OFFICE_NUMBERS';
  payload: boolean;
}
