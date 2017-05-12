
/**
 * Splits the supplied text into an array of individual words.
 * 
 * @function
 * @param {object} input
 * @param {string} [input.text=""] The text to split into individual words
 * @return {string[]}              An array of the words in the input
 */
function splitIntoWords({ text = "" } = {}) {
    if (!text)
    {
        return []
    }
    else
    {
        return text.split(" ");
    }
}

/**
 * The regular expression used to match words that begin with consonents
 * 
 * @static
 * @type {string}
 */
const leadingConsonantRegEx = /^([bcdfghjklmnpqrstvwxyz]+)(.*)/gi;

/**
 * The regular expression used to test if a word starts with a consonant
 * 
 * @static
 * @type {string}
 */
const leadingVowelRegEx = /^([aeiou]+)(.*)/gi;

/**
 * Translates a word beginning with a consonent into "Pig Latin"
 * 
 * @function
 * @param {object} input
 * @param {string} [input.word = ""] The word to be translated
 */
function translateLeadingConsonantWord({ word = "" } = {}) {
    return word.replace(leadingConsonantRegEx, "$2$1ay");
}

/**
 * Translates a word beginning with a vowel into "Pig Latin"
 * 
 * @function
 * @param {object} input
 * @param {string} [input.word = ""] The word to be translated
 */
function translateLeadingVowelWord({ word = "" } = {}) {
    return word + "way";
}

/**
 * Attempts to translate the supplied word against a set of known "Pig Latin" rules. If a
 * rule is not matched then the supplied word is returned otherwise a translation if returned.
 * 
 * @function
 * @param {object} input
 * @param {string} [input.word = ""] The word to be translated
 * @return {string}                  The translated word
 */
function translateWord({ word = "" } = {}) {
    if (leadingVowelRegEx.test(word))
    {
        return translateLeadingVowelWord({word});
    }
    else if (leadingConsonantRegEx.test(word))
    {
        return translateLeadingConsonantWord({word})
    }
    else
    {
        return word;
    }
}

/**
 * Translates the supplied text into "Pig Latin"
 * 
 * @function
 * @param {object} input
 * @param {string} [input.word = ""] The word to be translated
 * @return {string}                  The translated word
 */
function translate({ text = "" } = {}) {
    return splitIntoWords({ text }).reduce((translation, word) => {
        return translation += translateWord({ word }) + " "
    }, "").slice(0, -1);
}

export { splitIntoWords,
         translate,
         translateLeadingConsonantWord,
         translateLeadingVowelWord,
         translateWord };