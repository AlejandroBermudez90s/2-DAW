import "../Menu/MenuCiudades.css";
import {Link } from "react-router-dom";


const MenuPosts = () => {

    return (

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/usuarios">Usuarios</Link></li>
        </ul>
    )

}
export default MenuPosts