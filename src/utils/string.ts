import { TranslateArray } from '@/models/TranslateArray';

export const declOfNum = (number: number, words: string[]) => {
    return words.length === 2
        ? words[number > 1 ? 1 : 0]
        : words[
              number % 100 > 10 && number % 100 < 15
                  ? 2
                  : number % 10 === 1
                  ? 0
                  : number % 10 > 1 && number % 10 < 5
                  ? 1
                  : 2
          ];
};

export const getTranslateArrayElement = (
    word: string,
    translateArray: TranslateArray[],
) => {
    const matchedWord = translateArray.find((item) => item.ru === word);
    return matchedWord ? matchedWord.en : word;
};
