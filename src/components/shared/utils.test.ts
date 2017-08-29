import { formatLocationForBackEnd } from './utils';

class Data {
  constructor(private pactual: string | null | undefined, private pexpected: string) {}

  get actual() {
    return this.pactual;
  }

  get expected() {
    return this.pexpected;
  }
}

test('formatLocationForBackEnd should return empty string', () => {
  const testData: Data[] = [
    new Data('', ''),
    new Data('p12345', ''),
    new Data('123o', ''),
    new Data(undefined, ''),
    new Data(null, ''),
    new Data('1234', ''),
    new Data(' 1234', ''),
    new Data('40.4', ''),
    new Data(' 40.4', ''),
    new Data('12345 3456', ''),
    new Data('-12 34.1234', ''),
    new Data('12.4567-34.1234', ''),
  ];

  testData.forEach(data => tester(data));
});

test('formatLocationForBackEnd should return zip code', () => {
  const testData: Data[] = [
    new Data('12054', '12054'),
    new Data('04260', '04260'),
    new Data('12345-3456', '12345-3456'),
  ];

  testData.forEach(data => tester(data));
});

test('formatLocationForBackEnd should return geolocation', () => {
  const testData: Data[] = [
    new Data('-40.12054 -135.54', '-40.12054 -135.54'),
    // extra whitespace should be removed
    new Data('45.00054    142.04260', '45.00054 142.04260'),
    new Data('44.45632 -10.1234', '44.45632 -10.1234'),
  ];

  testData.forEach(data => tester(data));
});

const tester = (data: Data) => {
  const results = formatLocationForBackEnd(data.actual);
  expect(results).toEqual(data.expected);

};
