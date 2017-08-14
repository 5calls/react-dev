import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import { HomePage } from './index';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly totalCount: number;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  return {
    totalCount: state.remoteDataState.callTotal,
  };
};

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(HomePage);
