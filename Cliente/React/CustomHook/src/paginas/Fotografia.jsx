import Tabular from '../componentes/Ej_Tabs/Tabular';
import opciones from '../mocks/mock-ocpiones';
import menuAcordeon from '../mocks/mock-menu';
import { useState } from 'react';
import Subir from '../componentes/Ej_Tabs/Subir';
import Ver from '../componentes/Ej_Tabs/Ver';
import Descargar from '../componentes/Ej_Tabs/Descargar';


const Fotografia = () => {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);

    function manejarSeleccion(opcion) {

        setOpcionSeleccionada(opcion)
    }

    function renderizarComponentes() {

        switch (opcionSeleccionada) {
            case 0: return <Subir></Subir>
            case 1: return <Ver></Ver>
            case 2: return <Descargar></Descargar>
            default: return (<></>)
        }
    }

    return (
        <div>
            <Tabular lista={opciones}
                opcionInicial={0}
                manejarSeleccion={manejarSeleccion}>
            </Tabular>
            {renderizarComponentes()}
        </div>
    )
}

export default Fotografia