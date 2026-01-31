import { useState } from "react"


const SelectorTareaRA = (props) => {

    function seleccionarTarea() {

        props.setTarea("Tarea 1")
    }

    return (
        <>
            <h1>Selector Tarea</h1>
            <p>Tarea seleccionada: {props.tarea}</p>
            <button onClick={seleccionarTarea}>Seleccionar tarea</button>
        </>
    )
}

export default SelectorTareaRA