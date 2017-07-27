import * as React from 'react';
import { LocationState } from '../../redux/location/reducer';
import { RouteComponentProps } from 'react-router-dom';
import { Why5calls } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';

/*
  This is the top level View component in the HomePage Component Hierarchy.  It is the 
    child of the Redux container.  Therefore, its "Props" property must match the
    merged props that were provided to the connect() function in the "HomePageContainer".
*/
interface Props extends RouteComponentProps<{}> {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly totalCount: number;
  readonly onSelectIssue: (issueId: string) => Function;

  // location widget related
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
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
const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    onSelectIssue={props.onSelectIssue}
    locationState={props.locationState}
    setLocation={props.setLocation}
    clearLocation={props.clearLocation}
  >
    <Why5calls totalCount={props.totalCount} />
  </Layout>
);

export default HomePage;
