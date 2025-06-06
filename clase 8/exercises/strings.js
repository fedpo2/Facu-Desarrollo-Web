/* 2. Strings */

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
/** @type {String} */
let nom = "federico polidoro".toUpperCase();

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
let strt = "0123456789";
let str3 = strt.substring(0, 5);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
/** @type {String} */
let str4 = strt.substring(strt.length-3);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
let nom2 = nom[0].toUpperCase() + nom.substring(1).toLowerCase();

//Nota se podia usar shift para sacar el primer caracter y tener el mismo resultado


// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
let nblank = nom.indexOf(' ');

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

let str5 = "desconocido ingeniero profesional";
str5 = str5.split(' ').map(x=>x[0].toUpperCase()+x.substring(1).toLowerCase()).join(' ');
