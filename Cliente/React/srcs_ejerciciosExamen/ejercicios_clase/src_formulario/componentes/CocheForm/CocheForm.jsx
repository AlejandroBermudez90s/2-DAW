import { useForm } from "react-hook-form";

import './CocheForm.css';

const CocheForm = (props) => {

    // Para referenciar al mock
    // Viene bien para que si cambia un campo no haya que cambiar todo el codigo
    const COCHE = {
        MODELO: "modelo",
        MATRICULA: "matricula",
        COLOR: "color",
        PUERTAS: "npuertas"
    }

    // Valores iniciales
    const COCHEINICIAL = {
        modelo : "",
        matricula : "",
        color : "",
        npuertas : 1
    }

    // Constante para el formulario (especificar)
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors},
        watch
    } = useForm({defaultValues: COCHEINICIAL});

    const manejarFormulario = handleSubmit((coche) => {

        props.manejarFormulario(coche);
        console.log("Coche insertado", coche);

    })


    return (
        <form id= "formulario" onSubmit={manejarFormulario}>
            <p><strong>Nuevo Vehiculo</strong></p>

            <label htmlForm={COCHE.MODELO}>Modelo</label>
            <input id={COCHE.MODELO} type="text"
                // Validacion
                {...register(COCHE.MODELO,
                    {
                        // Indicamos que es obligatorio
                        required : {
                            value : true,
                            // Mensaje que dara si no se cumple la validacion
                            message : "El modelo del vehiculo es obligatorio."
                        }
                    }
                )}
            ></input><br></br><span>{errors.modelo?.message}</span><br></br>

            <label htmlForm={COCHE.MATRICULA}>Matricula</label>
            <input id={COCHE.MATRICULA} type="text"
                // Validacion
                {...register(COCHE.MATRICULA,
                    {
                        // Indicamos que es obligatorio
                        required : {
                            value : true,
                            // Mensaje que dara si no se cumple la validacion
                            message : "La matricula del vehiculo es obligatoria."
                        },
                        // Indicamos el formato que tiene que tener
                        pattern : {
                            value : /^\d\d\d\d[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ]$/,
                            // Mensaje que dara si no se cumple la validacion
                            message : "El formato de la matricula no es válido (0000AAA)"
                        }
                    }
                )}
            ></input><br></br><span>{errors.matricula?.message}</span><br></br>

            <label htmlForm={COCHE.COLOR}>Color</label>
            <input id={COCHE.COLOR} type="text"
                // Validacion
                {...register(COCHE.COLOR,
                    {
                        // Indicamos que es obligatorio
                        required : {
                            value : true,
                            // Mensaje que dara si no se cumple la validacion
                            message : "El color del vehiculo es obligatorio."
                        }
                    }
                )}
            ></input><br></br><span>{errors.color?.message}</span><br></br>

            <label htmlForm={COCHE.PUERTAS}>Nº Puertas</label>
            <input id={COCHE.PUERTAS} type="number"
                // Validacion
                {...register(COCHE.PUERTAS,
                    {
                        // Indicamos que es obligatorio
                        required : {
                            value : true,
                            // Mensaje que dara si no se cumple la validacion
                            message : "El numero de puertas del vehiculo es obligatorio."
                        },
                        // Indicamos el minimo que tiene que tener
                        min : {
                            value : 1,
                            // Mensaje que dara si no se cumple la validacion
                            message: "Valor mínimo para el número de puertas es 1"
                        },
                        // Indicamos el maximo que debe de tener
                        max : {
                            value : 5,
                            // Mensaje que dara si no se cumple la validacion
                            message: "Valor máximo para el número de puertas es 5"
                        }
                    }
                )}
            ></input><br></br><span>{errors.npuertas?.message}</span><br></br>

            <button>Añadir coche</button>
            
            {/* Depuración */}
            <br></br>{JSON.stringify(watch())}
            <br></br>{console.log(errors)}
        </form>
    )

}

export default CocheForm;