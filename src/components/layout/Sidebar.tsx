import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import i18n from '../../services/i18n';
import { Issue } from '../../common/model';
import { IssuesListTranslatable } from '../issues';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  readonly onSelectIssue: (issueId: string) => Function;
}

const Sidebar: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <IssuesListTranslatable
      issues={props.issues}
      currentIssue={props.currentIssue}
      completedIssueIds={props.completedIssueIds}
      onSelectIssue={props.onSelectIssue}
      t={i18n.t}
      match={props.match}
      location={props.location}
      history={props.history}
    />
  );
};

export default Sidebar;
