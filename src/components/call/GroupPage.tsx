import * as React from 'react';
// import i18n from '../../services/i18n';
// import { DoneTranslatable } from './index';
// import { LayoutContainer } from '../layout';
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
    // this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    const testGroup: Group = {id: 'nick', name: 'Nick\'s Group'}
    return {
      currentGroup: testGroup,
    };
  }

  // componentWillReceiveProps(newProps: Props) {
  //   this.setState(this.setStateFromProps(newProps));

  //   if (!this.state.currentIssue && newProps.currentIssue) {
  //     this.props.onSelectIssue(newProps.currentIssue.id);
  //   }
  // }

  componentDidMount() {
    // this.props.onGetIssuesIfNeeded();
  }

  render() {
    if (this.state.currentGroup) {
      return (
        <div>
          <h2>{this.state.currentGroup.name}</h2>
        </div>
        // <LayoutContainer issueId={this.props.currentIssue.id}>
        //   {this.props.currentIssue &&
        //     <DoneTranslatable
        //       currentIssue={this.props.currentIssue}
        //       totalCount={this.props.totalCount}
        //       t={i18n.t}
        //     />
        //   }
        // </LayoutContainer>
      );
    } else {
      return <div />;
    }
  }
}

export default GroupPage;
