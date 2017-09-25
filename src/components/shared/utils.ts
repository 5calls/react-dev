import * as Constants from '../../common/constants';
import { ApplicationState } from '../../redux/root';
import { Issue } from '../../common/model';

import { find } from 'lodash';

/**
 * Formats the location for the back end as
 * specified in report.go in the 5calls/5calls repo.
 * The format is either zip code or geolocation (lat/long)
 * with all other location representations formatted
 * as an empty string.
 *
 * @param location the location stored in locationState.address
 */
export const formatLocationForBackEnd = (location: string | null | undefined): string => {
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

export const isNumber = (maybeNumber: number | string) => {
  const num = Number(maybeNumber);
  // Handle undefined input.
  // Number(undefined) is NaN, while Number("") is 0
  return isNaN(num) ? 0 : num;
};

export const formatNumber = (unformattedNumber: number | string) => {
  const num = isNumber(unformattedNumber);
  // Number.toLocaleString() doesn't work on Safari 9 (see https://github.com/5calls/5calls/issues/197)
  // tslint:disable-next-line:no-string-literal
  if (window['Intl'] && typeof Intl.NumberFormat === 'function') {
    return num.toLocaleString();
  } else {
    // As a fallback, use a quick-and-dirty regex to insert commas.
    // When in doubt, get code from stackoverflow: http://stackoverflow.com/a/2901298/7542666
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export const getIssue = (state: ApplicationState, issueId: string) => {
  let currentIssue: Issue | undefined = undefined;

  if (state.remoteDataState.issues) {
    currentIssue = find(state.remoteDataState.issues, (i => i.id === issueId));
  }

  if (state.remoteDataState.inactiveIssues) {
    currentIssue = find(state.remoteDataState.inactiveIssues, (i => i.id === issueId));    
  }

  if (state.remoteDataState.groupIssues) {
    currentIssue = find(state.remoteDataState.groupIssues, (i => i.id === issueId));    
  }
  
  return currentIssue;
};