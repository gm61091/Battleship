/**
 * This is a JavaScript function that selects a random element from an array.
 * @param array - an array of elements from which a random element will be selected.
 * @returns The function `selectRandomElement` is returning a randomly selected element from the input
 * array.
 */
const selectRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export default selectRandomElement;
