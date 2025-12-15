import { useContext } from 'react';
// Importamos el contexto
import TemaContext from '../contextos/TemaContext';

const BotonTema = (props) => {

    // Obtenemos el tema actual desde el contexto
    const tema = useContext(TemaContext);

    return (
        // Boton con estilos segun el tema
        <button style={{background : tema.background, color : tema.foreground}}>
            {props.etiqueta}
        </button>
    )

}
export default BotonTema;