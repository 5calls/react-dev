import * as React from 'react';
import { Call } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';
import { CallState, OutcomeData } from '../../redux/callState';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly callState: CallState;
  readonly currentIssue: Issue;
  onSubmitOutcome: (data: OutcomeData) => Function;
  onSelectIssue: (issueId: string) => Function;
  onGetIssuesIfNeeded: () => Function;
}

export interface State {
  currentIssue: Issue;
  callState: CallState;
}

class CallPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    return {
      currentIssue: props.currentIssue,
      callState: props.callState,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));

    // in the case that we have come here directly by the url(not first to home page)
    // the issues won't be loaded when first rendered. 
    // On the second render, we'll have the issues and the current issue will have been identified
    // Here we set it on the redux store(note that if we've already set it in local state, in this component)
    // we don't want to set it on the redux store again because that will cause a re-render loop.
    if (!this.state.currentIssue && newProps.currentIssue) {
      this.props.onSelectIssue(newProps.currentIssue.id);
    }
  }

  // On the first render, if the issues haven't been loaded(came here directly, not first to home page)
  // here we'll check to see if issues are in the redux store and if not we'll load them
  // if we have to load them, the component will be re-rendered after the issues are retrieved
  componentDidMount() {
    this.props.onGetIssuesIfNeeded();
  }

  render() {
    return (
      <Layout
        issues={this.props.issues}
        completedIssueIds={this.props.callState.completedIssueIds}
        currentIssue={this.props.currentIssue}
      >
        {this.props.currentIssue &&
          <Call
            issue={this.props.currentIssue}
            callState={this.props.callState}
            onSubmitOutcome={this.props.onSubmitOutcome}
          />}
      </Layout>
    );
  }
}
export default CallPage;
