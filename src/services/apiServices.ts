import axios, {AxiosResponse} from 'axios';
import * as Constants from '../common/constants';

export const getIssues = (address: string): Promise<AxiosResponse> => {
  return axios.get(`${Constants.ISSUES_API_URL}${encodeURIComponent(address)}`);
};

export const getCallCount = (): Promise<AxiosResponse> => {
  return axios.get(`${Constants.REPORT_API_URL}`);
};

export const getLocationByIP = (): Promise<AxiosResponse> => {
  return axios.get(Constants.IP_INFO_URL);
};
