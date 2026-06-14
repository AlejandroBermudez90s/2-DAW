import { useState, useContext } from "react";
import impartidos from "../../mocks/mock-impartidos.js";
import UserContext from "../../componentes/Contexts/UserContext.jsx";

const useMisModulosImpartidos = () => {
  const user = useContext(UserContext);

  const [buscando, setBuscando] = useState(false);
  const [lista, setLista] = useState(impartidos[user]?.lista ?? []);

  return { buscando, lista };
};

export default useMisModulosImpartidos;