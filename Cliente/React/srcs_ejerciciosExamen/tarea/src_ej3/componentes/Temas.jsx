import Parte from "./Parte";

const Temas = (props) => {

    function tratarPartes(parte) {
        return (
            <Parte key={parte.id} parte={parte}></Parte>
        )
    }

    function reducir (total, actual) {
        return total + actual.exercises;
    }

    const total = props.tema.parts.reduce(reducir, 0);

    return (
        <li>
            {props.tema.name}
            <ol>{props.tema.parts.map(tratarPartes)}</ol>
            <p>Total de ejercicios en el curso {total}</p>
        </li>
    )
}
export default Temas;