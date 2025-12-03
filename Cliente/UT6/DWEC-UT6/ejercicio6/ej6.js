window.onload = function () {

    let canvas = document.getElementById("miCanvas");
    let ctx = canvas.getContext("2d");

    let numObj = document.getElementById("numObj");
    let velX = document.getElementById("velX");
    let tipo = document.getElementById("tipo");
    let btnLanzar = document.getElementById("lanzar");
    let btnParar = document.getElementById("parar");

    let objetos = [];
    let idAnimacion = null;

    class Obj {
        constructor(tipo) {
            this.x = -30;                  // Aparecen fuera por la izquierda
            this.y = Math.random() * 250;    // Altura aleatoria
            this.tipo = tipo;
            this.vel = Number(velX.value);
            this.size = 20;

            this.img = new Image();
            this.img.src = "https://cdn-icons-png.flaticon.com/512/32/32355.png";
        }

        mover() {
            this.x += this.vel;   // Siempre hacia la DERECHA
        }

        dibujar() {
            ctx.beginPath();

            if (this.tipo == "cuadrado") {
                ctx.fillStyle = "red";
                ctx.fillRect(this.x, this.y, this.size, this.size);

            } else if (this.tipo == "circulo") {
                ctx.arc(this.x + 10, this.y + 10, 10, 0, 2 * Math.PI);
                ctx.stroke();

            } else {
                ctx.drawImage(this.img, this.x, this.y, 25, 25);
            }
        }

        estaFuera() {
            return this.x > canvas.width + 30;
        }
    }

    function crearObjetos() {
        objetos = [];
        for (let i = 0; i < numObj.value; i++) {
            objetos.push(new Obj(tipo.value));
        }
    }

    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        objetos.forEach(o => {
            o.vel = Number(velX.value);
            o.mover();
            o.dibujar();
        });

        // Eliminar los que salen
        objetos = objetos.filter(o => !o.estaFuera());

        idAnimacion = requestAnimationFrame(animar);
    }

    btnLanzar.onclick = function () {
        crearObjetos();
        tipo.disabled = true;
        btnLanzar.disabled = true;
        btnParar.disabled = false;

        animar();
    }

    btnParar.onclick = function () {
        cancelAnimationFrame(idAnimacion);
        btnParar.disabled = true;
        tipo.disabled = false;
        btnLanzar.disabled = false;
    }

    numObj.onchange = function () {
        let cantidad = numObj.value;

        // Añadir nuevos si faltan
        while (objetos.length < cantidad) {
            objetos.push(new Obj(tipo.value));
        }

        // Quitar si sobran
        if (objetos.length > cantidad) {
            objetos.length = cantidad;
        }
    }

}
