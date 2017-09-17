import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Issue } from '../../common/model';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issue: Issue;
  readonly isIssueComplete: boolean;
  readonly isIssueActive: boolean;
  readonly showGroupLinks: boolean;
  readonly onSelectIssue: (issueId: string) => Function;
}

interface State { }

export class IssuesListItem extends React.Component<Props, State> {
  render() {
    const isCompleted = this.props.isIssueComplete ? 'is-complete' : '';
    const isActive = this.props.isIssueActive ? 'is-active' : '';

    const issueLink = this.props.showGroupLinks ? `/group/${this.props.match.params.id}/${this.props.issue.id}` : `/issue/${this.props.issue.id}`;
    return (
      <li>
        <Link
          aria-controls="content"
          className={`issues-list__item ${isCompleted} ${isActive}`}
          to={issueLink}
          onClick={() => this.props.onSelectIssue(this.props.issue.id)}
        >
          <span aria-live="polite" className={`issues-list__item__status ${isCompleted} ${isActive}`}>
            <span className="visually-hidden" />
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
