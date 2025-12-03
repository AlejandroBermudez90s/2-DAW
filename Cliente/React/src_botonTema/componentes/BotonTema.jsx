import TemaContext from "../contextos/TemaContext"
import { useContext } from "react"

const BotonTema = (props) => {

    const tema = useContext(TemaContext)

    return (
        <button style={{background : tema.background, color: tema.foreground}}> {props.etiqueta} </button>
    )

}

export default BotonTema