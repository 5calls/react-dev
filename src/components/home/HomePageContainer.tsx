import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import { HomePage } from './index';

interface StateProps {
  readonly totalCount: number;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    totalCount: state.remoteDataState.callTotal,
  };
};

export default connect<StateProps, {}, {}>(mapStateToProps)(HomePage);
