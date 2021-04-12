/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let position;
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === '@') {
      position = i + 1;
      break;
    }
  }
  return email.slice(position);
}

module.exports = getEmailDomain;
