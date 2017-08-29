
export const APP_NAME = '5 Calls';
<<<<<<< a26b5303687b205b71f998717e7ec521b45788c1
export const APP_URL = 'https://5calls.org';
export const API_URL = 'https://api.5calls.org/v1';
export const ISSUES_API_URL = `${APP_URL}/issues/?address=`;
export const REGISTER_CALL_API_URL = `${APP_URL}/report`;
export const REPORT_API_URL = `${API_URL}/counts`;
=======
// export const APP_URL = 'https://5calls.org';
export const APP_URL = 'http://localhost:8090';
export const ISSUES_API_URL = `${APP_URL}/issues/?all=true&address=`;
export const REPORT_API_URL = `${APP_URL}/report`;
>>>>>>> Some refactoring and almost done with the more issues page.
export const IP_INFO_URL = 'https://ipinfo.io/json';

export const zipCodeRegex: RegExp = /^\d{5}(-\d{4})?$/;

export const contact = {
  email: 'make5calls@gmail.com',
  github: 'https://github.com/5calls',
  twitter: 'https://twitter.com/make5calls',
  facebook: 'https://www.facebook.com/make5calls'
};
