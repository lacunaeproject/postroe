/* State-by-state abortion access status.
   Tiers:
     banned       — total or near-total ban
     limited      — 6-12 week ban (very early)
     gestational  — 15-22 week gestational limit
     protected    — legal through viability OR no limit, shield laws
   Sources: Guttmacher, Center for Reproductive Rights, NYT abortion tracker. */

window.POSTROE_STATES = {
  AL: { name: 'Alabama', status: 'banned', law: 'Total ban with exceptions only for life of the pregnant person.', gest: '0 weeks', traveled: 4500 },
  AK: { name: 'Alaska', status: 'protected', law: 'Protected by state constitution.', gest: 'Viability', traveled: 0 },
  AZ: { name: 'Arizona', status: 'gestational', law: '15-week ban; proposition 139 expanded protections in 2024.', gest: '15 wks', traveled: 1200 },
  AR: { name: 'Arkansas', status: 'banned', law: 'Total ban; no exceptions for rape or incest.', gest: '0 weeks', traveled: 3800 },
  CA: { name: 'California', status: 'protected', law: 'Protected; right enshrined in state constitution (Prop 1, 2022).', gest: 'Viability', traveled: 0 },
  CO: { name: 'Colorado', status: 'protected', law: 'No gestational limit. Shield laws in place.', gest: 'No limit', traveled: 0 },
  CT: { name: 'Connecticut', status: 'protected', law: 'Legal through viability; robust shield laws.', gest: 'Viability', traveled: 0 },
  DE: { name: 'Delaware', status: 'protected', law: 'Protected through viability.', gest: 'Viability', traveled: 0 },
  FL: { name: 'Florida', status: 'limited', law: '6-week ban in effect since May 2024. Amendment 4 failed at 57% (needed 60%).', gest: '6 wks', traveled: 5600 },
  GA: { name: 'Georgia', status: 'limited', law: '6-week "heartbeat" ban.', gest: '6 wks', traveled: 2700 },
  HI: { name: 'Hawaii', status: 'protected', law: 'Protected; state shield laws active.', gest: 'Viability', traveled: 0 },
  ID: { name: 'Idaho', status: 'banned', law: 'Total ban; exceptions narrowly construed by state AG.', gest: '0 weeks', traveled: 2200 },
  IL: { name: 'Illinois', status: 'protected', law: 'Legal through viability. Destination for 35,470 out-of-state patients in 2024.', gest: 'Viability', traveled: 0 },
  IN: { name: 'Indiana', status: 'banned', law: 'Total ban with limited exceptions.', gest: '0 weeks', traveled: 4100 },
  IA: { name: 'Iowa', status: 'limited', law: '6-week ban in effect since July 2024.', gest: '6 wks', traveled: 1900 },
  KS: { name: 'Kansas', status: 'gestational', law: '22-week limit; voters rejected ban in 2022. 71% of KS abortions are for out-of-state residents.', gest: '22 wks', traveled: 0 },
  KY: { name: 'Kentucky', status: 'banned', law: 'Total ban with trigger law.', gest: '0 weeks', traveled: 3600 },
  LA: { name: 'Louisiana', status: 'banned', law: 'Total ban; criminalizes shield-law medication.', gest: '0 weeks', traveled: 3500 },
  ME: { name: 'Maine', status: 'protected', law: 'Protected through viability with shield laws.', gest: 'Viability', traveled: 0 },
  MD: { name: 'Maryland', status: 'protected', law: 'No limit; enshrined in state constitution in 2024.', gest: 'No limit', traveled: 0 },
  MA: { name: 'Massachusetts', status: 'protected', law: 'Protected through viability with shield laws.', gest: 'Viability', traveled: 0 },
  MI: { name: 'Michigan', status: 'protected', law: 'No limit; Proposal 3 amended constitution in 2022.', gest: 'No limit', traveled: 0 },
  MN: { name: 'Minnesota', status: 'protected', law: 'No gestational limit.', gest: 'No limit', traveled: 0 },
  MS: { name: 'Mississippi', status: 'banned', law: 'Total ban; originating state of Dobbs.', gest: '0 weeks', traveled: 2900 },
  MO: { name: 'Missouri', status: 'protected', law: 'Amendment 3 passed Nov 2024; providers resuming care in 2025.', gest: 'Viability', traveled: 0 },
  MT: { name: 'Montana', status: 'protected', law: 'Protected by 1999 Armstrong ruling; CI-128 codified in 2024.', gest: 'Viability', traveled: 0 },
  NE: { name: 'Nebraska', status: 'limited', law: '12-week ban; Initiative 434 enshrined ban in 2024.', gest: '12 wks', traveled: 1100 },
  NV: { name: 'Nevada', status: 'protected', law: 'Protected to 24 weeks by statute; constitutional amendment advancing.', gest: '24 wks', traveled: 0 },
  NH: { name: 'New Hampshire', status: 'gestational', law: '24-week gestational limit.', gest: '24 wks', traveled: 0 },
  NJ: { name: 'New Jersey', status: 'protected', law: 'No limit; codified in Freedom of Reproductive Choice Act.', gest: 'No limit', traveled: 0 },
  NM: { name: 'New Mexico', status: 'protected', law: 'No limit; 69% of NM abortions are for out-of-state residents.', gest: 'No limit', traveled: 0 },
  NY: { name: 'New York', status: 'protected', law: 'Protected through viability; Proposal 1 (Equal Rights) passed 2024.', gest: 'Viability', traveled: 0 },
  NC: { name: 'North Carolina', status: 'gestational', law: '12-week ban. 36% of NC abortions are for out-of-state residents.', gest: '12 wks', traveled: 0 },
  ND: { name: 'North Dakota', status: 'banned', law: 'Total ban; state supreme court upheld ban in 2025.', gest: '0 weeks', traveled: 650 },
  OH: { name: 'Ohio', status: 'protected', law: 'Issue 1 enshrined reproductive rights in 2023.', gest: '22 wks', traveled: 0 },
  OK: { name: 'Oklahoma', status: 'banned', law: 'Total ban with civil and criminal penalties.', gest: '0 weeks', traveled: 3700 },
  OR: { name: 'Oregon', status: 'protected', law: 'No limit; shield laws active.', gest: 'No limit', traveled: 0 },
  PA: { name: 'Pennsylvania', status: 'gestational', law: '24-week limit; access expanded post-Dobbs.', gest: '24 wks', traveled: 0 },
  RI: { name: 'Rhode Island', status: 'protected', law: 'Protected through viability.', gest: 'Viability', traveled: 0 },
  SC: { name: 'South Carolina', status: 'limited', law: '6-week ban upheld by state supreme court.', gest: '6 wks', traveled: 1300 },
  SD: { name: 'South Dakota', status: 'banned', law: 'Total ban; voters rejected Amendment G in 2024.', gest: '0 weeks', traveled: 420 },
  TN: { name: 'Tennessee', status: 'banned', law: 'Total ban; affirmative defense required for medical emergencies.', gest: '0 weeks', traveled: 3400 },
  TX: { name: 'Texas', status: 'banned', law: 'Total ban plus SB8 civil bounty. 28,000+ Texans traveled out of state in 2024.', gest: '0 weeks', traveled: 28000 },
  UT: { name: 'Utah', status: 'gestational', law: '18-week limit; trigger ban under injunction.', gest: '18 wks', traveled: 950 },
  VT: { name: 'Vermont', status: 'protected', law: 'No limit; Proposal 5 in state constitution.', gest: 'No limit', traveled: 0 },
  VA: { name: 'Virginia', status: 'gestational', law: '26-week (3rd trimester) limit; amendment campaign ongoing.', gest: '26 wks', traveled: 0 },
  WA: { name: 'Washington', status: 'protected', law: 'Protected through viability with shield laws.', gest: 'Viability', traveled: 0 },
  WV: { name: 'West Virginia', status: 'banned', law: 'Total ban effective September 2022.', gest: '0 weeks', traveled: 1200 },
  WI: { name: 'Wisconsin', status: 'gestational', law: '22-week limit. 1849 ban invalidated by state supreme court in 2025.', gest: '22 wks', traveled: 0 },
  WY: { name: 'Wyoming', status: 'banned', law: 'Total ban and medication abortion ban; in litigation.', gest: '0 weeks', traveled: 780 },
  DC: { name: 'District of Columbia', status: 'protected', law: 'No limit; safe haven for patients and providers.', gest: 'No limit', traveled: 0 }
};

/* Counts (verify against data):
   banned: AL AR ID IN KY LA MS ND OK SD TN TX WV WY = 14 total-or-near-total
   limited (6 wk): FL GA IA SC + (NE is 12w) 
   We'll count: banned=14, limited-early=4 (6wk) + NE(12wk) = treat NE as limited too. */
