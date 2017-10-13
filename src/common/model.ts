
export interface Issue {
  id: string;
  name: string;
  reason: string;
  script: string;
  contacts?: Contact[];
  contactType?: string;
  categories: Category[];
  inactive: boolean;
  outcomeModels: Outcome[];
  link: string;
  linkTitle: string;
  slug: string;
}

export const DefaultIssue: Issue = {
  id: '',
  name: '',
  reason: '',
  script: '',
  categories: [],
  inactive: false,
  outcomeModels: [],
  link: '',
  linkTitle: '',
  slug: '',
};

export interface Outcome {
  label: string;
  status: string;
}

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

export interface VoterContact {
  id: string;
  name: string;
  city: string;
  phone: string;
}

export interface Category {
  name: string;
}

export class CategoryMap {
  category: Category;
  issues: Issue[];
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

export interface Group {
  id: string;
  name: string;
  description: string;
  totalCalls: number;
}

/**
 * Represents the place used to get location.
 * It may be one of three options:
 * 1. CACHED_ADDRESS - address stored in local storage
 * 2. BROWSER_GEOLOCATION - address obtained from the browser geolocation API
 * 3. IP_INFO - address obtained from ipinfo.io API
 */
export enum LocationFetchType {
  CACHED_ADDRESS = 'CACHED_ADDRESS', // 'address' in Choo version
  BROWSER_GEOLOCATION = 'BROWSER_GEOLOCATION', // 'browserGeolocation' in Choo version
  IP_INFO = 'IP_INFO' // 'ipAddress' in Choo version
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

export interface GroupIssues {
  splitDistrict: boolean;
  invalidAddress: boolean;
  normalizedLocation: string | undefined;
  divisions: string[];
  issues: Issue[];
}

export interface CountData {
  count: number; // total call count
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

export enum LocationUiState {
  FETCHING_LOCATION = 'FETCHING_LOCATION',
  LOCATION_FOUND = 'LOCATION_FOUND',
  ENTERING_LOCATION = 'ENTERING_LOCATION',
  LOCATION_ERROR = 'LOCATION_ERROR'
}

export interface DonationGoal {
  goal: Donations; //
}

export interface Donations {
    count: number; // number of donors
    amount: number; // total collected (api===amount)
    total: number; // goal (api===total)
    kind: string; // denomincation (dollars)
}
