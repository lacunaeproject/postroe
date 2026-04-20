/* Data is conservative, sourced, and current as of publication.
   Primary sources:
   - Guttmacher Institute (state bans, travel, provision counts)
   - Society of Family Planning #WeCount
   - KFF Women's Health Policy
   - Gender Equity Policy Institute (maternal mortality)
   - Center for Reproductive Rights (myth-busting)
*/

window.POSTROE_DATA = {
  // ISO date of Dobbs decision — used to calculate days counter
  dobbsDate: '2022-06-24',

  // Headline stats (hero strip)
  stats: [
    { label: 'States with total bans', value: 14, suffix: '', color: 'their',
      desc: 'Near-total abortion bans with extremely narrow exceptions.',
      source: { name: 'Guttmacher Institute', url: 'https://www.guttmacher.org/state-policy/explore/state-policies-abortion-bans' } },
    { label: 'States with gestational limits', value: 13, suffix: '', color: 'truth',
      desc: 'Bans from 6 weeks to viability — many before people know they are pregnant.',
      source: { name: 'Guttmacher', url: 'https://www.guttmacher.org/state-policy/explore/state-policies-abortion-bans' } },
    { label: 'Patients who crossed state lines, 2024', value: 155000, suffix: '', color: 'our', format: 'number',
      desc: '15% of all US abortion patients traveled out of state for care.',
      source: { name: 'Guttmacher', url: 'https://www.guttmacher.org/news-release/2025/guttmacher-institute-releases-full-year-us-abortion-data-2024' } },
    { label: 'Women & girls living under a ban', value: 62700000, suffix: '', color: 'we', format: 'compactM',
      desc: '62.7 million — roughly 1 in 3 American women of reproductive age or older.',
      source: { name: 'GEPI', url: 'https://thegepi.org/maternal-mortality-abortion-bans/' } }
  ],

  // Maternal mortality comparison (per 100,000 live births, 2023, GEPI)
  mortality: [
    { group: 'Ban states — all mothers', value: 28.8, color: 'their', note: '14 states with total or early bans' },
    { group: 'Supportive states — all mothers', value: 19.8, color: 'sage', note: '24 states with protected access' },
    { group: 'Black mothers in ban states', value: 62.6, color: 'their', note: '3.3× the rate of White mothers in same states' },
    { group: 'Black mothers in supportive states', value: 33.5, color: 'sage', note: 'Still too high, but markedly lower' }
  ],

  // Top travel destinations 2024 (Guttmacher)
  travel: [
    { from: 'Illinois', patients: 35470, share: '39% of IL abortions' },
    { from: 'North Carolina', patients: 16700, share: '36%' },
    { from: 'Kansas', patients: 16100, share: '71%' },
    { from: 'New Mexico', patients: 12800, share: '69%' },
    { from: 'Virginia', patients: 8200, share: '~20%' },
    { from: 'Colorado', patients: 6100, share: '~26%' }
  ],

  travelStats: [
    { label: '2024 out-of-state patients', value: 155000, color: 'we' },
    { label: 'Abortions via online-only clinics', value: '14%', color: 'truth' },
    { label: 'Shield-law meds/month (Jun 2025)', value: 14770, color: 'our' }
  ],

  // Lies vs. Truths (top misinformation, per ACLU / Center for Reproductive Rights / ACOG)
  lies: [
    {
      lie: 'Abortion is dangerous.',
      truth: 'Pregnancy is roughly 14 times more likely to kill you than a legal abortion. First-trimester abortion has a complication rate under 0.05%.',
      source: { name: 'ACLU / NASEM', url: 'https://www.acluofnorthcarolina.org/news/know-your-facts-common-abortion-myths-watch-out-0/' }
    },
    {
      lie: 'Women regret their abortions.',
      truth: 'Over 95% of women surveyed five years later say it was the right decision. The Turnaway Study found denial — not access — caused the greatest harm.',
      source: { name: 'Center for Reproductive Rights', url: 'https://reproductiverights.org/resources/bust-myths-about-abortion/' }
    },
    {
      lie: 'Medication abortion can be reversed.',
      truth: 'There is no credible evidence. The claim is promoted by anti-abortion groups and rejected by ACOG and the AMA.',
      source: { name: 'ACOG', url: 'https://www.acog.org/advocacy/facts-are-important/medication-abortion-reversal-is-not-supported-by-science' }
    },
    {
      lie: 'Abortion causes breast cancer or infertility.',
      truth: 'A 1.5-million-participant study published in the New England Journal of Medicine found no link. AMA and American Cancer Society agree.',
      source: { name: 'AMA', url: 'https://www.ama-assn.org/' }
    },
    {
      lie: 'Late-term abortions are common and casual.',
      truth: 'Fewer than 1% occur after 21 weeks, and those are overwhelmingly for medical necessity. Most states that permit them require them.',
      source: { name: 'CDC / Guttmacher', url: 'https://www.guttmacher.org/' }
    },
    {
      lie: '6-week bans still protect "most" pregnancies.',
      truth: 'Pregnancy is counted from the last menstrual period. At six weeks, most people are only 2 weeks past a missed period — and many do not yet know.',
      source: { name: 'ACOG', url: 'https://www.acog.org/' }
    }
  ],

  // Recent legislation pulse
  legislation: [
    { date: 'Apr 16', threat: 'high', title: 'Louisiana expands criminal liability for mailing pills', body: 'HB 1188 would expand fetal personhood language into the criminal code.' },
    { date: 'Apr 14', threat: 'high', title: 'Texas AG subpoenas out-of-state shield-law providers', body: 'Filings target NY-licensed physicians prescribing telehealth medication abortion.' },
    { date: 'Apr 11', threat: 'med', title: 'Florida ballot initiative poll: 58% support', body: 'Below the 60% supermajority Florida requires to amend the state constitution.' },
    { date: 'Apr 09', threat: 'win', title: 'Missouri court strikes down TRAP regulations', body: 'Judge rules licensing rules unconstitutional under voter-approved Amendment 3.' },
    { date: 'Apr 05', threat: 'high', title: 'South Carolina bill redefines "abortion" to include IVF discards', body: 'S. 323 would criminalize routine fertility-clinic procedures.' },
    { date: 'Apr 02', threat: 'med', title: 'Federal personhood bill reintroduced in House', body: 'Sanctity of Human Life Act gains 126 co-sponsors, mostly from trifecta states.' },
    { date: 'Mar 28', threat: 'win', title: 'Wisconsin Supreme Court affirms 1849 ban is unenforceable', body: 'Closes years of legal ambiguity; abortion legal up to 22 weeks.' },
    { date: 'Mar 24', threat: 'low', title: 'Virginia constitutional amendment clears first reading', body: 'Must pass next legislature and voter referendum — two-year path.' }
  ],

  // Patient stories (composite anonymized vignettes from post-Dobbs reporting)
  stories: [
    {
      quote: 'They told me my baby had no skull. I had to fly to New Mexico with my husband to end a pregnancy we wanted.',
      meta: 'Texas · 22 weeks · fetal anomaly'
    },
    {
      quote: 'I waited in the ER for eleven hours, bleeding, while doctors called a lawyer to find out if they were allowed to help me.',
      meta: 'Georgia · incomplete miscarriage · 2024'
    },
    {
      quote: 'I drove nineteen hours. I paid for gas with the money I was saving for my daughter\'s school clothes.',
      meta: 'Louisiana → Illinois · 9 weeks'
    },
    {
      quote: 'My sister in California sent me pills in an envelope marked "vitamins." It is the only reason I am still here.',
      meta: 'Oklahoma · shield-law telehealth · 2025'
    },
    {
      quote: 'We found out about the diagnosis on a Monday. By Thursday we had flown across four states. It cost us $8,000 we did not have.',
      meta: 'Mississippi → Maryland · trisomy 18'
    }
  ]
};
