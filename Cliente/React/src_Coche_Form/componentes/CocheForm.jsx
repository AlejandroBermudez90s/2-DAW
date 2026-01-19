import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import '@fontsource/roboto/300.css'
import NumberSpinner from './NumberSpinner';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const CocheForm = (props) => {

  const COCHE = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    MODELO: "modelo",
    MATRICULA: "matricula",
    COLOR: "color",
    PUERTAS: "npuertas",
  }

  // Objeto coche en su estado inicial
  const COCHEINICIAL = {
    modelo: "",
    matricula: "",
    color: "",
    npuertas: 2
  }

  const { register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    watch } = useForm({ defaultValues: COCHEINICIAL });

  console.log(errors);

  // Función encargada de actualiar el hook de estado del componente y
  // devolver el coche creado al objeto padre
  const manejarFormulario = handleSubmit((nuevoCoche) => {

    console.log(nuevoCoche);

    // A través de la función que recibe el componente como props, devolvemos el nuevo coche
    // al componente padre para que lo añada a la lista de coches
    props.manejarAccion(nuevoCoche);

    reset(COCHEINICIAL);
  })

  return (
    
    <form id="formulario" onSubmit={manejarFormulario}>
      <p><strong>Nuevo vehículo</strong></p>
      <TextField id={COCHE.MODELO} label="Modelo" variant="outlined"
        {...register(COCHE.MODELO,
          {
            required: {
              value: true,
              message: "El modelo es obligatorio"
            }
          })
        }
      /><br></br><span>{errors.modelo?.message}</span><br></br>


      <TextField id={COCHE.MATRICULA} label="Matrícula" variant="outlined"
        {...register(COCHE.MATRICULA,
          {
            required: {
              value: true,
              message: "La matrícula es obligatoria"
            }
            ,
            pattern: {
              value: /^\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ]$/,
              message: "El formato de la matrícula no es correcto 0000AAA"
            }
          })
        }
      /><br></br><span>{errors.matricula?.message}</span><br></br>

      <TextField id={COCHE.COLOR} label="Color" variant="filled"
        {...register(COCHE.COLOR,
          {
            required: {
              value: true,
              message: "El color es obligatorio"
            }
          })
        }
      /><br></br><span>{errors.color?.message}</span><br></br>

      <NumberSpinner id = {COCHE.PUERTAS}
                     label = "Nº Puertas"
                     min = {2}
                     max = {5}
                     size = "small"
                     defaultValue = {2}
                     onValueChange = {(value) => {
                                                    setValue(COCHE.PUERTAS,
                                                             value, {shouldDirty    : true,
                                                                     shouldValidate : true 
                                                             } 
                                                    )
                                                  }
                                      }  
        {...register(COCHE.PUERTAS,
          {
            required: {
              value: true,
              message: "El número de puertas es obligatorio"
            },
            min: {
              value: 2,
              message: "Valor mínimo para este campo es 2"
            },
            max: {
              value: 5,
              message: "Valor máximo para este campo es 5"
            }
          })
        } /><br></br><span>{errors.npuertas?.message}</span><br></br>


{/*
      <TextField id={COCHE.PUERTAS} label="Nº Puertas" variant="standard"
        {...register(COCHE.PUERTAS,
          {
            required: {
              value: true,
              message: "El número de puertas es obligatorio"
            },
            min: {
              value: 2,
              message: "Valor mínimo para este campo es 2"
            },
            max: {
              value: 5,
              message: "Valor máximo para este campo es 5"
            }
          })
        } /><br></br><span>{errors.npuertas?.message}</span><br></br>
*/}

      <Stack direction="row" spacing={2} className='botones'>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Borrar Coche
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} type='submit'>
        Añadir Coche
      </Button>
    </Stack>
      <br></br>{JSON.stringify(watch())}
    </form>
  )
}

export default CocheForm;