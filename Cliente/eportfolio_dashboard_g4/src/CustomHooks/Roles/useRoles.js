import { useState, useContext } from "react";
import roles from "../../mocks/mock-roles.js";
import UserContext from "../../componentes/Contexts/UserContext.jsx";

const useRoles = () => {
  const user = useContext(UserContext);

  const [buscando, setBuscando] = useState(false);
  const [lista, setLista] = useState(roles[user]?.roles ?? []);

  return { buscando, lista };
};

export default useRoles;