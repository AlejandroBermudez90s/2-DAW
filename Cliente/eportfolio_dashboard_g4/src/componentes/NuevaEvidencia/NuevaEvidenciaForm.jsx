import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import "./Evidencias.css"
import Box from '@mui/material/Box';


const NuevaEvidenciaForm = (props) => {

	function añadirEvidencia () {

		return <></>
	}


	function borrarTareas () {
		props.setListaTareas([])
		setTareaSeleccionada("")
	}

	function validarURL () {
		
	}

	return (
		<Box component="form" sx={{mt:2}}>
			<TextField 
				id="outlined-basic" 
				label="URL" 
				variant="outlined" 
				fullWidth
			/>
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
		</Box>
	)
}

export default NuevaEvidenciaForm