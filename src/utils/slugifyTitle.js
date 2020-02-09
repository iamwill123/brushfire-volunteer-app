import slugify from 'slugify';

export const slugifyTitle = (value = '') => {
  if (typeof value !== 'string') {
    throw new Error('Requires value to be type String.');
  }
  return slugify(value, {
    replacement: '-', // replace spaces with '-'
    remove: /[,/*+~.()'"!:@]/g, // regex to remove characters
    lower: true // result in lower case
  });
};

