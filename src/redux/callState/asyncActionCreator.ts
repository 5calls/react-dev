import { Dispatch } from 'react-redux';
import { ApplicationState } from '../root';
import { completeIssueActionCreator, moveToNextActionCreator } from './index';
import { addCallEventActionCreator, UserContactEventType } from '../userStats';
import * as apiServices from '../../services/apiServices';
import { formatLocationForBackEnd } from '../../components/shared/utils';
import * as ReactGA from 'react-ga';

export interface OutcomeData {
  outcome: UserContactEventType;
  issueId: string;
  numberContactsLeft: number;
  location?: string; // added in submitOutcome()
  contactId: string;
  groupId?: string;
  via?: string; // added in submitOutcome()
}

// this is a more flexible version (no enum for outcome) but let's not break everything
// right now
export interface FlexibleOutcomeData {
  outcome: string;
  issueId: string;
  numberContactsLeft: number;
  location?: string; // added in submitOutcome()
  contactId: string;
  groupId?: string;
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
    data.location = formatLocationForBackEnd(location);

    const ga = ReactGA.ga();
    if (data.outcome === 'unavailable') {
      ga('send', 'event', 'call_result', 'unavailable', 'unavailable');
    } else {
      ga('send', 'event', 'call_result', 'success', data.outcome);
    }

    // Don't post or add to user stats a "skipped" outcome
    if (data.outcome !== UserContactEventType.SKIP) {
      // This parameter will indicate to the backend api where this call report came from
      // A value of test indicates that it did not come from the production environment
      const viaParameter = window.location.host === '5calls.org' ? 'web' : 'test';
      data.via = viaParameter;

      data.groupId = state.callState.group ? state.callState.group.id : '';

      const userContactData = {
        result: data.outcome,
        contactid: data.contactId || '',
        issueid: data.issueId,
        time: Date.now(),
      };

      dispatch(addCallEventActionCreator(userContactData));

      // console.log(`submitOutcome() called with data:`, data)
      apiServices.postOutcomeData(data)
        // tslint:disable-next-line:no-console
        .catch(e => console.error('Problem posting outcome data', e));
    }
 
    if (data.numberContactsLeft === 0) {
      return dispatch(completeIssueActionCreator());
    } else {
      return dispatch(moveToNextActionCreator());
    }
  };
}

// outcomes tied to an enum doesn't work that well for server-driven button names
// or voter contacts where the key could be 'contacted:strongsupport'
// I'm not sure how to handle this yet so making a second string based one for now
export function submitFlexibleOutcome(data: FlexibleOutcomeData) {
  return (
    dispatch: Dispatch<ApplicationState>,
    getState: () => ApplicationState) => {

    const state = getState();
    const location = state.locationState.address;
    // FIXME: parse out zip code or geolocation
    data.location = formatLocationForBackEnd(location);

    const ga = ReactGA.ga();
    if (data.outcome === 'unavailable') {
      ga('send', 'event', 'call_result', 'unavailable', 'unavailable');
    } else {
      ga('send', 'event', 'call_result', 'success', data.outcome);
    }

    // Don't post or add to user stats a "skipped" outcome
    if (data.outcome !== 'skip') {
      // This parameter will indicate to the backend api where this call report came from
      // A value of test indicates that it did not come from the production environment
      const viaParameter = window.location.host === '5calls.org' ? 'web' : 'test';
      data.via = viaParameter;

      if (data.groupId === undefined) {
        data.groupId = state.callState.group ? state.callState.group.id : '';        
      }

      // this intentionally omits adding these calls to the local call log for now

      // console.log(`submitOutcome() called with data:`, data)
      apiServices.postFlexibleOutcomeData(data)
        // tslint:disable-next-line:no-console
        .catch(e => console.error('Problem posting outcome data', e));
    }
  };
}