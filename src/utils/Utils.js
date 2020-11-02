///Returns TRUE if STRING's 'empty'
export const validateString = (thisString) => {
  return thisString.length === 0 || !thisString.trim();
};
