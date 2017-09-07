import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { Call } from './index';
import { Issue, DefaultIssue, LocationUiState, LocationFetchType } from '../../common/model';
import { CallState } from '../../redux/callState';
import { LocationState } from '../../redux/location';

test('Call component should be rendered if passed a valid object', () => {
  const issue: Issue = Object.assign({}, DefaultIssue, { id: '1', name: 'testName' });
  let callState: CallState = {
    currentIssueId: 'test1',
    contactIndexes: {'test1': 2, 'test2': 1},
    completedIssueIds: ['test1', 'test2'],
    group: undefined,
  };
  const locationState: LocationState = {
    address: '1234',
    cachedCity: 'Anytown',
    splitDistrict: false,
    uiState: LocationUiState.LOCATION_FOUND,
    locationFetchType: LocationFetchType.BROWSER_GEOLOCATION
  };
  const onSubmitOutcome = jest.fn();
  const clearLocation = jest.fn();
  const component = shallow(
    <Call
      issue={issue}
      callState={callState}
      splitDistrict={false}
      clearLocation={clearLocation}
      locationState={locationState}
      t={i18n.t}
      onSubmitOutcome={onSubmitOutcome}
    />);
  expect(component).toMatchSnapshot();
});