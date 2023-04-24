import { TranslateArray } from '@/models/TranslateArray';

export const declOfNum = (number: number, word: string[]) => {
    return word.length === 2
        ? word[number > 1 ? 1 : 0]
        : word[
              number % 100 > 4 && number % 100 < 20
                  ? 2
                  : [2, 0, 1, 1, 1, 2][
                        number % 10 < 5 ? Math.abs(number) % 10 : 5
                    ]
          ];
};

export const getTranslateArrayElement = (
    word: string,
    translateArray: TranslateArray[],
) => {
    const matchedWord = translateArray.find((item) => item.ru === word);
    return matchedWord ? matchedWord.en : word;
};
