// Aston Train interview

// // Вопрос 1:   Что будет выведено в консоль?
// // C : 2
// console.log(0 || 1 && 2 || 3);


// // Вопрос 2:   Что произойдет при исполнении этого кода?
// // D : 40 в консоле
// const obj = {
//   x: 10,
//   y: 20
// };
// const prop = Object
//   .keys(obj)
//   .reverse()
//   .join('');

// obj.xy = 30;
// obj.yx = 40;
// obj.x10y20 = 50;
// obj.y20x10 = 60;

// const result = obj[prop];
// console.log(result);


// // Вопрос 3:   Что будет выведено в консоль?
// // C : promise, promise
// async function bar() {
//   return Promis.resolve(10);
// }

// async function foo() { }

// const res1 = foo();
// const res2 = bar();

// console.log(res1, res2);


// Вопрос 4:   Каким значением css свойства display можно скрыть элемент?
// A : none


// Вопрос 5:   С помощью чего можно обработать любое динамически изменяемое количество аргументов функции?
// A : свойства arguments внутри вызванной функции


// Вопрос 6:   Что такое замыкание?
// C : это функция вместе со всеми внешними переменными, которые ей доступны


// // Вопрос 7:   Что будет выведено в консоль?
// // B : 10 раз 10
// for (i = 0; i < 10; i++) {
//   setTimeout(function f() {

//     console.log(i);
//   });
// }

// Вопрос 8:   Специфичность (вес) какого css-селектора является наибольшим?
// B : id


// Вопрос 9:   Какое значение может принимать css свойство text-transform?
// C : capitalize

// Вопрос 10:   Как активировать срабатывание обработчиков при всплытии события?
// C : Никак, это поведение по умолчанию


// Вопрос 11:   Что делает метод preventDefault?
// B : Отменяет действие события браузера


// // не засчитан --- Вопрос 12:   Что будет в консоле после исполнения кода?
// // B : "a+b+c+d+e+f"
// const s1 = ['a', 'b', 'c'];
// const s2 = ['d', 'e', 'f'];
// const result = s1.concat(s2).join('+');
// console.log(result);


// Вопрос 13:   Как работает метод bind?
// B : Привязывает контекст и возвращает новую функцию


// Вопрос 14:   Сколько потоков имеет JS?
// B : 1


// // Вопрос 15:   Что будет выведено в консоль?
// // A : 10
// function foo() { }
// foo.x = 10;
// console.log(foo.x);

// // Вопрос 16:   Что будет выведено в консоль?
// // C : 3,2,1
// setTimeout(function timeout() {
//   console.log('1');
// }, 0);
// Promise.resolve('2').then(console.log);
// console.log('3');


// // Вопрос 17:   Что будет выведено в консоль?
// // C : 4
// let obj = {
//   "0": 1,
//   0: 2
// };
// console.log(obj["0"] + obj[0]);


// Вопрос 18:   DOM - это ...
// A : объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять


// // Вопрос 19:   Что будет выведено в консоль?
// // A : 10
// var x = 10;
// function bar(funArg) {
//   var x = 30;
//   funArg();
// }
// function foo() {
//   console.log(x);
// }
// foo.x = 20;
// bar.x = 40;
// bar(foo);


// // Вопрос 20:   Что будет в консоле после исполнения кода?
// // B : [7, 4]
// const result = [5, 7, 9].slice(1);
// result.pop();
// result.push(4);
// console.log(result);


// Вопрос 21:   За что отвечает свойство overflow?
// A : управляет тем, как ведёт себя содержимое блочного элемента, если его размер превышает допустимую длину/ширину.


// // Вопрос 22:   Что будет выведено в консоль?
// // C : undefined, undefined
// var obj = {
//   a: () => {
//     console.log(this.prop);
//   },
//   prop: 1
// };
// obj.a();
// var fn = obj.a.bind(obj);
// fn();


// Вопрос 23:   Какие виды состояния есть у promise?
// A : pending, fullfiled, rejected


// Вопрос 24:   Какое будет положение у блока с id="child" внутри блока id="parent"?
// Вы выбрали : блок child будет в центре
// C : блок child будет горизонтально по центру, а вертикально в верху


// // Вопрос 25:   Что будет выведено в консоль?
// // Вы выбрали : undefined, world
// var a = "hello";
// function b() {
//   console.log(a);
//   var a = "word";
//   console.log(a);
// };
// b()


// Вопрос 26:   Какое или какие хранилища будут хранить данные даже после закрытие браузера?

// D : LocalStorage, SessionStorage
// Вы выбрали : LocalStorage, SessionStorage


// Вопрос 27:   Что делает метод stopPropagation?

// A : Прекращает дальнейшую передачу текущего события.

// Вы выбрали : Прекращает дальнейшую передачу текущего события.


// // Вопрос 28:   Что будет выведено в косноль?
// // Вы выбрали : man, undefined
// var a = "hello";
// function b() {
//   if (false) {
//     var a = "word";
//   }
//   else {
//     var b = "man";
//   }
//   console.log(b);
//   console.log(a);
// };
// b();


// // Вопрос 29:   Какой из четырех способов приведек к ожидаемому результату?
// // B : 2
// const obj = {
//   x: 10,
//   y: 20,
//   z: 30
// }

