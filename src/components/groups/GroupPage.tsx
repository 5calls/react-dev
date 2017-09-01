import * as React from 'react';
// import i18n from '../../services/i18n';
// import { CallTranslatable } from './index';
import { LayoutContainer } from '../layout';
import { Group } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  // readonly issues: Issue[];
  // readonly currentIssue: Issue;
  readonly totalCount: number;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: () => Function;
}

export interface State {
  currentGroup: Group;
}

class GroupPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    const testGroup: Group = {id: 'nick', name: 'Nick\'s Group'};

    return {
      currentGroup: testGroup,
    };
  }

  render() {
    if (this.state.currentGroup) {
      return (
        <LayoutContainer issueId={this.props.match.params.id}>
          <h2>{this.state.currentGroup.name}</h2>
        </LayoutContainer>
      );
    } else {
      return <div />;
    }
  }
}

export default GroupPage;
