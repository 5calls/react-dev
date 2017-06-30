import * as React from 'react';
/*
    "location": {
      "gettingYourLocation": "Getting your location",
      "invalidAddress": "That address is invalid, please try again",
      "chooseALocation": "Enter your location",
      "changeLocation": "Change location",
      "yourLocation": "Your location",
      "enterAnAddressOrZipCode": "Enter an address or zip code"
    },
*/
interface Props {
  readonly location: string;
  readonly isValid: boolean;
  readonly isLoading: boolean;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

const Location: React.StatelessComponent<Props> = ({location, isValid, isLoading, setLocation, clearLocation}) => {
  let pretext;
  if (location) {
    pretext = <p id="locationMessage">Your location:{/*location.yourLocation*/} <span>{location}</span></p>;
  } else if (isLoading) {
    // tslint:disable-next-line:max-line-length
    pretext = <p id="locationMessage" className="loadingAnimation">Getting your location{/*location.gettingYourLocation*/}</p>;
  } else if (!isValid) {
    // tslint:disable-next-line:max-line-length
    pretext = <p id="locationMessage" role="alert">That address is invalid, please try again{/*location.invalidAddress*/}</p>;
  } else {
    pretext = <p id="locationMessage">Enter your location{/*location.chooseALocation*/}</p>;
  }

  let input;
  if (!isLoading && isValid && location) {
    const enterLocation = (e) => {
      e.preventDefault();
      clearLocation();
    };
    input = <div><button onClick={enterLocation}>Change location</button></div>;
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
        2. i18n placeholder attribute
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
          <button>Go{/*t("common.go", null, true)*/}</button>
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

export default Location;
