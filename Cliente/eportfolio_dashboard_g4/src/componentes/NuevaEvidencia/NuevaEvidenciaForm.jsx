import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Form, useForm, Controller } from 'react-hook-form'
import { useState, useContext } from 'react';
import UserContext from '../Contexts/UserContext';

const NuevaEvidenciaForm = (props) => {

	const { control, handleSubmit } = useForm({defaultValues: {url : "", descripcion : ""}})

	const usuario = useContext(UserContext)

	const [evidenciaInicial, setEvidenciaInicial] = useState({ 
																											      tarea_id 					: props.tareaSeleccionada.id,
 																											      estudiante_id 		: usuario,
																											      url								: "",
																											      descripcion				: "",
 																											      estado_validacion	: "pendiente" 
																										      })
	
	function añadirEvidencia(evidencia) {
		const evidenciaFinal = { ...evidenciaInicial, ...evidencia }
		setEvidenciaInicial(evidenciaFinal)
		props.manejarEvidencia(evidenciaFinal)
	}

	console.log("Evidencia final:", evidenciaInicial);

	return (
		<Form control={control} onSubmit={handleSubmit(añadirEvidencia)}>

      <Controller
        name="url"
        control={control}
        rules={{ required: "La URL es obligatoria", pattern: { value: /^https?:\/\/.+/, message: "URL no válida" } }}
        render={({ field, fieldState: { error } }) => (
          <TextField {...field} label="URL" fullWidth error={!!error} helperText={error?.message} />
        )}
      />

      <Controller
        name="descripcion"
        control={control}
        rules={{ required: "La descripción es obligatoria" }}
        render={({ field, fieldState: { error } }) => (
          <TextField {...field} label="Observaciones" multiline fullWidth margin="normal" error={!!error} helperText={error?.message} />
        )}
      />

      <Button variant="contained" type="submit">Añadir evidencia</Button>
    </Form>
	)
}

export default NuevaEvidenciaForm