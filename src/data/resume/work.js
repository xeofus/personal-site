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
    summary: 'Serving to my country',
    highlights: [
      'Aim high!',
    ],
  },
  {
    name: 'Veon',
    position: 'Senior Software Development Engineer',
    url: 'https://veon.com',
    startDate: '2013-06-01',
    endDate: '2022-09-01',
    summary: 'System Administrating and Software Development',
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
    ],
  },
];

export default work;
