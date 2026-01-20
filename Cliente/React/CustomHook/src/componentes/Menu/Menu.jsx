import { Link } from "react-router-dom"
import { useState } from "react"


const Menu = () => {

    const listaUsuarios = ["Victor", "Diego", "Antonio"]

    const [usuario, setUsuario] = useState(listaUsuarios[0])


    return (
        <div>
            <Link to="/">Home</Link>
            <br />

            <Link to="/bienvenida">Bienvenida</Link>
            <br />

            <Link to="/contadores">Contadores</Link>
            <br />

            <Link to={"/nosotros/" + usuario}>Nosotros</Link>
            <br />

            
        </div>
    )
}

export default Menu