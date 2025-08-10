const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Java'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Linux'],
  },
  {
    title: 'Cybersecurity',
    competency: 5,
    category: ['Cybersecurity'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['SQL'],
  },
  {
    title: 'Windows Server',
    competency: 5,
    category: ['Windows Server'],
  },
  {
    title: 'Hardware',
    competency: 5,
    category: ['Hardware'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#40494e',
  '#515dd4',
  '#98a1f5',
  '#51d4d0',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
