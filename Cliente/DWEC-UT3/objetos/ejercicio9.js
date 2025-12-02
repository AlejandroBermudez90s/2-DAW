class Persona {
    constructor(nombre,  edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

class Estudiante extends Persona {
    constructor(nombre,  edad, genero, curso, grupo){
        super(nombre,  edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
}

class Profesor extends Persona {
    constructor(nombre,  edad, genero, asignatura, nivel){
        super(nombre,  edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
}

const estudiante = new Estudiante("Alejandro", 21, "Masculino", "2º", "DAW");
const profesor = new Profesor("Victor", 30, "Masculino", "DWEC", "2º");

Persona.prototype.obtenerDetalles = function(){
    return (this.nombre + " tiene " + this.edad + " años");
}

Estudiante.prototype.obtenerTipo = function(){
    console.log((Persona.prototype.obtenerDetalles.call(this)) + " y es estudiante");
}

Profesor.prototype.obtenerTipo = function(){
    console.log((Persona.prototype.obtenerDetalles.call(this)) + " y es profesor");
}

estudiante.obtenerTipo();
profesor.obtenerTipo();