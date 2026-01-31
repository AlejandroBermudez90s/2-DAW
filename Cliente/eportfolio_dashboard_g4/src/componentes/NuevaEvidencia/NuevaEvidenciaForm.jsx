import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import "./Evidencias.css"

const NuevaEvidenciaForm = (props) => {

	function añadirEvidencia() {

		return <></>
	}


	function borrarTareas() {
		props.setListaTareas([])
		setTareaSeleccionada("")
	}

	return (
		<div className='ancho'>
			<h4>Formulario Tarea</h4>
			<p>Tarea seleccionada: {props.tareaSeleccionada.id} - {props.tareaSeleccionada.observaciones}</p>
			<TextField 
				id="outlined-basic" 
				label="URL" 
				variant="outlined" 
				fullWidth
			/>
			<br />
			<br />
			<TextField
				id="outlined-textarea"
				label="Observaciones"
				placeholder="Observaciones"
				multiline
				fullWidth
				margin="normal"
			/>
			<Stack direction="row" spacing={2}>
				<Button variant="contained" onClick={añadirEvidencia}>Añadir evidencia</Button>
				<Button variant="contained" onClick={borrarTareas}>Borrar tareas</Button>
			</Stack>
		</div>
	)
}

export default NuevaEvidenciaForm