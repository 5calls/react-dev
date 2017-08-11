import * as React from 'react';
import { LocationState } from '../../redux/location/reducer';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { LocationUiState } from '../../common/model';

interface Props {
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
  readonly t: TranslationFunction;
}

// this will be needed
interface State {
  location: string;
  uiState: LocationUiState;
}

export class Location extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  componentWillReceiveProps(nextProps: Props) {
    // console.log('Location.componentWillReceiveProps()', nextProps);
    this.setState(this.setStateFromProps(nextProps));
  }

  /**
   * Set state from props when props
   * are initialized or refreshed
   *
   * @param {Props} props
   * @returns {State}
   */
  setStateFromProps(props: Props): State {
    let location = props.locationState.address || props.locationState.cachedCity;
    let uiState = props.locationState.uiState;

    return {
      location,
      uiState
    };
  }

  getWidgetTitle() {
    let title = <span/>;
    // console.log(`UI State: ${this.state.uiState}`)
    switch (this.state.uiState) {
      case LocationUiState.LOCATION_FOUND:
        title = <p id="locationMessage">{this.props.t('location.yourLocation')} <span>{this.state.location}</span></p>;
        break;
      case LocationUiState.FETCHING_LOCATION:
        title = <p id="locationMessage" className="loadingAnimation">{this.props.t('location.gettingYourLocation')}</p>;
        break;
      case LocationUiState.LOCATION_ERROR:
        title = <p id="locationMessage" role="alert">{this.props.t('location.invalidAddress')}</p>;
        break;
      case LocationUiState.ENTERING_LOCATION:
        title = <p id="locationMessage">{this.props.t('location.chooseALocation')}</p>;
        break;
      default:
        break;
    }
    return title;
    // // ADDRESS OR CACHED_CITY
    // if (this.state.location) {
    //   return <p id="locationMessage">{this.props.t('location.yourLocation')} <span>{this.state.location}</span></p>;
    // // FETCHING OR VALIDATING
    // } else if (this.state.isLoading) {
    //   return <p id="locationMessage" className="loadingAnimation">{this.props.t('location.gettingYourLocation')}</p>;
    // // INVALID_ADDRESS
    // } else if (!this.state.isValid) {
    //   return <p id="locationMessage" role="alert">{this.props.t('location.invalidAddress')}</p>;
    // // CHOOSE LOCATION
    // } else {
    //   return <p id="locationMessage">{this.props.t('location.chooseALocation')}</p>;
    // }
  }

  getWidget() {
    let widget = <span/>;
    switch (this.state.uiState) {
      case LocationUiState.FETCHING_LOCATION:
        // No widget in this case
        break;
      case LocationUiState.LOCATION_FOUND:
        const enterLocation = (e) => {
          e.preventDefault();
          this.props.clearLocation();
          // this.setState({uiState: LocationUiState.ENTERING_LOCATION});
        };
        widget = <div><button onClick={enterLocation}>{this.props.t('location.changeLocation')}</button></div>;
        break;
      case LocationUiState.LOCATION_ERROR:
      case LocationUiState.ENTERING_LOCATION:
        const submitAddress = (e) => {
          e.preventDefault();
          const newLocation = e.target.elements.address.value;
          // this.setState({uiState: LocationUiState.FETCHING_LOCATION});
          this.props.setLocation(newLocation);
        };
        widget = (
          <div>
            {/* TODO:
            1. Set className to hidden when fetching location
            */}
            <form onSubmit={submitAddress} >
              <input
                type="text"
                autoFocus={true}
                id="address"
                name="address"
                aria-labelledby="locationMessage"
                aria-invalid={this.state.uiState === LocationUiState.LOCATION_ERROR}
                placeholder="Enter an address or zip code"
              />
              <button>{this.props.t('common.go')}</button>
            </form>
          </div>
          );
        break;
      default:
        break;
    }
    return widget;
    // if (!this.state.isLoading && this.state.isValid && this.state.location) {
    //   const enterLocation = (e) => {
    //     e.preventDefault();
    //     this.props.clearLocation();
    //   };
    //   return <div><button onClick={enterLocation}>{this.props.t('location.changeLocation')}</button></div>;
    // } else {
    //   const submitAddress = (e) => {
    //     e.preventDefault();
    //     const newLocation = e.target.elements.address.value;
    //     this.props.setLocation(newLocation);
    //   };
    //   return (
    //     <div>
    //       {/* TODO:
    //       1. Set className to hidden when fetching location
    //       */}
    //       <form onSubmit={submitAddress} className={this.state.isLoading ? 'hidden' : ''}>
    //         <input
    //           type="text"
    //           autoFocus={true}
    //           id="address"
    //           name="address"
    //           aria-labelledby="locationMessage"
    //           aria-invalid={!this.state.isValid}
    //           disabled={this.state.isLoading}
    //           placeholder="Enter an address or zip code"
    //         />
    //         <button>{this.props.t('common.go')}</button>
    //       </form>
    //     </div>
    //   );
    // }
  }

  render() {
    return (
      <div>
        {this.getWidgetTitle()}
        {this.getWidget()}
      </div>
    );
  }
}

export const LocationTranslatable = translate()(Location);
