// PARTE 1
import TokenContext from "../Contexts/TokenContext";

import UserContext from "../Contexts/UserContext";
import { useContext } from "react";

// ACORDEÓN
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// CUSTOM HOOKS Y SERVICIOS
//import useRoles from "../../CustomHooks/Roles/useRoles.js";
import useRolesAPI from "../../CustomHooks/Roles/useRolesAPI.js";

import useMisModulosImpartidos from "../../CustomHooks/MisModulosImpartidos/useMisModulosImpartidos.js";
import useMisModulosImpartidosAPI from "../../CustomHooks/MisModulosImpartidos/useMisModulosImpartidosAPI.js";

import useMisModulosMatriculados from "../../CustomHooks/MisModulosMatriculados/useMisModulosMatriculados.js";
import useModulosMatriculadosAPI from "../../CustomHooks/MisModulosMatriculados/useModulosMatriculadosAPI.js";

import opcionesMenu from "../../mocks/mock-administrador.js";


const MenuLateral = () => {

  const user = useContext(UserContext);

  const { lista: roles } = useRolesAPI(user);
  const { lista: impartidos } = useMisModulosImpartidos(user);
  const { lista: matriculados } = useMisModulosMatriculados(user);
  const navigate = useNavigate();

  const obtenerRoles = (rol) => {
    if (rol === "administrador") {
      return opcionesMenu.administrador.map((opcion) => ({
        label: opcion.nombre,
        onClick: () => navigate(opcion.ruta),
      }));
    }
    if (rol === "docente") {
      return impartidos.map((modulo) => ({
        label: modulo.nombre,
        onClick: () => navigate(`/funcionalidaddocente/${modulo.id}`),
      }));
    }
    if (rol === "estudiante") {
      return matriculados.map((modulo) => ({
        label: modulo.nombre,
        onClick: () => navigate(`/funcionalidadestudiante/${modulo.id}`),
      }));
    }
    return [];
  };

  return (
    <>
      {roles.map((rol) => (
        <Accordion key={rol}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{rol}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {obtenerRoles(rol).map((item, index) => (
              <Typography
                key={index}
                onClick={item.onClick}
                sx={{ cursor: "pointer", color: "primary.main", py: 0.5 }}
              >
                {item.label}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default MenuLateral;