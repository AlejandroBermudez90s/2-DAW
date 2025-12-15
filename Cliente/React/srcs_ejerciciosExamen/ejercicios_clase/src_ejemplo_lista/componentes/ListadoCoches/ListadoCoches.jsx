import Coche from '../Coches';
import './ListadoCoches.css';

const ListadoCoches = (props) => {

    function crearCoche(miCoche, index) {
        
        return <Coche key = {miCoche.matricula} coche={miCoche}></Coche>

    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Matrícula</th>
                    <th>Color</th>
                    <th>Nº Puertas</th>
                </tr>
            </thead>
            <tbody>
                {props.todosLosCoches.map(crearCoche)}
            </tbody>
        </table>
    )

}

export default ListadoCoches;
