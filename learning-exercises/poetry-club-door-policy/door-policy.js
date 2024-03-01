// @ts-check

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  const lowered = word.toLowerCase();
  const firstLetter = lowered[0].toUpperCase();
  return firstLetter + lowered.slice(1);
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  return `${frontDoorPassword(word)}, please`;
}
