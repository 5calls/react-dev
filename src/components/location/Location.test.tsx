import * as React from 'react';
import i18n from '../../services/i18nTesting';
import { shallow } from 'enzyme';
import { Location } from './index';
import { LocationState } from '../../redux/location/reducer';

test('Location component should show location prop value if it is defined', () => {
  const locationState: LocationState = {
    address: '1234',
    cachedCity: '',
    invalidAddress: false,
    fetchingLocation: false,
    validatingLocation: false
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
  const node = component.find('#locationMessage span');
  // console.log('node: \n', node.text());
  expect(node.text()).toEqual(locationState.address);
});

test('Location component setLocation() should be called upon submit if isLoading=true', () => {
  const locationState: LocationState = {
    address: '1234',
    cachedCity: '',
    invalidAddress: false,
    fetchingLocation: true,
    validatingLocation: false
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

test('Location component clearLocation() should be called upon submit if isLoading=false', () => {
  const locationState: LocationState = {
    address: '1234',
    cachedCity: '',
    invalidAddress: true,
    fetchingLocation: false,
    validatingLocation: false
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
