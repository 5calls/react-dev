import { connect } from 'react-redux';
import CallCount from './CallCount';
import { ApplicationState } from './../../redux/root';

export interface StateProps {
  totalCount: number;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    totalCount: state.remoteDataState.callTotal
  };
};

export default connect(mapStateToProps)(CallCount);
