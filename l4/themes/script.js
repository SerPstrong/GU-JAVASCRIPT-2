/* ToDo - Что такое Регулярное выражение, и где используется */
// learn.js
// https://learn.javascript.ru/regexp-introduction

// imask
// https://imask.js.org/

/* ToDo - Создание регулярного выражения */
// // Декларативно
// const re1 = /Nikolay/;
//
// // С помощью констурктора
// const re2 = new RegExp('Nikolay');
//
// /* -----Коментарии----- */
// // Создание с помощью конструктора позволяет создавать шаблоны динамично
// const firstSymbol = 'M';
// const re3 = new RegExp(`${firstSymbol}asha`);
// /* -------------------- */

/* ToDo - Флаги */
// // m s y
//  i - не зависимо от регистра
//  g - искать все вхождения
//  u - подддрежка юникода

// const re1 = /Nikolay/igms;
// const re2 = new RegExp('Nikolay', 'uy');

/* ToDo - Методы для работы с regexp */
// // replace
// const replacingString = 'Masha said milk';
// const result1 = replacingString.replace(/m/gi, 's');

// // match
// const result2 = replacingString.match(/m/gi, 's');
//
// // test
// const re = /m/gi;
// re.test(replacingString);

/* ToDo - примененеие в поиске */
// const inputValue = 'M';
// const list = [
//   'Nikolay',
//   'Alexandr',
//   'Michail',
//   'Vladimir'
// ];
// const resultList = list.filter((name) => {
//   return new RegExp(inputValue, 'i').test(name);
// });

/* ToDo - применение в валидации */
// // yup
// // https://www.npmjs.com/package/yup#stringminlimit-number--ref-message-string--function-schema
//
// // Форма должна иметь как минимум 1 латинский символ
// const inputValue1 = 'Nikolay';
// const inputValue2 = 'Николай';
// const pattern = /[A-z]/
// const result = pattern.test(inputValue1);
// const result2 = pattern.test(inputValue2);

/* ToDo - применение в масках */
// const inputValue = 'Вы молодцы?';
// const result = inputValue.replace(/\?/gi, '');

/* ToDo - Символьные классы */
// d, D - числа
// s, S - пробельные символы
// w, W - слово (_, числа, латинские символы)
// . - любой символ кроме новой строки (\n \r)

/* ToDo - Якоря */
// $ - конец строки
// ^ - начало строки

/* ToDo - Граница слова */
// \b

/* ToDo - Наборы и диапазоны [...] */
// [abc]
// [^abc]
// [\d\w\s]
// [a-d]
// [a-df-g]

/* ToDo - Квантификаторы */
// {n} - количество
// {n,m} - диапозон
// {n,} - последовательность

/* ToDo - Сокращения */
// + - {1,}
// ? - {0,1}
// * - {0,}

/* ToDo - Ленивый и жадный режим поиска */
// +? - {1,}
// ?? - {0,1}
// *? - {0,}

/* ToDo - Другое */
// Альтернация (или) |
// скобочные группы (in){2}

// let str = 'a "witch" and her "broom" is one';
// const re = /".+?"/gui;
//
//
// const res = str.replace(re, '*');
// const res2 = str.match(re);
// console.log(res);
// console.log(res2);











