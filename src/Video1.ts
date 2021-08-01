console.log('Vídeo 1');

const title1 = 'Sumar elementos de un arreglo';
const number = [6, 8, 2, 4];

// JS
const sumJS = number.reduce((x, y) => x + y);

// TS
const sumTS: number = number.reduce((prev: number, pos: number) => prev + pos);
console.log(title1, sumJS, sumTS);

// ######################################################

const title2: string = 'Acortar condicionales';
const excecuteLogic = (): void => {
  console.log(title2, 'ACTIVE');
};

const active: boolean = true;
// if (active) excecuteLogic();
active && excecuteLogic();

// ######################################################

const title3 = 'Validación asignaciones';
let toValidate: any = undefined;
let number3: number = 0;

// if (toValidate) {
//   number3 = toValidate;
// }
number3 = toValidate || 6;
console.log(title3, number3);

// ######################################################
const title4 = 'Operador (,)';

let x: number = 1;
x = (x++, x++, x + 3);
console.log(title4, x);

// ######################################################
const title5 = '(length) para recortar arreglos';
const array = [2, 3, 4, 5, 6];

// console.log(array.length)
array.length = 4;
// console.log(array)
array.length = 1;
console.log(title5, array);

// ######################################################

const title6 = 'Destructuring y reasignación con ([])';
let a: number = 5,
  b: number = 1;
[a, b] = [b, a];
console.log(title6, a, b);

// ######################################################
const title7 = 'Ordenar arreglo aleatoriamente';

const bingo = [1, 2, 3, 4, 5, 6, 7];
const sort = bingo.sort(() => {
  const x = 1;
  return Math.random() - x;
});
console.log(title7, sort);

// ######################################################

const title8 = 'Nombre de objetos dinámicos objetos';
const dynamic = 'green';

const objColors = {
  brand: 'FC',
  [dynamic]: true,
  red: false
};
console.log(title8, objColors);

// ######################################################
const title9 = 'Eliminar duplicados de listas';
const arrayDup = [1, 2, 3, 3, 3, 5, 6, 9, 9];

// Spread Operator
const unique = [...new Set(arrayDup)];
console.log(title9, unique);
