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
    position: 'Maintenance',
    url: 'https://airforce.com',
    startDate: '2023-02-07',
    summary:
        '• Conducted engineering troubleshooting methods to maintain mission-critical assets supporting USAF operations.'
        + '• Completed inspections on 1.2K safety items, directly impacting asset reliability during the \'24 Validation Exercise.\n'
        + '• Applied and executed data-driven off-hours maintenance schedules, reducing downtime and improving fleet reliability.',
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
    summary:
        '• Directed a team of over 12 software engineers, fostering a collaborative environment to enhance productivity.'
        + '• Implemented agile methodologies, resulting in a 30% increase in on-time delivery of Web Services.'
        + '• Collaborated with cross-functional teams at VEON to drive innovation in fintech solutions.',
    highlights: [
      'Linux',
      'Java',
      'SQL',
      'Windows Server',
    ],
  },
  {
    name: 'Veon',
    position: 'Software Engineer',
    url: 'https://veon.com',
    startDate: '2017-06-01',
    endDate: '2019-02-01',
    summary:
        '• Architected a resilient e-wallet application, processing over 500,000 transactions monthly.'
        + '• Ensured secure payment processing with a 99.9% uptime rate through advanced crypto protocols.'
        + '• Continuously refined system performance, enhancing user experience and reliability.',
    highlights: [
      'Linux',
      'Java',
      'SQL',
    ],
  },
  {
    name: 'Veon',
    position: 'Software Systems Engineer',
    url: 'https://veon.com',
    startDate: '2013-06-01',
    endDate: '2017-05-01',
    summary:
        '• Virtualization of over 500 x86 HP Gen 7 rack servers onto an HP Blade Server-based VMware virtual farm.'
        + '• Achieved a 30% increase in resource utilization, significantly enhancing operational efficiency.'
        + '• Designed user support system (Remedy based ITSM), resulting in a 25% increase in Incident Response efficiency.',
    highlights: [
      'Linux',
      'Windows Server',
      'Virtualization',
      'Hardware',
    ],
  },
];

export default work;
