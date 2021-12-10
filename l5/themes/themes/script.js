/* ToDo - подключение */
// <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>

/* ToDo - создание экземпляра */
// const app = new Vue({
//   el: "#app" || ".app" || document.getElementById('app'),
//   data: {
//       name: 'iphone 13',
//       price: 80000,
//       inputValue: 'value',
//       flag: true,
//   }
// });

/* ToDo - связь с данными */
// `
//   декларация - <div>{{value}}</div>
//   директива - <input type="text" v-bind:value="inputValue">
//   сокращение - <input type="text" :value="inputValue">
// `


/* ToDo - проверка реактивности */
// setTimeout(() => {
//   app.name = 'new name'
// }, 1000)


/* ToDo - условие */

// `
//   <div v-if="color === 'red'">red</div>
//   <div v-else-if="color === 'blue'">blue</div>
//   <div v-else>other</div>
//
//   <div v-if="true && {x:1} && getFlag()">blue</div>
// `

/* ToDo - список */
// `
//   <ul>
//     <li v-for="item in arr">
//      {{ item }}
//    </li>
//   </ul>
//   с объектами <li v-for="(key, value) in obj">{{key}}: {{value}}</li>
//   с объектами <li v-for="(item, index) in arr">{{index}}: {{item}}</li>
// `

/* ToDo - модели */
// `
//    <input v-model.lazy="inputValue">
// `


/* ToDo - события */
// `
//    <button v-on:click="fu('test',$event)">button</button>
//    <button @click="fu">button</button>
// `

/* ToDo - компоненты */
// Vue.component('basket-button', {
//   props: ['item'],
//   template: `
//      <div>{{item}}</div>
//   `,
// });

/* ToDo - кастомные обработчики событий */
// Vue.component('basket-button', {
//   props: ['item'],
//   template: `
//      <div @click="$emit('click-item')">{{item}}</div>
//   `,
// });



