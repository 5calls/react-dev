
export interface Issue {
  id: string;
  name: string;
  reason: string;
  script: string;
  contacts?: Contact[];
  categories: Category[];
  inactive: boolean;
}

export const DefaultIssue: Issue = {
  id: '',
  name: '',
  reason: '',
  script: '',
  categories: [],
  inactive: false
};

export interface Contact {
  id: string;
  name: string;
  phone: string;
  photoURL?: string;
  party: Party;
  state: string;
  reason: string;
  area?: string;
  field_offices?: FieldOffice[];
}

export interface Category {
  name: string;
}

export type Party = 'Democrat' | 'Republican' | 'Independent' | '';

// export const DefaultContact: Contact = {
//   name: '',
//   phone: '',
//   party: '',
//   state: '',
//   reason: ''
// };

export const DefaultContact: Contact = {} as Contact;

export interface FieldOffice {
  city: string;
  phone: string;
}

export interface UserStat {
  all: string[];
  contactedCount: number;
  voiceMailCount: number;
  unavailableCount: number;
}

export enum LocationFetchType {
  IP_INFO,
  ADDRESS,
  BROWSER_GEOLOCATION
}

export interface GeolocationPosition {
  longitude: number | undefined;
  latitude: number | undefined;
}

/* 5 Calls API data */
export interface ApiData {
  splitDistrict: boolean;
  invalidAddress: boolean;
  normalizedLocation: string | undefined;
  divisions: string[];
  issues: Issue[];
}

export interface ReportData {
  ahcaCounts: AhcaCounts;
  count: number; // total call count
}

/* Counts for the American Health Care Act vote */
export interface AhcaCounts {
  no: string[];
  unknown: string[];
  yes: string[];
}

/* Data from iponfo.io API */
export interface IpInfoData {
  ip: string;
  hostname: string;
  city: string;
  region: string; // state
  country: string;
  loc: string; // long, lat - used in issue lookup
  org: string; // internet service provider
  postal: string; // zip code
}
