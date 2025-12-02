window.onload = function () {

    let objeto = {
        x: 0, // posición inicial x del objeto
        y: 0, // posición inicial y del objeto
        tamX: 15, // Tamaño X del objeto
        tamY: 15, // Tamaño Y del objeto
        color: "#FF0000",
        velocidadX : 5,
        velocidadY : 5 
    }

    objeto.mover = function(){
        // incrementamos la posición para la siguiente ejecución
        this.x += this.velocidadX;
        this.y += this.velocidadY;
    }

    objeto.moverAtrás = function(){
        this.x -= this.velocidadX;
        this.y -= this.velocidadY;
    }
    
    objeto.pintar = function(){
        // establecemos el color del rectángulo
        ctx.fillStyle = this.color;

        // pintamos el rectángulo
        ctx.fillRect(this.x,
                     this.y,
                     this.tamX,
                     this.tamY);
    }

    let canvas; // variable que referencia al canvas del html
    let ctx; // contexto de trabajo
    let id; // id de la animación

    objeto.comprobarPosicion = function(){
        let estaEnLimite = false;
        if (this.x == (canvas.width - this.tamX)) {
            estaEnLimite = true;
        }
        else{
            estaEnLimite = false;
        }
        return estaEnLimite;
    }

    function pintaObjeto() {
        let comprobante = objeto.comprobarPosicion();

        if (!comprobante) {
            ctx.fillStyle = objeto.color;
            // borramos el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            objeto.pintar();
            objeto.mover();
        }
        else if (comprobante) {
            ctx.fillStyle = objeto.color;
            // borramos el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            objeto.pintar();
            objeto.moverAtrás();
        }
    
    }

    // localizamos el canvas
    canvas = document.getElementById("miCanvas");
    // Generamos el contexto de trabajo
    ctx = canvas.getContext("2d");
    // Lanzamos la animación
    id = setInterval(pintaObjeto, 24);

}
