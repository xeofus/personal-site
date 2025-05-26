/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'US Air Force',
    position: 'Airman',
    url: 'https://airforce.com',
    startDate: '2023-01-23',
    summary: 'Volunteered to enlist in the armed forces as a gesture of profound respect\n'
      + 'and dedication to serving the United States, embodying a strong sense of\n'
      + 'patriotism and commitment to upholding the nation\'s values and security.',
    highlights: [
      'Active DoD Secret Clearance',
      'Cyber Security',
      'Information Security',
    ],
  },
  {
    name: 'Veon',
    position: 'Senior Software Development Engineer',
    url: 'https://veon.com',
    startDate: '2019-03-01',
    endDate: '2022-09-01',
    summary: 'Directed, guided and grew a team of over 12 software engineers,\n'
      + 'spearheading the successful delivery of four enterprise-level software solutions\n'
      + 'within an three-year span',
    highlights: [
      'Linux',
      'Java',
      'SQL',
    ],
  },
  {
    name: 'Veon',
    position: 'Software Engineer',
    url: 'https://veon.com',
    startDate: '2017-06-01',
    endDate: '2019-03-01',
    summary: 'Designed and developed a comprehensive banking application featuring\n'
      + 'over 1000 integrations, including industry leaders Visa and MasterCard. This\n'
      + 'platform enables secure transactions for over 1,000,000 users while optimizing\n'
      + 'payment processing through seamless integration with fintech APIs',
    highlights: [
      'Linux',
      'Java',
      'SQL',
    ],
  },
  {
    name: 'Veon',
    position: 'Senior System Administrator',
    url: 'https://veon.com',
    startDate: '2013-06-01',
    endDate: '2017-06-01',
    summary: 'Implemented the virtualization of over 500 x86 HP Gen 7 rack servers onto an\n'
      + 'HP Blade Server-based VMware virtual farm, resulting in a 30% enhancement\n'
      + 'in resource utilization and substantial operational cost reductions',
    highlights: [
      'Linux',
      'VMware',
      'Hardware',
    ],
  },
];

export default work;
