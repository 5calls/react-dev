import * as React from 'react';
// import i18n from '../../services/i18n';
import { LayoutContainer } from '../layout';
import { Group } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';
import { formatNumber } from '../shared/utils';
import { getGroup } from '../../services/apiServices';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly activeGroup?: Group; 
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: () => Function;
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

  render() {
    switch (this.state.loaded) {
      case GroupLoadingState.LOADING:
        return (
          <LayoutContainer issueId={this.props.match.params.id}>
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
          <LayoutContainer issueId={this.props.match.params.id}>
            <div className="page__group">
              <h2 className="page__title">{group.name}</h2>
              <button onClick={this.joinTeam}>{groupId === group.id ? `You're on this team` : 'Join Team'}</button>
              <div className="progress">
                <span style={pctStyle} className="progress__total">
                    {formatNumber(group.totalCalls)} Calls
                </span>
              </div>
              <p>{group.description}</p>
              <p>{groupId === group.id ? `You're contributing to the call total for this team!` : `Join this group to start making your calls count towards this team's total.`}</p>
            </div>
          </LayoutContainer>
        );
      default:
        return (
          <LayoutContainer issueId={this.props.match.params.id}>
            <div className="page__group">
              <h2 className="page__title">There's no team here 😢</h2>
            </div>
          </LayoutContainer>
        );
    }
  }
}

export default GroupPage;
