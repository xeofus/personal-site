const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Java'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Linux'],
  },
  {
    title: 'Cyber Security',
    competency: 5,
    category: ['Cyber Security'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['SQL'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#40494e',
  '#515dd4',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
