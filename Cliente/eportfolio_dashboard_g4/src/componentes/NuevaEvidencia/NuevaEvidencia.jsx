import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
import { useState } from "react"
import MenuItem from '@mui/material/MenuItem';

import newEvidencia from "../../services/Evidencias/newEvidencia.js";

const NuevaEvidencia = () => {

    const [listaTareas, setListaTareas] = useState([])

    const [tareaSeleccionada, setTareaSeleccionada] = useState({
        id: 0,
        observaciones: ""
    })

    function verTareas(tarea) {
        return <MenuItem
            key={tarea.id}
            value={tarea.id}
        >
            {tarea.id} - {tarea.observaciones}
        </MenuItem>
    }

    function manejarSelector(idTarea) {
        const tareaElegida = listaTareas.find(tarea => tarea.id === idTarea)
        setTareaSeleccionada(tareaElegida)
    }

    function manejarEvidencia(evidencia) {
        newEvidencia(evidencia)
            .then((respuesta) => console.log("Evidencia insertada: ", respuesta))
            .catch((error) => console.error("ERROR: ", error));
    }

    return (
        <div className="centro">
            <h2>Nueva Evidencia</h2>
            <SelectorTareaRA listaTareas={listaTareas}
                setListaTareas={setListaTareas}
                verTareas={verTareas}
                manejarSelector={manejarSelector}
            >
            </SelectorTareaRA>
            <NuevaEvidenciaForm tareaSeleccionada={tareaSeleccionada} manejarEvidencia={manejarEvidencia}></NuevaEvidenciaForm>
        </div>
    )
}

export default NuevaEvidencia