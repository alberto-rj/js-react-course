export const joinString = (a, b = '') => {
  if (typeof a !== 'string') {
    throw new Error(
      `Expected the type of the 'a' parameter to be 'string'. The type '${typeof a}' was provided`
    );
  }

  if (typeof b !== 'string') {
    throw new Error(
      `Expected the type of the 'b' parameter to be 'string'. The type '${typeof b}' was provided`
    );
  }

  a = a.trim();
  b = b.trim();

  if (a !== '' && b !== '') {
    return `${a} ${b}`;
  }

  return a;
};
