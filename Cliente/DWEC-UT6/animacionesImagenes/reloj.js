window.onload = function () {

    let posicionX = 40;
    let posicionY = 40;
    let id;    
    let id2;

    let canvas = document.getElementById("miCanvas");
    ctx = canvas.getContext("2d");
    
    class Reloj{
        constructor(posicionX, posicionY, horas, minutos, segundos){
            this.posicionX = posicionX;
            this.posicionY = posicionY;
            this.horas = horas;
            this.minutos = minutos;
            this.segundos = segundos;
        }
    
        incrementarHoras(){
            if (this.horas === 24) {
                this.horas = 0;
            } else {
                this.horas++;
            }
        }

        incrementarMinutos(){
            if (this.minutos === 60) {
                this.minutos = 0;
                this.incrementarHoras();
            } else {
                this.minutos++;
            }
        }

        incrementarSegundos(){
            if (this.segundos === 60) {
                this.segundos = 0;
                this.incrementarMinutos();
            } else {
                this.segundos++;
            }
        }

        moverReloj(){
            this.posicionX = Math.floor(Math.random() * 400);
            this.posicionY = Math.floor(Math.random() * 300);
        }

        formatearReloj(){
            this.horas = String(this.horas).padStart(2, "0");
            this.minutos = String(this.minutos).padStart(2, "0");
            this.segundos = String(this.segundos).padStart(2, "0");

            return this.horas, this.minutos, this.segundos;
        }

        escribirReloj(){
            this.formatearReloj();
            ctx.fillText(`${this.horas}:${this.minutos}:${this.segundos}`, posicionX, posicionY);
        }
    }

    let reloj = new Reloj(posicionX, posicionY, 0, 0, 0);

    function pintarReloj() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        reloj.moverReloj();
        reloj.escribirReloj();
    }
    
    function actualizarReloj() {
        reloj.incrementarSegundos();
        if (this.segundos === 60) {
            reloj.incrementarMinutos();
        }
        if (this.minutos === 60) {
            reloj.incrementarHoras();
        }
        if (this.horas === 24) {
            reloj.incrementarHoras();
        }
    }

    id = setInterval(pintarReloj, 1000);
    id2 = setInterval(actualizarReloj, 1000);
}
