import * as React from 'react';
import { shallow } from 'enzyme';
import { IssuesListItem } from './index';
import { DefaultIssue } from '../../common/model';

test('IssuesListItem issue click passes issue id', () => {
  const id = 'id';
  const issue = Object.assign({}, DefaultIssue, {id});
  const isIssueComplete = false;
  const isIssueActive = false;
  const onSelectIssue = jest.fn();

  const component = shallow(
    <IssuesListItem
      key={issue.id}
      issue={issue}
      isIssueComplete={isIssueComplete}
      isIssueActive={isIssueActive}
      onSelectIssue={onSelectIssue}
    />
    );
  const link = component.find('Link');
  link.simulate('click');
  expect(onSelectIssue).toBeCalledWith(id);
});
