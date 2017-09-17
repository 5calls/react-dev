import * as React from 'react';
// import i18n from '../../services/i18n';
import { LayoutContainer } from '../layout';
import { Group } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';
import { formatNumber } from '../shared/utils';
import { getGroup } from '../../services/apiServices';
import { SidebarHeader, Sidebar, Footer, Header } from '../layout/index';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly activeGroup?: Group; 
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetGroupIssuesIfNeeded: (groupId: string) => Function;
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
    this.props.onGetGroupIssuesIfNeeded(this.props.match.params.id);
    
    getGroup(this.props.match.params.id).then((response: Group) => {
      this.setState({ loaded: GroupLoadingState.FOUND, pageGroup: response });
    }).catch((e) => {
      this.setState({ loaded: GroupLoadingState.NOTFOUND });
    });
  }

  joinTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (this.state.pageGroup) {
      this.props.onJoinGroup(this.state.pageGroup);      
    }
  }

  layoutWrapper = (children: any) => {
    return (
      <div>
        <Header />
        <div className="layout">
          <aside id="nav" role="contentinfo" className="layout__side">
            <div className="issues">
              <SidebarHeader
                callState={this.props.callState}
                locationState={props.locationState}
                setLocation={props.setLocation}
                clearLocation={props.clearLocation}
              />
              <Sidebar
                issues={props.issues}
                currentIssue={props.currentIssue ? props.currentIssue : undefined}
                completedIssueIds={props.completedIssueIds}
                onSelectIssue={props.onSelectIssue}
                match={props.match}
                location={props.location}
                history={props.history}
              />
            </div>
          </aside>
          <main id="content" role="main" aria-live="polite" className="layout__main">
            {children}
          </main>
        </div>
        <Footer
          t={i18n.t}
        />
      </div>
    );
  }

  render() {
    switch (this.state.loaded) {
      case GroupLoadingState.LOADING:
        return (
          <LayoutContainer
            issueId={this.props.match.params.id}
            match={this.props.match}
            location={this.props.location}
            history={this.props.history}
          >
            <div className="page__group">
              <h2 className="page__title">Getting team...</h2>
            </div>
          </LayoutContainer>
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
          <LayoutContainer
            issueId={this.props.match.params.id}
            match={this.props.match}
            location={this.props.location}
            history={this.props.history}
          >
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
          </LayoutContainer>
        );
      default:
        return (
          <LayoutContainer
            issueId={this.props.match.params.id}
            match={this.props.match}
            location={this.props.location}
            history={this.props.history}
          >
            <div className="page__group">
              <h2 className="page__title">There's no team here 😢</h2>
            </div>
          </LayoutContainer>
        );
    }
  }
}

export default GroupPage;
