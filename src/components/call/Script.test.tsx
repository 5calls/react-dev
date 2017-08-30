import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { Script } from './';
import { Issue, DefaultIssue, LocationUiState, LocationFetchType } from '../../common/model';
import { LocationState } from '../../redux/location';

test('Script component should be rendered if passed a valid object', () => {
    const issue: Issue = Object.assign({}, DefaultIssue, { id: '1', name: 'testName' });
    const locationState: LocationState = {
        address: '1234',
        cachedCity: 'Anytown',
        splitDistrict: false,
        uiState: LocationUiState.LOCATION_FOUND,
        locationFetchType: LocationFetchType.BROWSER_GEOLOCATION
    };
    const component = shallow(
        <Script
            issue={issue}
            contactIndex={0}
            locationState={locationState}
            t={i18n.t}
        />
    );
    const node = component.find('call__script__body');
    expect(node.text()).toBe('');
});