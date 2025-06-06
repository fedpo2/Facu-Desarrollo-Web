/* 6. Funciones */

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

/**
 * @param {number} a - Primer valor a sumar
 * @param {number} b - Segundo valor a sumar
 * @returns {number} - Resultado de la suma
*/
function sum(a, b) {
    return a + b;
}
let c = sum(1, 2);
console.log(c);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaNcomo resultado.

/**
 * @param {number} a - Primer valor a sumar
 * @param {number} b - Segundo valor a sumar
 * @returns {number} - Resultado de la suma
 */
function sumvalidado(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        alert("Uno de los parametros no es un numero"); return NaN;
    }
    return a + b;
}
// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

/**
 * @param {number} a
 * @returns {boolean} - es numero entero o no
*/
function validateInteger(a) {
    if (typeof (a) !== "number") return false;

    return a === Math.floor(a);
}

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero(redondeado).

function sumvalidointeger(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        alert("Uno de los parametros no es un numero"); return NaN;
    }

    if (a !== Math.floor(a)) {
        alert("el numero no es entero");
        return Math.floor(a);
    }

    if (b !== Math.floor(b)) {
        alert("el numero no es entero");
        return Math.floor(b);
    }

    return a + b;
}

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function checkinteger(x) {
    if (x !== Math.floor(x)) {
        alert("el numero no es entero");
        return [false, Math.floor(x)];
    }
    return [true, null];
}

function sumvalidointeger(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        alert("Uno de los parametros no es un numero"); return NaN;
    }

    let [isValidA, fixedA] = checkinteger(a);
    if (!isValidA) return fixedA;

    let [isValidB, fixedB] = checkinteger(b);
    if (!isValidB) return fixedB;

    return a + b;
}
