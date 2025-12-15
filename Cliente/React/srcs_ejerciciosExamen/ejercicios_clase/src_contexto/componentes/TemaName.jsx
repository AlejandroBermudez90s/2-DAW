import {useContext} from 'react';
// Importamos el contexto
import TemaContext from '../contextos/TemaContext';

const TemaName = () => {
    
    // Obtenemos el contexto
    const tema = useContext(TemaContext);
    
    return (
        <div>
            {/*Mostramos el nombre del tema*/}
            <p>{tema.nombre}</p>
        </div>
    )
}

export default TemaName;