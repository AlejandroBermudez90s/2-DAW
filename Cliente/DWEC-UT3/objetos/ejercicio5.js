let persona = {
    nombreapellido : "Alejandro",
    "apell-idos" : "Bermúdez Gorozabel",
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

console.log(persona["apell-idos"])
persona.freeze;
delete persona.nombreapellido
console.log(persona)

