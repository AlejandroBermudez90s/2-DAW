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