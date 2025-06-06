/* 3. Arrays */

// a.Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11(utilizar console.log).
/** @type {String[]} */
let dates = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(dates[4]);
console.log(dates[10]);

// b.Ordenar el array de meses alfabéticamente y mostrarlo por consola(utilizar sort).
dates.sort();
console.log(dates);

// c.Agregar un elemento al principio y al final del array(utilizar unshift y push).
dates.unshift("Fede");
dates.push("Poli");
console.log(dates[0]);
console.log(dates[dates.length - 1]);

// d.Quitar un elemento del principio y del final del array(utilizar shift y pop).
dates.shift();
dates.pop();
console.log(dates[0]);
console.log(dates[dates.length - 1]);

// e.Invertir el orden del array(utilizar reverse).
dates.reverse();
console.log(dates);

// f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
let date2 = dates.join('-');

// g.Crear una copia del array de meses que contenga desde Mayo hasta Noviembr (utilizar slice)
dates = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const date3 = dates.slice(4,11);
console.log(date3);
