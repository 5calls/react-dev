import { Dispatch } from 'react-redux';
import { ApplicationState } from '../root';
import { submitOutcomeActionCreator } from './actionCreator';

export type OutcomeType =
  'unavailable' |
  'voice_mail' |
  'made_contact'|
  'skip'
;
export interface OutcomeData {
  issueId: string;
  contactId?: string;
  result?: string;
  via?: string;
}

/**
 * Responds to click on a call outcome button.
 *
 * @param outcome: string - type passed from button click event
 * @param payload: OutcomePayload
 */
export const submitOutcome = (
  outcome: string,
  data: OutcomeData) => {
    return (dispatch: Dispatch<ApplicationState>, getState: () => ApplicationState) => {
      // tslint:disable-next-line
      console.log(`submitOutcome() called with outcome ${outcome} and payload:`, data)
      // send('hideFieldOfficeNumbers', data, done);

      const state = getState();
      const currentIssue = state.callState.currentIssue;
      // tslint:disable-next-line
      console.log(`submitOutcome() currentIssue:`, currentIssue)
      dispatch(submitOutcomeActionCreator(data));

      // notify Google Analytics
      if (outcome === 'unavailable') {
        // ga('send', 'event', 'call_result', 'unavailable', 'unavailable');
      } else {
        // ga('send', 'event', 'call_result', 'success', data.result);
      }

      // send('setUserStats', data, done);

      // This parameter will indicate to the backend api where this call report came from
      // A value of test indicates that it did not come from the production environment
      const viaParameter = window.location.host === '5calls.org' ? 'web' : 'test';
      data.via = viaParameter;

      // post outcome data to back end
      // const body = queryString.stringify({ location: state.zip,
      //  result: data.result, contactid: data.contactid, issueid: data.issueid, via: viaParameter });
      // http.post(appURL+'/report',
      // { body: body, headers: {"Content-Type": "application/x-www-form-urlencoded"} }, () => {});

      // send('incrementContact', data, done);
      return;
    };
};
