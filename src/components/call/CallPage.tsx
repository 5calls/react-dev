import * as React from 'react';
import { Call } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';
import { CallState, OutcomeData } from '../../redux/callState';

interface Props {
  currentIssue: Issue;
  callState: CallState;
  issues: Issue[];
  onSubmitOutcome: (data: OutcomeData) => Function;
}

const CallPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.callState.completedIssueIds}
    currentIssue={props.currentIssue}
  >
    <Call
      issue={props.currentIssue}
      callState={props.callState}
      onSubmitOutcome={props.onSubmitOutcome}
    />
  </Layout>
);

export default CallPage;
