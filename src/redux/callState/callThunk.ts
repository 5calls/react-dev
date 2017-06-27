// import { Dispatch } from 'react-redux';
// import { ApplicationState } from '../root';
import { completeIssueActionCreator, moveToNextActionCreator } from './actionCreator';

export type OutcomeType =
  'unavailable' |
  'voice_mail' |
  'made_contact'|
  'skip'
;
export interface OutcomeData {
  outcome: string;
  issueId: string;
  numberContactsLeft: number;
  contactId?: string;
  via?: string; // added in submitOutcome()
}

/**
 * Responds to click on a call outcome button.
 *
 * @param outcome: string - type passed from button click event
 * @param payload: OutcomePayload
 */
export function submitOutcome(data: OutcomeData) {
    return (dispatch/*: Dispatch<ApplicationState>*/) => {
      // tslint:disable-next-line
      // console.log(`submitOutcome() called with data:`, data)

      // TODO: set callState.hideFieldOfficeNumbers
      // send('hideFieldOfficeNumbers', data, done);

      // TODO: notify Google Analytics (ga)
      if (data.outcome === 'unavailable') {
        // ga('send', 'event', 'call_result', 'unavailable', 'unavailable');
      } else {
        // ga('send', 'event', 'call_result', 'success', data.result);
      }

      // Don't post or add to user stats a "skipped" outcome
      if (data.outcome !== 'skip') {

        // TODO: Add to user stats
        // send('setUserStats', data, done);

        // TODO: post outcome data to back end

        // This parameter will indicate to the backend api where this call report came from
        // A value of test indicates that it did not come from the production environment
        const viaParameter = window.location.host === '5calls.org' ? 'web' : 'test';
        data.via = viaParameter;

        // const body = queryString.stringify({ location: state.zip,
        //  result: data.result, contactid: data.contactid, issueid: data.issueid, via: viaParameter });
        // http.post(appURL+'/report',
        // { body: body, headers: {"Content-Type": "application/x-www-form-urlencoded"} }, () => {});
      }
      // send('incrementContact', data, done);

      if ( data.numberContactsLeft === 0 ) {
        return dispatch(completeIssueActionCreator(data));
      } else {
        return dispatch(moveToNextActionCreator());
      }
    };
}
