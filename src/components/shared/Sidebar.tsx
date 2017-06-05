import * as React from 'react';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  selectIssueActionCreator: (issue: Issue) => void;
}

const Sidebar = (props: Props) => (
  <ul className="issues-list" role="navigation">
    {/* TODO: Add issues list component */}
    {props.issues ? props.issues.map((issue: Issue) => <li>{issue.name}</li>) : 'No issues found'}
  </ul>
);

export default Sidebar;
