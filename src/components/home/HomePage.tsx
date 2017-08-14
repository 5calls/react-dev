import * as React from 'react';
import i18n from '../../services/i18n';
import { RouteComponentProps } from 'react-router-dom';
import { Why5callsTranslatable } from './index';
import { LayoutContainer } from '../layout';

interface Props extends RouteComponentProps<{ id: string }> {
  readonly totalCount: number;
}

/*
  This is a StatelessComponent meaning that it is just a function. The props are passed in as
  a property.  More complicated components will be instantiated as a class and will often
  have "local" state.  Props for them will be an instance property.

  Notice that we are just passing all of the props that we pull off the Redux Store through
  this component to child components
*/
export const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <LayoutContainer>
    <Why5callsTranslatable
      totalCount={props.totalCount}
      t={i18n.t}
    />
  </LayoutContainer>
);

export default HomePage;
