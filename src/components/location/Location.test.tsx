import * as React from 'react';
import { shallow } from 'enzyme';
import { Location } from './index';

test('Location component should show location prop value if it is defined', () => {
  const location = '1234';
  const isValid = true;
  const isLoading = false;
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      location={location}
      isValid={isValid}
      isLoading={isLoading}
      setLocation={setLocation}
      clearLocation={clearLocation}
    />
  );
  const node = component.find('#locationMessage span');
  // console.log('node: \n', node.text());
  expect(node.text()).toEqual(location);
});

test('Location component setLocation() should be called upon submit if isLoading=true', () => {
  const location = '1234';
  const isValid = true;
  const isLoading = true;
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      location={location}
      isValid={isValid}
      isLoading={isLoading}
      setLocation={setLocation}
      clearLocation={clearLocation}
    />
  );
  // const input = component.find('input').first();
  // input.simulate('change', {target: {value: '10001'}});
  const zip = '10001';
  const form = component.find('form').first();
  // console.log('node: \n', form.debug());
  form.simulate('submit', { preventDefault: jest.fn(), target: {elements: {address: { value: zip } }}} );
  expect(setLocation).toBeCalledWith(zip);
});

test('Location component clearLocation() should be called upon submit if isLoading=false', () => {
  const location = '1234';
  const isValid = true;
  const isLoading = false;
  const setLocation = jest.fn();
  const clearLocation = jest.fn();

  const component = shallow(
    <Location
      location={location}
      isValid={isValid}
      isLoading={isLoading}
      setLocation={setLocation}
      clearLocation={clearLocation}
    />
  );
  const button = component.find('button').first();
  button.simulate('click', { preventDefault: jest.fn()} );
  expect(clearLocation).toBeCalled();
});
