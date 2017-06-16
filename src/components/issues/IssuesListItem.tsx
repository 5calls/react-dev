import * as React from 'react';
import {Issue} from '../../common/model';

interface Props {
  issue: Issue;
  selectIssueActionCreator: (issue: Issue) => void;
}

const IssuesListItem: React.StatelessComponent<Props> = (props: Props) => (
  <li>
    <a className="issues-list__item" onClick={() => props.selectIssueActionCreator(props.issue)}>
      <span aria-live="polite" className="issues-list__item__status">
        <span className="visually-hidden"/>
      </span>
      <span className="issues-list__item__title">
        {props.issue.name}
      </span>
      <span className="issues-list__item__summary">
        {/* TODO: Finish this impl */}
        <span>X calls to make</span>
      </span>
    </a>
  </li>
);

export default IssuesListItem;
