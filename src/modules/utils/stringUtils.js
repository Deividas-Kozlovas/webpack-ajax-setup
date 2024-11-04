/**
 * Removes all but one of each duplicate string in an array.
 * @param {Array<string>} arr - The array of strings to process.
 * @returns {Array<string>} - A new array containing only unique strings.
 */
function removeAllButOneDuplicateStrings(arr) {
  const uniqueLocations = [];
  arr.forEach((item) => {
    if (uniqueLocations.indexOf(item) === -1) {
      uniqueLocations.push(item);
    }
  });
  return uniqueLocations;
}

export { removeAllButOneDuplicateStrings };
