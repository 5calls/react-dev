import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssueActionCreator } from '../../redux/callState';
import { ApplicationState } from '../../redux/root';
import { HomePage } from './index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

/*
  The Container Component(such as this one) exist to connect a react component to the Redux store.
  The pattern that the 5Calls app is using is to have 1 container component for each
  "page".  
  A page is represented by a route as defined in the /src/index.tsx file.
  The "page" that this container component provides a connection to Redux for is "Home"
  The route is:
     <Route path="/" exact={true} component={HomePageContainer} />
  A container maps data from Redux through the "mapStateToProps" method
          and maps actions from Redux through the "mapDispatchToProps" method

  An important Typescript "Gotcha" is that this data and actions(functions) will be passed into the 
    child component as "Props".  Therefore, Typescript requires that they are defined in this container component
    but also defined as "Props" to be received by the child component, in the case "HomePage" 

  In this container component, we will pull all of the data/actions(functions) off of Redux that this Page
    (its child components) need and we will pass them down to them through their props.  We call 
    the Page and it child components the Component Hierarchy. This leads to passing data through multiple
    components.  However, the benefit of this pattern is that we are not access the "global" Redux state
    from everywhere in the application.  We have one entry point to it for every page, at the top level of the
    component hierarchy.  
*/

interface OwnProps extends RouteComponentProps<{}> { }

// This defines the data that we will pull off the Redux store
interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly totalCount: number;
}

/*
 This defines the actions that we pass a reference to to our child components.
   By calling these methods, child components will be able to dispatch redux actions
*/
interface DispatchProps {

  // This defines a method signature that is going to be passed into the child component 
  readonly onSelectIssue: (issueId: string) => void;
}

/*
 This is the standard method that takes the Redux store and allows us to pull data off it
 and pass it into the child component.  You can do logic in this method before passing back
 the object with the props (see the Call page for an example).
*/
function mapStateToProps(
  state: ApplicationState,
  ownProps: OwnProps
): StateProps {
  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
    totalCount: state.remoteDataState.callTotal
  };
}

/* 
  This is the standard method that takes the Redux store's dispatch method and allows
 us to pass actions(functions, actionCreators are other words for this) to it and have it
 map to the child component.
*/
const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      /*
        REDUX DATA FLOW 1: This connects a method that is passed into the child components to
          an action creator that can take action on the Redux Store.
        This particular method will be passed down through following components:
            HomePage -> Layout -> Sidebar -> IssueList -> IssueListItem
        When an IssueListItem is clicked on, this method will be called and this action
            will be dispatched.
        See /src/redux/callState/actionCreator.ts for next step in Redux Data Flow      
      */
      onSelectIssue: selectIssueActionCreator
    },
    dispatch
  );
};

/* This the key "magic" function that "connects" this redux container component to the child 
     component.  It is also where you will get errors.
    The connect<StateProps, DispatchProps, OwnProps> function will "merge" the interfaces
    that you've put into the generic area.
      e.g. in this case <StateProps, DispatchProps, OwnProps>

    Therefore, the "HomePage" component must have defined its "Props" to match have 
    all of the properties that this merged interface will have.  Otherwise, you will get
    a cryptic error message. 
 
    There are many signatures for this connect function, as you'll see in our other containers in this
    app.  You can click F12(VSCode) on it and try it will take you to the typescript definition.
*/
export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
