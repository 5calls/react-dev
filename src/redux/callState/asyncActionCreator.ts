import { Dispatch } from 'react-redux';
import { ApplicationState } from '../root';
import { completeIssueActionCreator, moveToNextActionCreator } from './index';
import * as apiServices from '../../services/apiServices';
import * as Constants from '../../common/constants';

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
  location?: string; // added in submitOutcome()
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
    return (
      dispatch: Dispatch<ApplicationState>,
      getState: () => ApplicationState) => {

      const state = getState();
      const location = state.locationState.address;
      // FIXME: parse out zip code or geolocation
      data.location = parseZipCodeOrGeolocation(location);

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
        console.log(`submitOutcome() called with data:`, data)
        apiServices.postOutcomeData(data)
          // tslint:disable-next-line:no-console
          .catch(e => console.error('Problem posting outcome data', e));
      }
      // send('incrementContact', data, done);

      if ( data.numberContactsLeft === 0 ) {
        return dispatch(completeIssueActionCreator());
      } else {
        return dispatch(moveToNextActionCreator());
      }
    };
}

export const parseZipCodeOrGeolocation = (location: string | null | undefined): string => {
  if (!location) {
    return '';
  }
  const zipRegex: RegExp = Constants.zipCodeRegex;
  // Geolocation contains latitude and logitude which are
  // two negative or positive floating point numbers
  // separated by one or more spaces.
  // First regex group is the latitude
  // Second regex group is the longitude
  const geolocationRegex: RegExp = /^([-]?\d+\.\d+)\s+([-]?\d+\.\d+)$/;
  if (zipRegex.test(location)) {
    return location;
  } else if (geolocationRegex.test(location)) {
    // parse out lat and long
    const match = geolocationRegex.exec(location);
    if (match) {
      // TODO: Format floating point numbers
      // to 2 places as specified in report.go
      return `${match[1]} ${match[2]}`;
    }
  }
  return '';
};
