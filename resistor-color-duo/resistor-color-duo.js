// export const decodedValue = ([a, b]) => Number(`${COLORS.indexOf(a)}${COLORS.indexOf(b)}`);
export const decodedValue = ([a, b]) => (COLORS.indexOf(a)*10) + (COLORS.indexOf(b));

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 
  'green', 'blue', 'violet', 'grey', 'white'];