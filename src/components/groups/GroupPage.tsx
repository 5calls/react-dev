import * as React from 'react';
import i18n from '../../services/i18n';
// import { LayoutContainer } from '../layout';
import { RouteComponentProps } from 'react-router-dom';
import { find } from 'lodash';

import { Group, Issue } from '../../common/model';
import { formatNumber } from '../shared/utils';
import { getGroup } from '../../services/apiServices';
import { LocationState } from '../../redux/location/reducer';
import { CallState } from '../../redux/callState/reducer';
import { SidebarHeader, Footer, Header } from '../layout/index';
import { IssuesListItem } from '../issues';
import { queueUntilHydration } from '../../redux/rehydrationUtil';

interface RouteProps extends RouteComponentProps<{ groupid: string, issueid: string }> { }

interface Props extends RouteProps {
  readonly activeGroup?: Group; 
  readonly groupIssues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  readonly callState: CallState;
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: (groupid: string) => Function;
  readonly onJoinGroup: (group: Group) => Function;
}

export interface State {
  loaded: GroupLoadingState;
  pageGroup?: Group;
}

enum GroupLoadingState {
  LOADING = 'LOADING',
  FOUND = 'FOUND',
  NOTFOUND = 'NOTFOUND',
}

class GroupPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    return {
      loaded: GroupLoadingState.LOADING,
      pageGroup: undefined,
    };
  }

  componentDidMount() {
    queueUntilHydration(() => {
      console.log("fetching group");
      getGroup(this.props.match.params.groupid).then((response: Group) => {      
        this.props.onGetIssuesIfNeeded(this.props.match.params.groupid);
  
        this.setState({ loaded: GroupLoadingState.FOUND, pageGroup: response });
      }).catch((e) => {
        this.setState({ loaded: GroupLoadingState.NOTFOUND });
      });  
    });
  }

  joinTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (this.state.pageGroup) {
      this.props.onJoinGroup(this.state.pageGroup);      
    }
  }

  render() {
    switch (this.state.loaded) {
      case GroupLoadingState.LOADING:
        return (
          this.layout(
            <div className="page__group">
              <h2 className="page__title">Getting team...</h2>
            </div>
          )
        );
      case GroupLoadingState.FOUND:
        const groupId = this.props.activeGroup ? this.props.activeGroup.id : 'nogroup';

        // I hate handling optionals this way, swift is so much better on this
        let group;
        if (this.state.pageGroup) {
          group = this.state.pageGroup;
        } else {
          return <span/>;
        }

        const pctDone = (group.totalCalls / 1000) * 100;
        const pctStyle = {width: `${pctDone}%`};    

        return (
          this.layout(
            <div className="page__group">
              <h2 className="page__title">{group.name}</h2>
              <button onClick={this.joinTeam}>{groupId === group.id ? `You're on this team` : 'Join Team'}</button>
              <div className="progress">
                <span style={pctStyle} className="progress__total">
                    {formatNumber(group.totalCalls)} Calls
                </span>
              </div>
              <p>{group.description}</p>
              <p>{groupId === group.id ? 
                  `You're contributing to the call total for this team!` : 
                  `Join this group to start making your calls count towards this team's total.`
              }</p>
            </div>
          )
        );
      default:
        return (
          this.layout(
            <div className="page__group">
              <h2 className="page__title">There's no team here 😢</h2>
            </div>
          )
        );
    }
  }

  layout(wrapped) {
    let currentIssueId: string = this.props.currentIssue ? this.props.currentIssue.id : '';

    return (
      <div>
      <Header />
      <div className="layout">
        <aside id="nav" role="contentinfo" className="layout__side">
          <div className="issues">
            <SidebarHeader
              callState={this.props.callState}
              locationState={this.props.locationState}
              setLocation={this.props.setLocation}
              clearLocation={this.props.clearLocation}
            />
            <ul className="issues-list" role="navigation">
            {this.props.groupIssues && this.props.groupIssues.map ? this.props.groupIssues.map(issue =>
              <IssuesListItem
                key={issue.id}
                issue={issue}
                isIssueComplete={
                  this.props.completedIssueIds &&
                  (find(this.props.completedIssueIds, (issueId: string) => issue.id === issueId) !== undefined)
                }
                isIssueActive={currentIssueId === issue.id}
                onSelectIssue={this.props.onSelectIssue}
              />) :
               <li>no issues bro</li>
              }
            </ul>
          </div>
        </aside>
        <main id="content" role="main" aria-live="polite" className="layout__main">
          {wrapped}
        </main>
      </div>
      <Footer
        t={i18n.t}
      />
    </div>
    );
  }
}

export default GroupPage;
