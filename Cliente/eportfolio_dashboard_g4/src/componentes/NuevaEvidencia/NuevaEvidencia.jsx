import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"
import { useState } from "react"

const NuevaEvidencia = () => {

    const [tarea, setTarea] = useState("")

    return (
        <>
            <p>Tarea Seleccionada: {tarea}</p>
            <SelectorTareaRA tarea={tarea} setTarea={setTarea}></SelectorTareaRA>
            <NuevaEvidenciaForm tarea={tarea} setTarea={setTarea}></NuevaEvidenciaForm>
        </>
    )
}

export default NuevaEvidencia