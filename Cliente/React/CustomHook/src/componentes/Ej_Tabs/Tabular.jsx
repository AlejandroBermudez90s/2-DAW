import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import opciones from '../../mocks/mock-ocpiones';

const Tabular = (props) => {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(props.opcionInicial);

    function handleChange (event, nuevaOpcion) {
        setOpcionSeleccionada(nuevaOpcion)
        props.manejarSeleccion(nuevaOpcion)
    }

    function pintarOpcion (opcion, index) {

        return (<Tab key={opcion.id} label={opcion.nombre}></Tab>)
    }

    return(
        <div>
            <h1>TABULAR</h1>
            <Tabs value={opcionSeleccionada} onChange={handleChange} aria-label="basic tabs example">
                {props.lista.map(pintarOpcion)}
            </Tabs>
        </div>
    )
}

export default Tabular