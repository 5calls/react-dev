import { Dispatch } from 'react-redux';
import { ApplicationState } from '../root';

export type OutcomeType =
  'unavailable' |
  'voice_mail' |
  'made_contact'|
  'skip'
;
export interface OutcomePayload {
  issueId: string;
  contactId?: string;
  result?: string;
  via?: string;
}

/**
 * Responds to click on a call outcome button.
 *
 * @param type: OutcomeType
 * @param payload: OutcomePayload
 */
export const submitOutcome = (
  type: OutcomeType,
  payload: OutcomePayload) => {
    return (dispatch: Dispatch<{}>, getState: ApplicationState ) => {
      // tslint:disable-next-line
      console.log(`submitOutcome() called with outcome ${type} and payload:`, payload)
      // send('hideFieldOfficeNumbers', data, done);

      // notify Google Analytics
      if (type === 'unavailable') {
        // ga('send', 'event', 'call_result', 'unavailable', 'unavailable');
      } else {
        // ga('send', 'event', 'call_result', 'success', data.result);
      }

      // send('setUserStats', data, done);

      // This parameter will indicate to the backend api where this call report came from
      // A value of test indicates that it did not come from the production environment
      // const viaParameter = window.location.host === '5calls.org' ? 'web' : 'test';

      // post outcome data to back end
      // const body = queryString.stringify({ location: state.zip,
      //  result: data.result, contactid: data.contactid, issueid: data.issueid, via: viaParameter });
      // http.post(appURL+'/report',
      // { body: body, headers: {"Content-Type": "application/x-www-form-urlencoded"} }, () => {});

      // send('incrementContact', data, done);

    };
};
