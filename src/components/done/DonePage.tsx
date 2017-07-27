import * as React from 'react';
import { DoneTranslatable } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue: Issue;
  readonly totalCount: number;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: () => Function;
}

export interface State {
  currentIssue: Issue;
}

class DonePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    return {
      currentIssue: props.currentIssue,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));

    if (!this.state.currentIssue && newProps.currentIssue) {
      this.props.onSelectIssue(newProps.currentIssue.id);
    }
  }

  componentDidMount() {
    this.props.onGetIssuesIfNeeded();
  }

  render() {
    return (
      <Layout
        issues={this.props.issues}
        completedIssueIds={this.props.completedIssueIds}
        currentIssue={this.props.currentIssue}
        onSelectIssue={this.props.onSelectIssue}
      >
        {this.props.currentIssue &&
          <DoneTranslatable currentIssue={this.props.currentIssue} totalCount={this.props.totalCount} />
        }
      </Layout>
    );
  }
}

export default DonePage;
