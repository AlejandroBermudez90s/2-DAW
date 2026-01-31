import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import tareasRA from "../../mocks/mock-tareasRA"
import "./Evidencias.css"
import { useState } from 'react';

const SelectorTareaRA = (props) => {

    const [observaciones, setObservaciones] = useState("")

    const handleChange = (event) => {
        const idTarea = event.target.value
        props.manejarSelector(idTarea)

        const tarea = props.listaTareas.find(tarea => tarea.id === idTarea)
        setObservaciones(tarea.observaciones)
    }

    function mostrarTareas() {
        return props.setListaTareas(tareasRA.lista)
    }

    return (
        <div className="centro">
            <h4>Selector Tarea</h4>
            <Box sx={{ minWidth: 400 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.tareaSeleccionada}
                        label="Tarea"
                        onChange={handleChange}
                    >
                        {mostrarTareas()}
                        {props.listaTareas.length === 0 ? <MenuItem value={-1}>No hay tareas</MenuItem>
                                                        : props.listaTareas.map(props.verTareas)
                        }
                        
                    </Select>
                </FormControl>
            </Box>

            <p>Tarea seleccionada: {props.tareaSeleccionada} - {observaciones}</p>
        </div>
    )
}

export default SelectorTareaRA