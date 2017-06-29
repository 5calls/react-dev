import * as React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../../common/model';

interface Props {
  readonly issue: Issue;
  readonly currentIssue: Issue;
  readonly isIssueComplete: boolean;
  readonly isIssueActive: boolean;
  readonly setSelectedIssue:  (issue: Issue) => void;
}

interface State {}

class IssuesListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.issueSelected = this.issueSelected.bind(this);
  }

  issueSelected(issue: Issue) {
    this.props.setSelectedIssue(issue);
  }

  render() {
    // FIXME: fix this
    const isCompleted = this.props.isIssueComplete ? 'is-complete' : '';
    const isActive = this.props.isIssueActive ? 'is-active' : '';
    return (
      <li>
        <Link
            aria-controls="content"
            className={`issues-list__item ${isCompleted} ${isActive}`}
            to="/issue"
            onClick={() => this.issueSelected(this.props.issue)}
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
