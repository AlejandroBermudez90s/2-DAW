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