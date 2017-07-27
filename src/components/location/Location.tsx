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

export const Location: React.StatelessComponent<Props> =
  ({ locationState, t, setLocation, clearLocation }) => {
    let location = locationState.address || locationState.cachedCity;
    let isValid = locationState.invalidAddress;
    let isLoading = locationState.fetchingLocation || locationState.validatingLocation;
    let pretext;
    if (location) {
      pretext = <p id="locationMessage">{t('location.yourLocation')} <span>{location}</span></p>;
    } else if (isLoading) {
      pretext = <p id="locationMessage" className="loadingAnimation">{t('location.gettingYourLocation')}</p>;
    } else if (!isValid) {
      pretext = <p id="locationMessage" role="alert">{t('location.invalidAddress')}</p>;
    } else {
      pretext = <p id="locationMessage">{t('location.chooseALocation')}</p>;
    }

    let input;
    if (!isLoading && isValid && location) {
      const enterLocation = (e) => {
        e.preventDefault();
        clearLocation();
      };
      input = <div><button onClick={enterLocation}>{t('changeLocation')}</button></div>;
    } else {
      const submitAddress = (e) => {
        e.preventDefault();
        const newLocation = e.target.elements.address.value;
        setLocation(newLocation);
      };
      input = (
        <div>
          {/* TODO:
        1. Set className to hidden when fetching location
        */}
          <form onSubmit={submitAddress} className={isLoading ? 'hidden' : ''}>
            <input
              type="text"
              autoFocus={true}
              id="address"
              name="address"
              aria-labelledby="locationMessage"
              aria-invalid={!isValid}
              disabled={isLoading}
              placeholder="Enter an address or zip code"
            />
            <button>{t('common.go')}</button>
          </form>
        </div>
      );
    }

    return (
      <div>
        {pretext}
        {input}
      </div>
    );

  };

export const LocationTranslatable = translate()(Location);
