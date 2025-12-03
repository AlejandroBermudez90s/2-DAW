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