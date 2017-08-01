import * as React from 'react';
import { LocationState } from '../../redux/location/reducer';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

interface Props {
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
  readonly t: TranslationFunction;
}

// this will be needed
interface State {
  location: string;
  isValid: boolean;
  isLoading: boolean;
}

export class Location extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
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
    let isValid = props.locationState.invalidAddress;
    let isLoading = props.locationState.fetchingLocation || props.locationState.validatingLocation;

    return {
      location,
      isValid,
      isLoading
    };
  }

  getPretextWidget() {
    if (this.state.location) {
      return <p id="locationMessage">{this.props.t('location.yourLocation')} <span>{this.state.location}</span></p>;
    }

    if (this.state.isLoading) {
      return <p id="locationMessage" className="loadingAnimation">{this.props.t('location.gettingYourLocation')}</p>;
    }
    if (!this.state.isValid) {
      return <p id="locationMessage" role="alert">{this.props.t('location.invalidAddress')}</p>;
    }

    return <p id="locationMessage">{this.props.t('location.chooseALocation')}</p>;
  }

  getInputWidget() {
    if (!this.state.isLoading && this.state.isValid && this.state.location) {
      const enterLocation = (e) => {
        e.preventDefault();
        this.props.clearLocation();
      };
      return <div><button onClick={enterLocation}>{this.props.t('changeLocation')}</button></div>;
    } else {
      const submitAddress = (e) => {
        e.preventDefault();
        const newLocation = e.target.elements.address.value;
        this.props.setLocation(newLocation);
      };
      return (
        <div>
          {/* TODO:
          1. Set className to hidden when fetching location
          */}
          <form onSubmit={submitAddress} className={this.state.isLoading ? 'hidden' : ''}>
            <input
              type="text"
              autoFocus={true}
              id="address"
              name="address"
              aria-labelledby="locationMessage"
              aria-invalid={!this.state.isValid}
              disabled={this.state.isLoading}
              placeholder="Enter an address or zip code"
            />
            <button>{this.props.t('common.go')}</button>
          </form>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getPretextWidget()}
        {this.getInputWidget()}
      </div>
    );
  }
}

export const LocationTranslatable = translate()(Location);
