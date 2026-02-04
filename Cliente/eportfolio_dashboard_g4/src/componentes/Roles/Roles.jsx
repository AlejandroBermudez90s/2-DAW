import { useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import UserContext from "../Contexts/UserContext";

function Roles() {

    const token = useContext(TokenContext)
    const usuario = useContext(UserContext)

    return (
        <>
            <h2>ROLES</h2>
            <p>Token: {token}</p>
            <p>Usuario: {usuario}</p>
        </>
    )
}
export default Roles