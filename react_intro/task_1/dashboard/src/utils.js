export const getCurrentYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School main dashboard' : 'Holberton School';
