/*
let gato = {
    ojos : 2,
    piernas : 4
}

let siames = Object.create(gato);
siames.color = "blanco";
siames.colorOjos = "azul";

console.log(siames.ojos);
console.log(siames.color);

console.log(siames);
console.log(Object.getPrototypeOf(siames));
console.log(Object.getPrototypeOf(gato));
*/

/*
function Empleado (nombre_, departamento_="General") {
 this.nombre = nombre_;
 this.departamento = departamento_;
}

function Director (nombre_, departamento_, informes_=[]) {
Empleado.call(this, nombre_, departamento_);
this.informes = informes_;
}

let e1 = new Empleado("luis");
console.log(e1);

let e2 = new Director("antonio", "informática", [1, 2, 3]);
console.log(e2);
*/

class Empleado6 {
    constructor (nombre, departamento="General"){
        this.nombre = nombre;
        this.departamento = departamento;
    }
}

class Director6 extends Empleado6 {
    constructor (nombre, departamento="General"){
        this.nombre = nombre;
        this.departamento = departamento;
    }
}

class Obrero6 extends Director6 {
    constructor (nombre, departamento="General"){
        super (nombre, departamento)
        this.proyectos = proyectos;
    }
}

class Ingeniero6 extends Obrero6 {
    constructor (nombre, proyectos, maquina=""){
        super(nombre, "Ingeniería", proyectos);
        this.maquina = maquina;
    }
}