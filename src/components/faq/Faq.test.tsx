import * as React from 'react';
import { shallow } from 'enzyme';
import { Faq } from './index';

test('Faq component snapshot renders correctly', () => {
  const component = shallow(<Faq />);
  expect(component).toMatchSnapshot();
});
