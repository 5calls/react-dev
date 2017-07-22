import * as React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../../common/model';

interface Props {
  readonly issue: Issue;
  readonly isIssueComplete: boolean;
  readonly isIssueActive: boolean;
  readonly onSelectIssue: (issueId: string) => Function;
}

interface State {}

class IssuesListItem extends React.Component<Props, State> {
  render() {
    const isCompleted = this.props.isIssueComplete ? 'is-complete' : '';
    const isActive = this.props.isIssueActive ? 'is-active' : '';
    return (
      <li>
        <Link
            aria-controls="content"
            className={`issues-list__item ${isCompleted} ${isActive}`}
            to={`/issue/${this.props.issue.id}`}
            onClick={() => this.props.onSelectIssue(this.props.issue.id)}
        >
          <span aria-live="polite" className={`issues-list__item__status ${isCompleted} ${isActive}`}>
            <span className="visually-hidden"/>
          </span>
          <span className={`issues-list__item__title ${isCompleted} ${isActive}`}>
            {this.props.issue.name}
          </span>
          <span className={`issues-list__item__summary ${isCompleted} ${isActive}`}>
            {/* TODO: Finish this impl */}
            <span>X calls to make</span>
          </span>
        </Link>
      </li>
    );
  }

}

export default IssuesListItem;
