import React from 'react';
import {useState} from 'react';

function ContadorColores() {
    
    const botonera = [
                        {texto : 'LeftUp', valor: 0},
                        {texto: 'LeftDown', valor: 0},
                        {texto: 'RightUp', valor: 0},
                        {texto: 'RightDown', valor: 0}
                    ];

    // Funcion para aumentar los contadores
    function incrementarContadorLu() {
        
    }
    function incrementarContadorLd() {}
    function incrementarContadorRu() {}
    function incrementarContadorRd() {}

    // Funcion para ver si son pares o impares y poner de color
    function parImpar() {
        
    }

    // Funcion para comprobar si el numero de pulsaciones es primo

    function esPrimo() {}

    return (
        <div>
        <h2>Contador de Colores</h2>
        <button>LeftUp</button>
        <button>LeftDown</button>
        <br/>
        <button>RightUp</button>
        <button>RightDown</button>
        </div>
    );
}

export default ContadorColores;