// const result = Object.values(obj);
// console.log(result);


// // Вопрос 30:   Какую из четырех строк необходимо дописать, чтобы получить желаемый результат?
// // B : 2
// const VALID_STATUSES = new Set(['SUCCESS', 'FINAL', 'DONE']);

// const people = [
//   { name: 'Max', age: 20, status: 'IN_PROGRESS' },
//   { name: 'Sam', age: 21, status: 'DONE' },
//   { name: 'Dan', age: 30, status: 'SUCCESS' }
// ]

// const peopleWithValidStatus = people
//   .filter(person => VALID_STATUSES.has(person.status))
//   .map(person => person.name)

// console.log(peopleWithValidStatus);


// Вопрос 31: Какие типы данных существуют в js (Стандарт языка ES6)

// boolean, string, number, undefined, null, symbol, object


// Вопрос 32: 1) Что выведет в консоль 'abc' === new String('abc')? 2) Будет ли ответ аналогичен, если === заменить на ==?

// false, да


// // Вопрос 33: Что произойдет во время исполнения этого кода?
// // В консоле увидим объект {x: 40}

// const a = {}
// function clear(obj) {
// obj.x = 40;
// obj = null
// }

// clear(a);
// console.log(a)


// // Вопрос 34: Что будет выведено в консоль?
// // { a: 10 }

// var a = {}
// (function b(a){
// a.a= 10;
// a = null;
// })(a);
// console.log(a);


// Вопрос 35: Что означает значение relative у свойства position?

// добавление свойств left, top, right и bottom изменяет позицию элемента и сдвигает его в ту или иную сторону от первоначального расположения


// Вопрос 36:
// .flex {
// justify-content: space-between
// display: flex;
// }


// Вопрос 37: Каким образом будут расположены элементы на странице, если ширина элемента с классом flex более 1000 пикселей?

// Будут расположены в строку с равным рассоянием между элементами


// // Вопрос 38: "Какими из перечесленных способов можно добавить"
// // 2, 3

// обработчик события на элемент:
// 1. element.click(<обработчик>)
// 2.element.onclick(<обработчик>)
// 3.element.addEventListener('click', <обработчик>)
// 4.element.subscribeToEvent('click', <обработчик>)"




// Вопрос 39: Что такое HTMLCollection?

// Объект с числовыми ключами содержащий DOM элементы и предлставляющий дополнительные методы для работы с коллекцией


// // Вопрос 40: Какая из четырех реализаций приведет к ожидаемому результату?
// // .filter(n => n > 0)
// // .map(n => n * 2)

// const numbers = [-2, 4, -1, 6, 8];

// const result = numbers
//     .filter(n => n > 0)
// 		.map(n => n * 2)

// console.log(result); // [8, 12, 16]


// // Вопрос 41: Какой из четырех способов приведек к ожидаемому результату?
// // const obj2 = Object.crete(obj1);

// const obj1 = {
// x: 10
// }

// const obj2 = Object.crete(obj1);

// console.log(obj2.x) // 10


// // Вопрос 41:
// // .reduce ((sum, meetup) => sum + meetup.members, 0);
// const meetups = [
// {name: 'JavaScript', isActive: true, numbers: 100},
// {name: 'Angular', isActive: true, numbers: 900},
// {name: 'Node', isActive: false, numbers: 600},
// {name: 'React', isActive: true, numbers: 500},
// };

// const membersOnActiveMeeups = meetups => meetups
// .filter(meetup => meetup.isActive)

// .reduce ((sum, meetup) => sum + meetup.members, 0);

// console.log(membersOnActiveMeeups(meetups)); // 1500



// Вопрос 42: Чем отличие между методами call и apply?

// call принимает аргументы целевой функции через запятую, а apply массивом


// Вопрос 43: Чему равняется контекст в момент вызова функции через оператор new?

// Пустому новому объекту


// // Вопрос 44: Что будет в консоле, после того как три раза нажмем на кнопку?
// // NaN, NaN, NaN
// class GODListener{
// constructor () {
// this.counter = 0;
// }

// handleClick () {
// this.counter += 1;
// console.log(this.counter);
// 	}
// }

// const element = document.getElementById('testBtn');
// const listener = new GODListener();

// element.addEventlistener('click', listener.handleClick);


// Вопрос 45: Что такое рекурсия?

// Вызов функцией самой себя


// Вопрос 46: Какие очереди задач есть в event loop?

// microtasks, tasks, render


// // Вопрос 47: В каком случае / случаях может произойти фриз страницы?
// // В случаях 1 и 3

// 1) Выполняется бесконечный цикл в синхронном коде


// 2) callback внутри setTimeout бесконечно вызывает setTimeout


// 3) Внутри промиса бесконечно создаются другие промисы


// В случаях 1 и 3   - Верно 
//5

function number(busStops = [[10, 0], [3, 5], [5, 8]]) {
  let sumPeople = 0;
  for (let i = 0; i < busStops.length - 1; i++) {
    sumPeople = sumPeople + busStops[i][0] - busStops[i][1];
  }
  return sumPeople;
}

console.log(number());

