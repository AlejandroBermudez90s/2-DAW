import { useState, useEffect } from "react";
import React from "react";
// Dejar comentado en el main.jsx el stricmode para que no se duplique el setInterval


function Reloj() {

    // Estado que guarda horas, minutos y segundos
    const [tiempo, setTiempo] = useState({
        horas: 23,
        minutos: 59,
        segundos: 58
    });

    // Función que se ejecuta cada segundo
    function tick() {
        setTiempo((prev) => {
            let { horas, minutos, segundos } = prev;

            segundos++;

            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }

            if (minutos === 60) {
                minutos = 0;
                horas++;
            }

            if (horas === 24) {
                horas = 0;
            }

            return { horas, minutos, segundos };
        });
    }

    // useEffect para lanzar el intervalo
    useEffect(() => {
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    // Formateo a 00:00:00
    const formato = (num) => num.toString().padStart(2, "0");

    return (
        <h2>
            {formato(tiempo.horas)}:
            {formato(tiempo.minutos)}:
            {formato(tiempo.segundos)}
        </h2>
    );
}

export default Reloj;