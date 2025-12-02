window.onload = function () {

    let canvas = document.getElementById("miCanvas");
    let ctx = canvas.getContext("2d");
    let boton = document.getElementById("iniciarReloj");

    let id;
    let id2;
    class Reloj {
        constructor(posicionX, posicionY, horas, minutos, segundos){
            this.posicionX = posicionX;
            this.posicionY = posicionY;
            this.horas = horas;
            this.minutos = minutos;
            this.segundos = segundos;
        }

        incrementarHoras(){
            this.horas++;
            if (this.horas >= 24) this.horas = 0;
        }

        incrementarMinutos(){
            this.minutos++;
            if (this.minutos >= 60) this.minutos = 0;
        }

        incrementarSegundos(){
            this.segundos++;
            if (this.segundos >= 60) {
                this.segundos = 0;
                this.incrementarMinutos();
            }
        }

        moverReloj(){
            this.posicionX = Math.floor(Math.random() * 400);
            this.posicionY = Math.floor(Math.random() * 300);
        }

        formatearReloj(){
            let h = String(this.horas).padStart(2, "0");
            let m = String(this.minutos).padStart(2, "0");
            let s = String(this.segundos).padStart(2, "0");

            return `${h}:${m}:${s}`;
        }

        escribirReloj(){
            ctx.fillText(this.formatearReloj(), this.posicionX, this.posicionY);
        }
    }

    let reloj = new Reloj(40, 40, 0, 0, 0);

    function pintarReloj() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        reloj.escribirReloj();
        reloj.moverReloj();
    }

    function actualizarReloj() {
        reloj.incrementarSegundos();
    }

    boton.onclick = function () {
        id = setInterval(pintarReloj, 1000);
        id2 = setInterval(actualizarReloj, 1000);
    }
}

