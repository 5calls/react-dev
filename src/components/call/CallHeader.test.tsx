import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { CallHeader } from './index';
import { Issue, DefaultIssue } from '../../common/model';

test('Call header component should be rendered if passed a valid object', () => {
  const issue: Issue = Object.assign({}, DefaultIssue, { id: '1', name: 'testName' });
  const component = shallow(
    <CallHeader
      currentIssue={issue}
      t={i18n.t}
    />);
  const node = component.find('h1.call__title');
  expect(node.text()).toBe('testName');
});