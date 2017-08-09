import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { Location } from './index';
import { LocationState } from '../../redux/location/reducer';
import { LocationUiState } from '../../common/model';

test('Location component should show location prop value if locationState.address is defined', () => {
  const locationState: LocationState = {
    address: '1234',
    cachedCity: '',
    uiState: LocationUiState.LOCATION_FOUND
  };
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      t={i18n.t}
      locationState={locationState}
      setLocation={setLocation}
      clearLocation={clearLocation}
    />
  );
  const node = component.find('#locationMessage span');
  expect(node.text()).toEqual(locationState.address);
});

test('Location component should show location prop value if locationState.cachedCity is defined', () => {
  const locationState: LocationState = {
    address: '',
    cachedCity: 'Cached Address',
    uiState: LocationUiState.LOCATION_FOUND
  };
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      t={i18n.t}
      locationState={locationState}
      setLocation={setLocation}
      clearLocation={clearLocation}
    />
  );
  const node = component.find('#locationMessage span');
  expect(node.text()).toEqual(locationState.cachedCity);
});

test('Should show "Getting your location" label if fetching location', () => {
  const locationState: LocationState = {
    address: '1234',
    cachedCity: '',
    uiState: LocationUiState.FETCHING_LOCATION
  };

  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      locationState={locationState}
      setLocation={setLocation}
      clearLocation={clearLocation}
      t={i18n.t}
    />
  );
  const label = component.find('p.loadingAnimation').first();
  expect(label).toBeDefined();
});

test('Location component setLocation() should be called upon submit if isLoading=true', () => {
  const locationState: LocationState = {
    address: '1234',
    cachedCity: '',
    uiState: LocationUiState.FETCHING_LOCATION
  };

  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      locationState={locationState}
      setLocation={setLocation}
      clearLocation={clearLocation}
      t={i18n.t}
    />
  );
  const zip = '10001';
  const form = component.find('form').first();
  // console.log('node: \n', form.debug());
  form.simulate('submit', { preventDefault: jest.fn(), target: { elements: { address: { value: zip } } } });
  expect(setLocation).toBeCalledWith(zip);
});

test('Location component clearLocation() should be called upon submit when entering location', () => {
  const locationState: LocationState = {
    address: 'Foobar USA',
    cachedCity: '',
    uiState: LocationUiState.ENTERING_LOCATION
  };
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      locationState={locationState}
      setLocation={setLocation}
      clearLocation={clearLocation}
      t={i18n.t}
    />
  );
  const button = component.find('button').first();
  button.simulate('click', { preventDefault: jest.fn() });
  expect(clearLocation).toBeCalled();
});

test('If address is invalid, show proper message and form with input and "Go" button', () => {
  const locationState: LocationState = {
    address: 'Foobar USA',
    cachedCity: '',
    uiState: LocationUiState.LOCATION_ERROR
  };
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      locationState={locationState}
      setLocation={setLocation}
      clearLocation={clearLocation}
      t={i18n.t}
    />
  );
  const label = component.find('p[role="alert"]');
  expect(label).toBeDefined();
  const input = component.find('form input');
  expect(input).toBeDefined();
  const button = component.find('form button');
  expect(button).toBeDefined();
});
