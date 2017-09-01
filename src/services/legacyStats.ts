import { UserContactEvent, UserStatsState } from '../redux/userStats';

export interface LegacyUserStatsState {
  all: UserContactEvent[];
  unavailable: number;
  voicemail: number;
  contact: number;
}

export const transform = (legacyStats: LegacyUserStatsState): UserStatsState => {
  let userStats: UserStatsState = {
    all: legacyStats.all.map(i => {
      return {
        contactid: i.contactid,
        issueid: i.issueid,
        result: i.result,
        time: i.time,
      };
    }),
    unavailable: legacyStats.unavailable,
    voicemail: legacyStats.voicemail,
    contact: legacyStats.contact,
  };

  return userStats;
};