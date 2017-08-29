import * as Constants from '../../common/constants';

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
