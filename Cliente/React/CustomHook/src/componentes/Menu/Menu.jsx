import { Link } from "react-router-dom"

const Menu = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/bienvenida">Bienvenida</Link>
            <br />
            <Link to="/contadores">Contadores</Link>
            <br />
            <Link to="/nosotros">Nosotros</Link>
        </div>
    )
}

export default Menu