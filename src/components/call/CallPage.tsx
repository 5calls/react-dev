import * as React from 'react';
import i18n from '../../services/i18n';
import { RouteComponentProps } from 'react-router-dom';
import { CallTranslatable } from './index';
import { LayoutContainer } from '../layout';
import { Issue } from '../../common/model';
import { CallState, OutcomeData } from '../../redux/callState';

/*
  This is the top level View component in the CallPage Component Hierarchy.  It is the 
    child of the Redux container.  Therefore, its "Props" property must match the
    merged props that were provided to the connect() function in the "HomePageContainer".

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
}

export interface State {
  currentIssue: Issue;
  callState: CallState;
}

/*
  This is a StatelessComponent meaning that it is just a function. The props are passed in as
  a property.  More complicated components will be instantiated as a class and will often
  have "local" state.  Props for them will be an instance property.

  Notice that we are just passing all of the props that we pull off the Redux Store through
  this component to child components

  When the props.onSelectIssue function is called by some component that has access to it
  down this component hierarchy, it will simply be passed up this tree and end up calling the 
  dispatch method on the store corresponding to that method(as defined in the top-level redux container). 
*/

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
    if (!this.props.callState.currentIssueId && newProps.currentIssue) {
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
      <LayoutContainer issueId={this.props.currentIssue.id} >
        {this.props.currentIssue &&
          <CallTranslatable
            issue={this.props.currentIssue}
            callState={this.props.callState}
            onSubmitOutcome={this.props.onSubmitOutcome}
            t={i18n.t}
          />}
      </LayoutContainer>
    );
  }
}
export default CallPage;
