import * as React from 'react';
import { shallow } from 'enzyme';
import { Done } from './index';
import { DefaultIssue } from '../../common/model';

test('Done component snapshot renders correctly', () => {
  const issue = Object.assign({}, DefaultIssue, {id: 3});
  const count = 10000;
  const component = shallow(
    <Done
      currentIssue={issue}
      totalCount={count}
    />
  );
  expect(component).toMatchSnapshot();
});
