window.onload = function () {

    let objeto = {
        x: 0,
        y: 0,
        tamX: 40,
        tamY: 40,
        velocidadX: 5,
        velocidadY: 5,
        imagen : new Image(),
        animacion : [ [6,3],
                      [92,3],
                      [178,3],
                      [264,3]
                    ]
    }

    objeto.imagen.src = "spritePelota.png";

    objeto.mover = function(){
        this.x += this.velocidadX;
        this.y += this.velocidadY;
    }
    
    objeto.pintar = function(){
        ctx.drawImage(objeto.imagen,
                      objeto.animacion[posicion][0],
                      objeto.animacion[posicion][1],
                      80,
                      80,                
                      objeto.x,
                      objeto.y,
                      objeto.tamX,
                      objeto.tamY
                     )
    }
             
    let canvas;
    let ctx;
    let id;
    let posicion = 0; 

    objeto.comprobarPosicion = function(){
        if (this.x + this.tamX >= canvas.width && this.y + this.tamY >= canvas.height) {
            this.velocidadX = -Math.abs(this.velocidadX);
            this.velocidadY = -Math.abs(this.velocidadY);
        }
        if (this.x <= 0 && this.y <= 0) {
            this.velocidadX = Math.abs(this.velocidadX);
            this.velocidadY = Math.abs(this.velocidadY);
        }
    }

    function cambiarPosicion(){
        posicion = (posicion + 1) % objeto.animacion.length;
    }

    function pintaObjeto() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        objeto.pintar();
        objeto.mover();
        objeto.comprobarPosicion();
        cambiarPosicion();
    }

    canvas = document.getElementById("miCanvas");
    ctx = canvas.getContext("2d");
    id = setInterval(pintaObjeto, 24);
}
