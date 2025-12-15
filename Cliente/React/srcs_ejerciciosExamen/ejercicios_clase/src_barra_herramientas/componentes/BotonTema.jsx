import { useContext } from 'react';
import TemaContext from '../contextos/TemaContext';

const BotonTema = (props) => {

    const tema = useContext(TemaContext);

    return (
        <button style={{background : tema.background, color : tema.foreground}}>
            {props.etiquetas}
        </button>
    )

}
export default BotonTema;