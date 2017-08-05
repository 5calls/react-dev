
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

/**
 * Represents the place used to get location.
 * It may be one of three options:
 * 1. CACHED_ADDRESS - address stored in local storage
 * 2. BROWSER_GEOLOCATION - address obtained from the browser geolocation API
 * 3. IP_INFO - address obtained from ipinfo.io API
 */
export enum LocationFetchType {
  CACHED_ADDRESS, // 'address' in Choo version
  BROWSER_GEOLOCATION, // 'browserGeolocation' in Choo version
  IP_INFO // 'ipAddress' in Choo version
}

/**
 * Encapsulates a location using latitude
 * and longitude. Undefined for either longitude
 * or latitude indicates that the geolocation has
 * has not been set.
 */
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
