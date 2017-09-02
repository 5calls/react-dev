import * as React from 'react';
import { shallow } from 'enzyme';
import { Donation } from './';

test('should render Donation component properly', () => {
  const total = 1345;
  const goal = 5000;
  const component = shallow(
    <Donation total={total} goal={goal}/>
  );
  expect(component).toMatchSnapshot();
});
