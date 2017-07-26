import * as React from 'react';
import { shallow } from 'enzyme';
import { IssuesList } from './index';
import { DefaultIssue } from '../../common/model';

test('should show IssuesListItem elements', () => {
  const issues = [
    Object.assign({}, DefaultIssue, { id: '1' }),
    Object.assign({}, DefaultIssue, { id: '2' })
  ];
  const onSelectIssue = jest.fn();
  const component = shallow(
    <IssuesList
      issues={issues}
      completedIssueIds={[]}
      onSelectIssue={onSelectIssue}
      t={key => key}
    />
  );
  const items = component.find('IssuesListItem');
  expect(items.length).toBe(issues.length);
});

test('should show no IssueListItem elements if there are no issues to show', () => {
  const issues = [];
  const onSelectIssue = jest.fn();
  const component = shallow(
    <IssuesList
      issues={issues}
      completedIssueIds={[]}
      onSelectIssue={onSelectIssue}
    />
  );
  const node = component.find('ul').find('IssuesListItem');
  // console.log('node: \n', node);
  expect(node.length).toBe(0);
});
