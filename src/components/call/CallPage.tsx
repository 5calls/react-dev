import * as React from 'react';
import i18n from '../../services/i18n';
import { LocationState } from '../../redux/location/reducer';
import { RouteComponentProps } from 'react-router-dom';
import { CallTranslatable } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';
import { CallState, OutcomeData } from '../../redux/callState';

/*            
    Note the "{id: string}" added as a generic type parameter to RouteComponentProps. 
    If you look at the Type Definition F12(VSCode) for RouteComponentProps, you'll see this:
    
    export interface RouteComponentProps<P> {
      match: match<P>;
      location: H.Location;
      history: H.History;
    }

    export interface match<P> {
      params: P;
      isExact: boolean;
      path: string;
      url: string;
    }

    This means that the "P" is a generic parameter into that is passed into the match object and then
    defines the "params" object type.  This allows the "params" object to be whatever we have defined
    it in our route.  In this route "/call/:id" (as well as the "/done/:id" route), we've defined
    our params to have simply one key: "id".
*/
interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly callState: CallState;
  readonly currentIssue: Issue;
  readonly onSubmitOutcome: (data: OutcomeData) => Function;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: () => Function;

  // location widget related
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

export interface State {
  currentIssue: Issue;
  callState: CallState;
}

class CallPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    return {
      currentIssue: props.currentIssue,
      callState: props.callState,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));

    // in the case that we have come here directly by the url(not first to home page)
    // the issues won't be loaded when first rendered.
    // On the second render, we'll have the issues and the current issue will have been identified
    // Here we set it on the redux store(note that if we've already set it in local state, in this component)
    // we don't want to set it on the redux store again because that will cause a re-render loop.
    if (!this.props.callState.currentIssueId) {
      this.props.onSelectIssue(newProps.currentIssue.id);
    }
  }

  componentDidMount() {
    if (!this.props.issues) {
      // On the first render, if the issues haven't been loaded(came here directly, not first to home page)
      // here we'll check to see if issues are in the redux store and if not we'll load them
      // if we have to load them, the component will be re-rendered after the issues are retrieved
      this.props.onGetIssuesIfNeeded();
    } else {
      // this is the case where the user has clicked on an issue from the sidebar
      if (!this.props.callState.currentIssueId) {
        this.props.onSelectIssue(this.props.currentIssue.id);
      }
    }
  }

  render() {
    return (
      <Layout
        issues={this.props.issues}
        completedIssueIds={this.props.callState.completedIssueIds}
        currentIssue={this.props.currentIssue}
        onSelectIssue={this.props.onSelectIssue}
        locationState={this.props.locationState}
        setLocation={this.props.setLocation}
        clearLocation={this.props.clearLocation}
      >
        {this.props.currentIssue &&
          <CallTranslatable
            issue={this.props.currentIssue}
            callState={this.props.callState}
            onSubmitOutcome={this.props.onSubmitOutcome}
            t={i18n.t}
          />}
      </Layout>
    );
  }
}
export default CallPage;
