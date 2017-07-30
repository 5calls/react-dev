import { ApiData, ReportData } from './../common/model';
import axios from 'axios';
import * as Constants from '../common/constants';

export const get5CallsApiData = (address: string): Promise<ApiData> => {
  return axios.get(`${Constants.ISSUES_API_URL}${encodeURIComponent(address)}`)
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e));
};

export const getReportData = (): Promise<ReportData> => {
  return axios.get(`${Constants.REPORT_API_URL}`)
    .then(response => Promise.resolve(response.data))
    .catch(e => Promise.reject(e));
};

