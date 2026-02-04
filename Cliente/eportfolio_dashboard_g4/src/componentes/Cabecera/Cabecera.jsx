import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

function Cabecera(props) {

    const user = useContext(UserContext)

    return (
            <div className='row' id="header">
                <div className='col-12'>
                    <header>
                        <h1>HEADER</h1>
                        <p>Usuario: {props.usuario}</p>
                        <p>Usuario (Context): {user}</p>
                    </header>
                </div>
            </div>
    )
}

export default Cabecera