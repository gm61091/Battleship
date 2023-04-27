/**
 * This is a JavaScript function that capitalizes the first letter of a given string.
 * @param string - A string value that represents a name or a word that needs to be capitalized.
 */
const capitalizeName = (string) => string[0].toUpperCase() + string.slice(1);

export default capitalizeName;
