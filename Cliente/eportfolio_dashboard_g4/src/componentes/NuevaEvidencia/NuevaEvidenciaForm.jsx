

const NuevaEvidenciaForm = (props) => {

    function tareaManejar() {

        props.setTarea("Tarea 1")
    }

    return (
        <>
            <h1>Formulario Tarea</h1>
            <p>Tarea seleccionada: {props.tarea}</p>
            <button onClick={tareaManejar}>Seleccionar tarea</button>
        </>
    )
}

export default NuevaEvidenciaForm