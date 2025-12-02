/*
-------------------------------------------------------------- EJERCICIO 5 ------------------------------------------------------------------------
*/

let persona = {
    nombre : "Alejandro",
    apellidos : "Bermúdez Gorozabel",
    edad : 21,
    añosParaJubilarse() {
        let edadJubilacion = 65;
        let añosRestantes = edadJubilacion - persona.edad;
        return añosRestantes;
    },

    mensaje() {
    let frase = "Veremos a ver si no te jubilas a los 80";
    return frase;
    }
}
persona.estatura = 1.74;

console.log(persona.nombre + " tiene " + persona.edad + " años y le quedan " + persona.añosParaJubilarse() + " años para jubilarse");
console.log("Estatura de la persona: " + persona.estatura)

let prototype = Object.getPrototypeOf(persona);
console.log(prototype);

let prototype2 = Object.getPrototypeOf(prototype);
console.log(prototype2); 

console.log("Mensaje: " + persona.mensaje());

/*
-------------------------------------------------------------- EJERCICIO 6 --------------------------------------------------------------------------
*/

let persona2 = new Object();
    persona2.firstName = "John";
    persona2.lastName = "Doe";
    persona2.age = 50;

persona2.tiempoParaJubilarse = function (age) {
    let edadJubilacion = 65;
    let tiempoRestante = edadJubilacion - age;
    return tiempoRestante;
}

console.log(persona2.firstName + " tiene " + persona2.age + " años y le quedan " + persona2.tiempoParaJubilarse(persona2.age) + " años para jubilarse");

persona2.estatura2 = 2.10;
console.log("Estatura de la persona: " + persona2.estatura2)

let prototypePersona2 = Object.getPrototypeOf(persona2);
console.log(prototypePersona2);

let prototype2Persona2 = Object.getPrototypeOf(prototypePersona2);
console.log(prototype2Persona2); 

persona2.mensaje2 = function () {
    let frase2 = "Veremos a ver si no te jubilas a los 80";
    return frase2;
}

console.log("Mensaje: " + persona2.mensaje2());

/*
-------------------------------------------------------------- EJERCICIO 7 --------------------------------------------------------------------------
*/

function persona3(nombre3, apellido3, edad3) {
    this.nombre3 = nombre3;
    this.apellido3 = apellido3;
    this.edad3 = edad3;
    this.tiempoHastaJubilacion = function() {
        this.edadJubilacion = 65;
        this.tiempoQueFalta = this.edadJubilacion - this.edad3;
        return this.tiempoQueFalta;
    };
}
let hermano = new persona3("Carlos", "Duty", 4);

console.log(hermano.nombre3 + " tiene " + hermano.edad3 + " años y le quedan " + hermano.tiempoHastaJubilacion() + " años para jubilarse");

hermano.estatura3 = 1.60;
console.log("Estatura de la persona: " + hermano.estatura3);

let prototypePersona3 = Object.getPrototypeOf(persona3);
console.log(prototypePersona3);

let prototype3Persona3 = Object.getPrototypeOf(hermano);
console.log(prototype3Persona3); 

persona3.mensaje3 = function () {
    let frase3 = "Veremos a ver si no te jubilas a los 80";
    return frase3;
}

console.log("Mensaje: " + persona3.mensaje3());

/*
-------------------------------------------------------------- EJERCICIO 8 --------------------------------------------------------------------------
*/

class Persona {

    constructor(nombre4, apellido4, edad4) {
        this.nombre4 = nombre4;
        this.apellido4 = apellido4;
        this.edad4 = edad4;
    }
    calcularJubilacion() { 
        this.edadJubilacion = 65;
        this.quedanAños = this.edadJubilacion - this.edad4;
        return this.quedanAños;
    }
}

let hermana = new Persona("Andrea", "Bermúdez", 14);

console.log(hermana.nombre4 + " tiene " + hermana.edad4 + " años y le quedan " + hermana.calcularJubilacion() + " años para jubilarse");

hermana.estatura4 = 1.68;
console.log("Estatura de la persona: " + hermana.estatura4);

let prototypePersona4 = Object.getPrototypeOf(Persona);
console.log(prototypePersona3);

let prototype4Persona4 = Object.getPrototypeOf(hermana);
console.log(prototype4Persona4); 

Persona.mensaje4 = function () {
    let frase4 = "Veremos a ver si no te jubilas a los 80";
    return frase4;
}

console.log("Mensaje: " + Persona.mensaje4());

/*
-------------------------------------------------------------- EJERCICIO 9 --------------------------------------------------------------------------
*/

class Persona {
    this.nombre = nombre;
    this.edad;
    this.genero;
}

let Estudiante extends Persona = {
    años = 3;
}