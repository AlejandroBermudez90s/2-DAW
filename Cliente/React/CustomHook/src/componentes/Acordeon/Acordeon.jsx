import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Acordeon = (props) => {

    function generarOpcionesAcordeon(opcion, index) {
        return (
            <AccordionDetails key={index}>
                <Link to={opcion.ruta}> {opcion.nombre} </Link>
            </AccordionDetails>
        )
    }

    function generarAcordeon(opcion, index) {
        return (
            <Accordion key = {index}>
                <AccordionSummary
                    expandIcon={"^"}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{opcion.nombre}</Typography>
                </AccordionSummary>
                {opcion.lista.map(generarOpcionesAcordeon)}
            </Accordion>
        )
    }

    return (
        <div>
            {props.lista.map(generarAcordeon)}
        </div>
    )
}

export default Acordeon