import { getLocationByIP } from './geolocationServices';

test('Test getLocationByIP', () => {

  // ERROR MSG:
  // Expected value to equal:
  //   "Foobar"
  // Received:
  // {
  //  "city": "Portland", "country": "US",
  // "hostname": "cpe-67-253-75-179.maine.res.rr.com",
  // "ip": "67.253.75.179", "loc": "43.6589,-70.2615",
  // "org": "AS11351 Time Warner Cable Internet LLC",
  // "postal": "04101", "region": "Maine"
  // }

  return getLocationByIP()
    .then(response => {
      expect(response.country).toEqual('US');
    });

});