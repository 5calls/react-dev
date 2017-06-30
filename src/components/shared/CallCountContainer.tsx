import { connect } from 'react-redux';
import { CallCount } from './index';
import { ApplicationState } from './../../redux/root';

export interface StateProps {
  totalCount: number;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    totalCount: state.remoteDataState.callTotal
  };
};

export default connect<StateProps, {}, {}>(mapStateToProps)(CallCount);
