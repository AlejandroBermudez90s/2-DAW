import Tema from "./Tema"

const ListaTemas = (props) => {

    function crearTema (miTema, index) {
        return <Tema key={miTema.id} tema={miTema}></Tema>
    }
    
    return(
        <>
            {props.todosLosTemas.map(crearTema)}
        </>
    )

}

export default ListaTemas
