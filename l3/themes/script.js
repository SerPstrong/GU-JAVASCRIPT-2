/* ToDo HTTP */

/* ToDo AJAX */

/* ToDo REST и методы запроса */

/* ToDo JSON and XML */

/* ToDo  fetch */
/*
fetch('https://run.mocky.io/v3/6df44b51-afd5-4d65-923c-694ed8aecdb5', {
  method: 'GET',
  headers: {
    "Content-type": "Application/json"
  },
  body: 'test'
}).then((data) => data.json()).then((list) => {

})
*/

/* ToDo  XMLHttpRequest */
// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://run.mocky.io/v3/6df44b51-afd5-4d65-923c-694ed8aecdb5' ,true)
// xhr.onload = (event) => {
//   console.log(JSON.parse(event.target.response));
// }

// xhr.send();

/* ToDo Обработка асинхронных действий */

// 1) callback
// let itemList = null;
// const server = {
//   getItemList: (callback) => {
//     setTimeout(() => {
//       callback([
//         {
//           id: 1,
//           name: 'Kolya'
//         },
//         {
//           id: 2,
//           name: 'Sasha'
//         }
//       ])
//     }, 3000);
//   }
// }
//
// server.getItemList((_itemList) => {
//   itemList = _itemList;
// });

// 2) promises
// console.log('begin');
// const promise = new Promise((resolve, rejected) => {
//   console.log('in promise')
//   setTimeout(() => {
//     resolve('bigmak')
//   }, 2000)
//
// });
//
//
// promise.then((hamburger) => {
//   console.log(hamburger);
// });
//
// promise.catch((money) => {
//   console.log(money)
// });
//
// console.log('last');

/* ToDo - Event loop (Цикл событий) */
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('promise');
// })
//
// console.log('global');

