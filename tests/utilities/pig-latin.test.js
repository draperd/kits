import { splitIntoWords,
         translate,
         translateLeadingConsonantWord,
         translateLeadingVowelWord,
         translateWord } from "../../src/utilities/pig-latin";

test ("providing no input returns an empty array", () => {
    expect(splitIntoWords()).toEqual([]);
    expect(splitIntoWords({ text: "" })).toEqual([]);
})

test ("splitting paragraph into words", () => {
    expect(splitIntoWords({ text: "this is a test" })).toEqual(["this","is","a","test"]);
})

test ("translate leading consonant words", () => {
    expect(translateLeadingConsonantWord({ word: "pig" })).toEqual("igpay");
    expect(translateLeadingConsonantWord({ word: "banana" })).toEqual("ananabay");
    expect(translateLeadingConsonantWord({ word: "trash" })).toEqual("ashtray");
    expect(translateLeadingConsonantWord({ word: "happy" })).toEqual("appyhay");
    expect(translateLeadingConsonantWord({ word: "duck" })).toEqual("uckday");
    expect(translateLeadingConsonantWord({ word: "glove" })).toEqual("oveglay");
})

test ("translate leading vowel words", () => {
    expect(translateLeadingVowelWord({ word: "egg" })).toEqual("eggway");
    expect(translateLeadingVowelWord({ word: "inbox" })).toEqual("inboxway");
    expect(translateLeadingVowelWord({ word: "eight" })).toEqual("eightway");
})

test ("translate word", () => {
    expect(translateWord({ word: "pig" })).toEqual("igpay");
    expect(translateWord({ word: "egg" })).toEqual("eggway");
})

test ("translate text", () => {
    expect(translate({ text: "pig egg banana trash inbox" })).toEqual("igpay eggway ananabay ashtray inboxway");
    expect(translate({ text: " ! ? ^ # " })).toEqual(" ! ? ^ # ");
    expect(translate({ text: "  pig egg    banana" })).toEqual("  igpay eggway    ananabay");
})