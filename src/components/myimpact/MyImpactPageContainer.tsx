import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import { UserStatsState } from '../../redux/userStats';

import { MyImpactPage } from './index';

interface StateProps {
  readonly userStats: UserStatsState;
  readonly totalCount: number;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    userStats: state.userStatsState,
    totalCount: state.remoteDataState.callTotal,
  };
};

export default connect<StateProps, {}, {}>(mapStateToProps)(MyImpactPage);
