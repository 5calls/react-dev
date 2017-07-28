import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { About } from './index';

test('About component snapshot renders correctly', () => {
  const component = shallow(<About t={i18n.t} />);
  expect(component).toMatchSnapshot();
});

test('About component should render', () => {
  const component = shallow(<About t={i18n.t} />);
  const node = component.find('h2');
  expect(node).not.toBeNull();
});