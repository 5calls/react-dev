import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import i18n from '../../services/i18n';
import { MyImpactTranslatable } from './index';
import { LayoutContainer } from '../layout';
import { UserStatsState } from '../../redux/userStats';

interface Props extends RouteComponentProps<{ id: string }> {
  readonly userStats: UserStatsState;
  readonly totalCount: number;
}

const MyImpactPage: React.StatelessComponent<Props> = (props: Props) => (
  <LayoutContainer issueId={props.match.params.id}>
    <MyImpactTranslatable
      userStats={props.userStats}
      totalCount={props.totalCount}
      t={i18n.t}
    />
  </LayoutContainer>
);

export default withRouter(MyImpactPage);
