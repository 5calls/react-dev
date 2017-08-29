import { OutcomeData } from './../redux/callState/asyncActionCreator';
import axios from 'axios';
import { ApiData, ReportData } from './../common/model';
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

export const postOutcomeData = (data: OutcomeData) => {
  const postData = {
    location: data.location,
    result: data.outcome,
    contactid: data.contactId,
    issueid: data.issueId,
    via: data.via
  };
  console.log('postOutcomeData() posted data:', postData)
  return axios.post(
      `${Constants.REGISTER_CALL_API_URL}`,
      postData,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
    .then(response => {
    console.log('postOutcomeData() response: ', response.data);
    return Promise.resolve(null);
  })
    .catch(e => Promise.reject(e));
};
