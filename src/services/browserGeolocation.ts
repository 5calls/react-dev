import { GeolocationPosition } from '../common/model';

export const GEOLOCATION_TIMEOUT = 20000;

export const browserGeolocation = (): Promise<GeolocationPosition>  => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (navigator.geolocation) {
      const geolocation: Geolocation =  navigator.geolocation;
      geolocation.getCurrentPosition(
        // getCurrentPosition() parameter TS type definition:
        // (successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions) => {
        //
        // PositionCallback
        (position: Position) => {
          const coords: Coordinates = position.coords;
          // tslint:disable-next-line:no-shadowed-variable
          const geolocation: GeolocationPosition = { latitude: coords.latitude, longitude: coords.longitude };
          resolve(geolocation);
        },
        // PositionErrorCallback
        (e: PositionError) => {
          const code = e.code;
          if (
            code === PositionError.POSITION_UNAVAILABLE ||
            code === PositionError.TIMEOUT ||
            code === PositionError.PERMISSION_DENIED
          ) {
            const msg = `Browser geolocation not accomplished;
              PositionError code: ${code};
              PositionError message: ${e.message}`;
            // tslint:disable-next-line:no-console
            console.warn(msg, e);
            resolve({latitude: 0, longitude: 0});
          } else {
            const msg = `Problem doing browser geolocation;
            PositionError code: ${code};
            PositionError message: ${e.message}`;
            // tslint:disable-next-line:no-console
            console.error(msg, e);
            reject(new Error(msg));
          }
        },
        // PositionOptions
        {
          enableHighAccuracy: false,
          timeout: GEOLOCATION_TIMEOUT, // 20 seconds
          maximumAge: 30000 // 30 seconds
        }
      );
    } else {
      reject(new Error('Browser Geolocation API not available'));
    }
  });
};
