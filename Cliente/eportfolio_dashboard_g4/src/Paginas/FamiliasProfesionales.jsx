import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getAllFamiliasProfesionales from "../services/FamiliasProfesionales/getAllFamiliasProfesionales";

const FamiliasProfesionales = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    getAllFamiliasProfesionales().then((data) => setLista(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="familias profesionales">
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Nombre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((familia) => (
            <TableRow
              key={familia.codigo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{familia.codigo}</TableCell>
              <TableCell>{familia.nombre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FamiliasProfesionales;