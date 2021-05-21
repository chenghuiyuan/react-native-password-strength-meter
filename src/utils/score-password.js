/* eslint radix: ["error", "as-needed"] */
import limitValue from './limit-value';
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_REQUIRE_LOWERCASE = true;
const PASSWORD_REQUIRE_UPPERCASE = true;
const PASSWORD_REQUIRE_NUMBER = true;
const PASSWORD_REQUIRE_SYMBOL = true;

function scorePassword(pass, minLength, limit, variations = {}) {

  let hasPassedAll = true;
  let score = 0;
  let variationCount = 0;
  const letters = {};

  const characterTests = [
    {
      condition: 'At least 1 lowercase',
      regexp: /[a-z]+/,
      isRequired: PASSWORD_REQUIRE_LOWERCASE,
    },
    {
      condition: 'At least 1 uppercase',
      regexp: /[A-Z]+/,
      isRequired: PASSWORD_REQUIRE_UPPERCASE,
    },
    {
      condition: 'At least 1 number',
      regexp: /[0-9]+/,
      isRequired: PASSWORD_REQUIRE_NUMBER,
    },
    {
      condition: 'At least 1 symbol',
      regexp: /[!@#\$%\^&\*\.\(\)\_\-]+/,
      isRequired: PASSWORD_REQUIRE_SYMBOL,
    },
  ];


  characterTests.forEach((test) => {
    if (test.isRequired) {
      if (test.regexp.test(pass)) {
        // Passed this condition
      } else {
        // Failed
        hasPassedAll = false;
      }
    }
  });

  
  
  if (!hasPassedAll || pass.length < PASSWORD_MIN_LENGTH) return score /2;
  else if (!pass || pass.length < minLength) { return score;}

  /* Score unique letters until 5 repetitions */
  for (let i = 0; i < pass.length; i += 1) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }

  /* Score character variation */
  Object.keys(variations).forEach((variation) => {
    const variationCheck = variations[variation].test(pass);
    variationCount += variationCheck === true ? 1 : 0;
  });
  score += (variationCount - 1) * 10;

  return limitValue(score, 0, limit);
}

export default scorePassword;
