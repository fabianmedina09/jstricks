console.log('Vídeo 1');

// 1. Sumar elementos de un arreglo
const numbers = [6, 8, 2, 4];

// JS
const sumJS = numbers.reduce((x, y) => x + y);
console.log(sumJS); // returns 20

// TS
const sumTS: number = numbers.reduce(
  (previus: number, current: number) => previus + current
);
console.log(sumTS); // returns 20
