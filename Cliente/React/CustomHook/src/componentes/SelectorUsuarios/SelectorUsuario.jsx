
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import useUsuarios from '../../hooks/Usuarios/useUsuarios';

const SelectorUsuarios = (props) => {

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(1)

    const handleChange = (event) => {
        setUsuarioSeleccionado(event.target.value)
        props.manejarSelector(event.target.value)
    }

    const usuarios = useUsuarios()

    function generarUsuarios(usuario) {

        return <MenuItem key={usuario.id} value={usuario.id}> {usuario.id} - {usuario.name} </MenuItem>
    }

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Usuario</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={usuarioSeleccionado}
                        label="Usuario"
                        onChange={handleChange}
                    >
                        {
                            usuarios.cargando ? <MenuItem value={-1}>cargando</MenuItem>
                                              : usuarios.lista.map(generarUsuarios)
                        }
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default SelectorUsuarios