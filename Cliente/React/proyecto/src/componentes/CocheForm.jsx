import { useForm } from "react-hook-form"


const CocheForm = (props) => {

    const COCHE = {
        MODELO      : "modelo",
        MATRICULA   : "matricula",
        COLOR       : "color",
        PUERTAS     : "npuertas"
    }
    
    const COCHEINICIAL = {
        modelo      : "",
        matricula   : "",
        color       : "",
        npuertas    : 2
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        watch
    } = useForm({defaultValues: COCHEINICIAL});

    const manejarFormulario = handleSubmit((nuevoCoche) => {
        console.log(nuevoCoche)
        props.manejarFormulario(nuevoCoche)
    reset(COCHEINICIAL)
    })

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <p><strong>Nuevo vehículo</strong></p>

            <label htmlFor={COCHE.MODELO}>Modelo</label>
            <input type="text" id={COCHE.MODELO} 
                {
                    ...register(COCHE.MODELO,
                                {required: {
                                            value   : true,
                                            message : "El modelo es obligatorio"
                                            }
                                })                    
                }
            /> <br/> <span>{errors.modelo?.message}</span> <br/>

            <label htmlFor={COCHE.MATRICULA}>Matricula</label>
            <input type="text" id={COCHE.MATRICULA} 
                {
                    ...register(COCHE.MATRICULA,
                                {required: {
                                            value   : true,
                                            message : "La matrícula es obligatoria"
                                            }
                                ,
                                required: {
                                            value   : /^\d\d\d\d[BCDFGHKLMNPRSTVWXYZ][BCDFGHKLMNPRSTVWXYZ][BCDFGHKLMNPRSTVWXYZ]$/,
                                            message : "El formato de la matrícula no es correcto 0000-AAA"
                                            }
                                })                    
                }
            /> <br/> <span>{errors.matricula?.message}</span> <br/>

            <label htmlFor={COCHE.COLOR}>Color</label>
            <input type="text" id={COCHE.COLOR} 
                {
                    ...register(COCHE.COLOR,
                                {required: {
                                            value   : true,
                                            message : "El color es obligatorio"
                                            }
                                })                    
                }
            /> <br/> <span>{errors.color?.message}</span> <br/>

            <label htmlFor={COCHE.PUERTAS}>Nº de puertas</label>
            <input type="number" id={COCHE.PUERTAS} 
                {
                    ...register(COCHE.PUERTAS,
                                {required: {
                                            value   : true,
                                            message : "El número de puertas es obligatorio"
                                            }
                                ,
                                min: {
                                            value   : 2,
                                            message : "El valor mínimo para este campo es 2"
                                            }
                                ,
                                max: {
                                            value   : 5,
                                            message : "El valor máximo para este campo es 5"
                                            }
                                })                    
                }
            /> <br/> <span>{errors.color?.message}</span> <br/>

            <button>Añadir Coche</button>
            <br/>
            {JSON.stringify(watch())}
        </form>
    )
}

export default CocheForm