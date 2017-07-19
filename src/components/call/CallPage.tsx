import * as React from 'react';
import { Call } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';
import { CallState, OutcomeData } from '../../redux/callState';

interface Props {
  currentIssue: Issue;
  callState: CallState;
  onSubmitOutcome: (data: OutcomeData) => Function;
}

const CallPage: React.StatelessComponent<Props> = (Props: Props) => (
  <Layout>
    <Call
      issue={Props.currentIssue}
      callState={Props.callState}
      onSubmitOutcome={Props.onSubmitOutcome}
    />
  </Layout>
);

export default CallPage;
