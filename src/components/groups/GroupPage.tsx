import * as React from 'react';
// import i18n from '../../services/i18n';
// import { CallTranslatable } from './index';
import { LayoutContainer } from '../layout';
import { Group } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';
import { formatNumber } from '../shared/utils';

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
    const testGroup: Group = {id: 'nick', name: 'Team Nicky'};

    return {
      currentGroup: testGroup,
    };
  }

  render() {
    const callNumber = 6456;
    const pctDone = (6456 / 10000) * 100;
    const pctStyle = {width: `${pctDone}%`};

    if (this.state.currentGroup) {
      return (
        <LayoutContainer issueId={this.props.match.params.id}>
          <div className="page__group">
            <h2 className="page__title">{this.state.currentGroup.name}</h2>
            <button>Join Group</button>
            <div className="progress">
              <span style={pctStyle} className="progress__total">
                  {formatNumber(callNumber)} Calls
              </span>
            </div>
            <p>Hi there, Team Nicky is a hardworking circle of friends who make calls while they're at work and on vacation and really any time we think about it.</p>
            <p>Join this group to start making your calls count towards this team's total.</p>
          </div>
        </LayoutContainer>
      );
    } else {
      return <div />;
    }
  }
}

export default GroupPage;
