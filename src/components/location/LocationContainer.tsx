import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAddress, clearAddress } from '../../redux/location';
import { ApplicationState } from '../../redux/root';
import { Location } from './index';

interface StateProps {
  readonly location: string;
  readonly isValid: boolean;
  readonly isLoading: boolean;
}

interface DispatchProps {
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    location: state.locationState.address || state.locationState.cachedCity,
    isValid: !state.locationState.invalidAddress,
    isLoading: state.locationState.fetchingLocation || state.locationState.validatingLocation
  };
}

function mapDispatchToProps(dispatch: Dispatch<DispatchProps>): DispatchProps {
  return bindActionCreators({setLocation: setAddress, clearLocation: clearAddress}, dispatch);
}

export default connect<StateProps, DispatchProps, {}>(
    mapStateToProps, mapDispatchToProps)(Location);
