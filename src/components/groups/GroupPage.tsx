import * as React from 'react';
import { LayoutContainer } from '../layout';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';

import { Group, Issue } from '../../common/model';
import { formatNumber } from '../shared/utils';
import { getGroup } from '../../services/apiServices';
import { LocationState } from '../../redux/location/reducer';
import { CallState } from '../../redux/callState/reducer';
import { queueUntilRehydration } from '../../redux/rehydrationUtil';

interface RouteProps extends RouteComponentProps<{ groupid: string, issueid: string }> { }

interface Props extends RouteProps {
  readonly activeGroup?: Group; 
  readonly issues: Issue[];
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
  loadingState: GroupLoadingState;
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
      loadingState: GroupLoadingState.LOADING,
      pageGroup: undefined,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    if (this.state.pageGroup) {
      if (newProps.match.params.groupid !== this.state.pageGroup.id) {
        this.setState({ loadingState: GroupLoadingState.LOADING });
        this.getGroupDetails(newProps.match.params.groupid);
      }      
    }
  }

  componentDidMount() {
    queueUntilRehydration(() => {
      this.getGroupDetails(this.props.match.params.groupid);
    });
  }

  getGroupDetails = (groupid: string) => {
    getGroup(groupid).then((response: Group) => {      
      this.props.onGetIssuesIfNeeded(groupid);

      this.setState({ loadingState: GroupLoadingState.FOUND, pageGroup: response });
    }).catch((e) => {
      this.setState({ loadingState: GroupLoadingState.NOTFOUND });
    });  
  }

  joinTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (this.state.pageGroup) {
      this.props.onJoinGroup(this.state.pageGroup); 
    }
  }

  render() {
    switch (this.state.loadingState) {
      case GroupLoadingState.LOADING:
        return (
          <LayoutContainer
            currentGroupId={this.props.match.params.groupid}
            issues={this.props.issues}
            issueId={this.props.match.params.issueid}
          >
            <div className="page__group">
              <h2 className="page__title">Getting team...</h2>
            </div>
          </LayoutContainer>
        );
      case GroupLoadingState.FOUND:
        // const groupId = this.props.activeGroup ? this.props.activeGroup.id : 'nogroup';

        // I hate handling optionals this way, swift is so much better on this
        let group: Group;
        if (this.state.pageGroup) {
          group = this.state.pageGroup;
        } else {
          return <span/>;
        }

        // const pctDone = (group.totalCalls / 1000) * 100;
        // const pctStyle = {width: `${pctDone}%`};    

        const introStyle = {
          backgroundColor: '#ddd',
          borderRadius: '6px',
          padding: '10px 10px 1px 10px',
        };

        return (
          <LayoutContainer 
            currentGroupId={this.props.match.params.groupid}
            issues={this.props.issues}
            issueId={this.props.match.params.issueid}
          >
            <div className="page__group">
            {group.photoURL !== '' ?
             <div className="page__group__image"><img alt={group.name} src={group.photoURL} /></div>
             :
             <span/>
            }
              <h2 className="page__title">{group.name}</h2>
              <h3>Together we've made {formatNumber(group.totalCalls)} calls!</h3>
              { (group.id === 'danicaroem') ?
              <blockquote style={introStyle}>
                {/*tslint:disable-next-line:max-line-length*/}
                <p>Welcome to the phone bank for Danica Roem, candidate for Virginia’s House of Delegates for District 13!</p>
                {/*tslint:disable-next-line:max-line-length*/}
                <p>We'll be making calls to voters in District 13 to help spread the word about Danica and the upcoming election on November 7th.</p>
                {/*tslint:disable-next-line:max-line-length*/}
                <p>These are a little different from calling your Congressperson, so before making these important calls, please read through all the materials below and familiarize yourself with Danica.</p>
                {/*tslint:disable-next-line:max-line-length*/}
                <p>If you’ve never made voter calls before, that’s perfectly ok! <Link to="/phonebanks">Please head over here</Link> for tips on phone banking and a great video that will make you feel ready!</p>
              </blockquote>
              : <span />}
              {/* <div className="progress">
                <span style={pctStyle} className="progress__total">
                    {formatNumber(group.totalCalls)} Calls
                </span>
              </div> */}
              <ReactMarkdown source={group.description}/>
              {/* <p>{groupId === group.id ? 
                  `You're contributing to the call total for this team!` : 
                  `Join this group to start making your calls count towards this team's total.`
              }</p> */}
            </div>
          </LayoutContainer>
        );
      default:
        return (
          <LayoutContainer
            currentGroupId={this.props.match.params.groupid}
            issues={this.props.issues}
            issueId={this.props.match.params.issueid}
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
