import useComentarios from '../../hooks/Comentario/useComentarios'
import './PiePagina.css'

const PiePagina = () => {
    
    const comentarios = useComentarios()

    return (

        <footer className='piepagina'>
            Total de comentarios: {comentarios.lista.length}
        </footer>
    )
}

export default PiePagina