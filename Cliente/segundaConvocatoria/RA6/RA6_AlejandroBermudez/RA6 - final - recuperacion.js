// UT2 cookies

window.onload = function() { 

const NUMERONAVES = 5;
const TOPEINFERIOR = 375;
const TOPEDERECHA = 575;
const TAMAÑONAVEX = 25;
const TAMAÑONAVEY = 25;

let canvas;

let nToques = 0;			// Número de choques contra las paredes

let ctx, x, velocidad, id ;

let todasLasNaves = [];
let miNave;

	class Nave {
	
		constructor(x_,y_, sx_, sy_, velocidadX_, velocidadY_) {
			
			this.posicionX  = x_;			// posicion inicial X
			this.sentidoX   = sx_;			// sentido del desplazamiento (+ derecha), (- izquierda)
			this.posicionY  = y_;			// posición inicial Y
			this.sentidoY   = sy_;			// sentido del desplazamiento (+ abajo), (- arriba)
			this.velocidadX = velocidadX_;  // velocidad en X
			this.incX       = 0;			// Posibilidad de incremento de la velocidad en X
			this.velocidadY = velocidadY_;	// velocidad en Y
			this.incY       = 0;			// Posibilidad de incremento de la velocidad en Y
			
			this.haAcabado = false;		
		}
		
		moverY() {
			
			this.posicionY = this.posicionY + ((this.velocidadY + this.incY) * this.sentidoY);
		}
		
		moverX() {
			
			this.posicionX = this.posicionX + ((this.velocidadX + this.incX) * this.sentidoX);
		}

		chequearToqueArriba() {
		
			if (this.posicionY < 0) { 
				this.sentidoY = (this.sentidoY*-1)		
				nToques++;
			}
		}
		
		chequearToqueAbajo() {			
		
			if (this.posicionY > TOPEINFERIOR) { 
				this.sentidoY = (this.sentidoY*-1);
				nToques++;}
			}	

		chequearToqueDerecha() {
		
			if (this.posicionX > TOPEDERECHA) { 
				this.sentidoX = (this.sentidoX*-1)		
				nToques++;
			}
		}

		chequearToqueIzquierda() {
		
			if (this.posicionX < 0) { 
				this.sentidoX = (this.sentidoX*-1)		
				nToques++;
			}
		}

		pintar() {
        	ctx.fillRect(this.posicionX,
                     	 this.posicionY,
                     	 TAMAÑONAVEX,
                     	 TAMAÑONAVEY);
    	}
		
	}

	function generarCuadrado() {		
		
		x = Math.random() * TOPEDERECHA;
		
		velocidadX = 0.5 + Math.random()*2;
		velocidadY = 0.5 + Math.random()*2;
		
		miNave = new Nave(x, 0, 1, 1, velocidadX, velocidadY);
		
		todasLasNaves.push(miNave);	
	}

	function generaDatos() {
	
		for (let i=0; i<NUMERONAVES; i++) {
			
			generarCuadrado();			
		}
	}		
	
	function generaAnimación() {
		
		// aproximadamente a 24 frames por segundo (fps)
		// Limpiamos el canvas, eliminando el contenido
		// desde el punto (0, 0) al punto (600, 400)
		ctx.clearRect(0, 0, 600, 400);
		  
		for (let i=0; i<todasLasNaves.length;i++) {
			  
		    todasLasNaves[i].pintar(ctx)
			
			todasLasNaves[i].moverY(ctx);
			todasLasNaves[i].moverX(ctx);
			
			todasLasNaves[i].chequearToqueArriba();
			todasLasNaves[i].chequearToqueAbajo();
			todasLasNaves[i].chequearToqueDerecha();
			todasLasNaves[i].chequearToqueIzquierda();	
			
			pintarToques();
		}
	}	

	function pintarToques () {
		let toques = document.getElementById("toques")
		toques.innerHTML = nToques
	}
	
	let botonLanzar = document.getElementById("LanzarAnimacion")
	botonLanzar.onclick = function () {
		setInterval(generaAnimación, 1000/30);
		botonLanzar.disabled = true
	}

	let botonParar = document.getElementById("PararAnimacion")
	botonParar.onclick = function () {
		clearInterval(id);
		botonParar.disabled = true
	}
	

	// Obtenemos una referencia al canvas
	canvas = document.getElementById('miCanvas');	

	// Y a su contexto 2d
	ctx = canvas.getContext('2d');
    ctx.fillStyle = "#FF0000";

	generaDatos();
	

	id = setInterval(generaAnimación, 1000/30);	
	
}


