import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import NuevaEvidencia from "../NuevaEvidencia/NuevaEvidencia";


function Dashboard(props) {

    const usuario = useContext(UserContext)

    return (
        <main>
            <h2>MAIN</h2>
            <p>Menú: {props.menu}</p>
            <p>Usuario: {usuario}</p>
            <NuevaEvidencia></NuevaEvidencia>
        </main>
    )
}

export default Dashboard
