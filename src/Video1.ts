console.log('Vídeo 1');

const title1 = 'Sumar elementos de un arreglo';
const numbers = [6, 8, 2, 4];

// JS
const sumJS = numbers.reduce((x, y) => x + y);

// TS
const sumTS: number = numbers.reduce(
  (previus: number, current: number) => previus + current
);
console.log(title1, sumJS, sumTS);
// returns 20

// #################################################

const title2 = 'Acortar condicionales';
const title3 = 'Validando asignaciones';
const title4 = 'Operador (,)';
const title5 = '(length) para recortar arreglos';
const title6 = 'Destructuring y reasignación con ([]';
const title7 = 'Ordenar arreglo aleatoriamente';
const title8 = 'Nombre de objetos dinámicos';
const title9 = 'Eliminar duplicados';
