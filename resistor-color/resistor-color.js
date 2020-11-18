//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const colorCode = (color) => COLORS.indexOf(color.replace(/\b\w/g, l => l.toUpperCase()));
export const colorCode = key => COLORS[key];

export const COLORS = {black: 0, brown: 1, red: 2, orange: 3, yellow: 4, 
  green: 5, blue: 6, violet: 7, grey: 8, white: 9};