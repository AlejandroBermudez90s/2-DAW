import Contador from "../componentes/Contador/Contador"
import ContadorIconos from "../componentes/ContadorIconos/ContadorIconos"

const Contadores = () => {

    return (
        <div>
            <p>Pagina CONTADORES</p>
            <Contador contador = {5}></Contador>
            <ContadorIconos contador = {2}></ContadorIconos>
        </div>
    )

}

export default Contadores