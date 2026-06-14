import { useState, useContext } from "react";
import modulosMatriculados from "../../mocks/mock-matriculados.js";
import UserContext from "../../componentes/Contexts/UserContext.jsx";

const useMisModulosMatriculados = () => {
  const user = useContext(UserContext);

  const [buscando, setBuscando] = useState(false);
  const [lista, setLista] = useState(modulosMatriculados[user]?.lista ?? []);

  return { buscando, lista };
};

export default useMisModulosMatriculados;