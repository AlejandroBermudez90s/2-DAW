import { useEffect, useState } from "react";


function Segundero (props) {

    const[segundero, setSegundero] = useState(props.contador)

    function manejarReloj(){

        setSegundero(prevSegundero => prevSegundero + 1)
    }
    
    function reloj(){

        setInterval(manejarReloj, 1000)
    }

    useEffect(reloj, [])

    return(
        <>
            { segundero }
        </>
    )
}

export default Segundero;