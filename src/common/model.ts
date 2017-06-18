
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
  name: string;
  phone: string;
  photoURL?: string;
  party: Party;
  state: string;
  reason: string;
  area?: string;
  fieldOffices?: FieldOffice[];
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

export interface ApiData {
  splitDistrict: boolean;
  invalidAddress: boolean;
  normalizedLocation: string | undefined;
  divisions: string[];
  issues: Issue[];
}
