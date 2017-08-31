import { connect } from 'react-redux';
import { Donation } from './Donation';
import { ApplicationState } from '../../redux/root';

interface OwnProps {}

interface StateProps {
  total: number;
  goal: number;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  return {
    total: state.remoteDataState.donations ? state.remoteDataState.donations.total : 0,
    goal: state.remoteDataState.donations ? state.remoteDataState.donations.amount : 1
  };
};

export default connect(mapStateToProps, {})(Donation);
