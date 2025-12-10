import Coche from "../Coche"
import './ListadoCoches.css'

const ListadoCoches = (props) => {

  function crearCoche (miCoche, index) {
    return <Coche key = {miCoche.matricula} coche = {miCoche}></Coche>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Marticula</th> 
          <th>Color</th>
          <th>Puertas</th>
        </tr>
      </thead>
      <tbody>
        {props.todosLosCoches.map(crearCoche)}
      </tbody>
    </table>
  )

}

export default ListadoCoches