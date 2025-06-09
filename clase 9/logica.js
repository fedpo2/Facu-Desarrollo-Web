"use strict";

/** @param {FormDataEvent} event*/
function handlesubmit(event){
    event.preventDefault();

    const val = validate();
    if (val.length != 0) showerror(val); else showok();

}

/**
  * @param {String[]} val
  */
function showerror(val) {
    let s = val.map((a) => `<li>${a}</li>`).join('');

    errorlist.innerHTML = s;
    errordialog.toggleAttribute("open");
}

function showok() {
    let s = "";
    s += `<li>Nombre: ${NombreCompleto.value} </li>`;
    s += `<li>Email: ${Email.value} </li>`;
    s += `<li>Contraseña: ${Contrasena1.value} </li>`;
    s += `<li>Edad: ${Edad.value} </li>`;
    s += `<li>Telefono: ${Telefono.value} </li>`;
    s += `<li>Direccion: ${Direccion.value} </li>`;
    s += `<li>Ciudad: ${Ciudad.value} </li>`;
    s += `<li>Codigo Porstal: ${CodPost.value} </li>`;
    s += `<li>Dni: ${Dni.value} </li>`;

    oklist.innerHTML = s;
    okdialog.toggleAttribute("open");
}

function validate(){
    let str = [];
    // Nombre
    if (NombreCompleto.value.length <= 6 || !NombreCompleto.value.includes(" ")) {
        str.push("Nombre completo inválido. Debe tener más de 6 letras y al menos un espacio.");
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email.value)) {
        str.push("Email inválido.");
    }

    // Contraseña
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passRegex.test(Contrasena1.value)) {
        str.push("Contraseña inválida. Debe tener al menos 8 caracteres y contener letras y números.");
    }

    if (Contrasena1.value !== Contrasena2.value) {
        str.push("Las contraseñas no coinciden.");
    }

    // Edad
    if (isNaN(Edad.value) || Edad.value < 18) {
        str.push("Edad inválida. Debe ser un número mayor o igual a 18.");
    }

    // Teléfono
    const telRegex = /^\d{7,}$/;
    if (!telRegex.test(Telefono.value)) {
        str.push("Teléfono inválido. Debe tener al menos 7 dígitos y sin espacios ni símbolos.");
    }

    // Dirección
    const dirRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\s).{5,}$/;
    if (!dirRegex.test(Direccion.value)) {
        str.push("Dirección inválida. Debe tener al menos 5 caracteres, incluir letras, números y un espacio.");
    }

    // Ciudad
    if (Ciudad.value.length < 3) {
        str.push("Ciudad inválida. Debe tener al menos 3 caracteres.");
    }

    // Código postal
    if (CodPost.value.length < 3) {
        str.push("Código postal inválido. Debe tener al menos 3 caracteres.");
    }

    // DNI
    const dniRegex = /^\d{7,8}$/;
    if (!dniRegex.test(Dni.value)) {
        str.push("DNI inválido. Debe tener 7 u 8 dígitos.");
    }

    return str;
}

function closeDialog(s) {
    if (s == "err") {
        /**@type {HTMLElement} */
        errordialog.toggleAttribute("open");
        errorlist.innerHTML = "";

    } else if (s == "ok") {
        okdialog.toggleAttribute("open");
        oklist.innerHTML = "";
    }
}

/**
 * @param {string} s
 */

function validateErr(s) {
    switch (s) {
    case "nombre":
        if (NombreCompleto.value.length <= 6 || !NombreCompleto.value.includes(" ")) {
            errornombre.removeAttribute("hidden");
        }else {
            errornombre.setAttribute("hidden", "");
        }
        break;

    case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email.value)) {
            erroremail.removeAttribute("hidden");
        } else {
            erroremail.setAttribute("hidden", "");
        }
        break;

    case "contra1":
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passRegex.test(Contrasena1.value)) {
            errorcontra1.removeAttribute("hidden");
        } else {
            errorcontra1.setAttribute("hidden", "");
        }
        break;

    case "contra2":
        break;

    case "edad":
        break;

    case "telefono":
        break;

    case "direccion":
        break;

    case "ciudad":
        break;

    case "postal":
        break;

    case "dni":
        break;

    }

    // Contraseña
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passRegex.test(Contrasena1.value)) {
        str.push("Contraseña inválida. Debe tener al menos 8 caracteres y contener letras y números.");
    }

    if (Contrasena1.value !== Contrasena2.value) {
        str.push("Las contraseñas no coinciden.");
    }

    // Edad
    if (isNaN(Edad.value) || Edad.value < 18) {
        str.push("Edad inválida. Debe ser un número mayor o igual a 18.");
    }

    // Teléfono
    const telRegex = /^\d{7,}$/;
    if (!telRegex.test(Telefono.value)) {
        str.push("Teléfono inválido. Debe tener al menos 7 dígitos y sin espacios ni símbolos.");
    }

    // Dirección
    const dirRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\s).{5,}$/;
    if (!dirRegex.test(Direccion.value)) {
        str.push("Dirección inválida. Debe tener al menos 5 caracteres, incluir letras, números y un espacio.");
    }

    // Ciudad
    if (Ciudad.value.length < 3) {
        str.push("Ciudad inválida. Debe tener al menos 3 caracteres.");
    }

    // Código postal
    if (CodPost.value.length < 3) {
        str.push("Código postal inválido. Debe tener al menos 3 caracteres.");
    }

    // DNI
    const dniRegex = /^\d{7,8}$/;
    if (!dniRegex.test(Dni.value)) {
        str.push("DNI inválido. Debe tener 7 u 8 dígitos.");
    }

    return str;
}
