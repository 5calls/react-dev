import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {Issue} from '../../common/model';
import { selectIssueActionCreator } from '../../redux/callState/actionCreator';

interface Props {
  readonly issue: Issue;
  readonly dispatch?: Dispatch<Issue>; // added by connect()
  // readonly selectIssueActionCreator: (issue: Issue) => void;
}

interface State {}

class IssuesListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.issueSelected = this.issueSelected.bind(this);
  }

  issueSelected(issue: Issue) {
    if (this.props.dispatch) {
      this.props.dispatch(selectIssueActionCreator(issue));
    }
  }

  render() {
    return (
      <li>
        <Link
            aria-controls="content"
            className="issues-list__item"
            to="/issue"
            onClick={() => this.issueSelected(this.props.issue)}
        >
          <span aria-live="polite" className="issues-list__item__status">
            <span className="visually-hidden"/>
          </span>
          <span className="issues-list__item__title">
            {this.props.issue.name}
          </span>
          <span className="issues-list__item__summary">
            {/* TODO: Finish this impl */}
            <span>X calls to make</span>
          </span>
        </Link>
      </li>
    );
  }
}

export default connect<Props>()(IssuesListItem);
