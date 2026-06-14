import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import ProgresoCompletoAlumno from "./ProgresoCompletoAlumno.jsx"
import NuevaEvidencia from "../NuevaEvidencia/NuevaEvidencia.jsx"
import RevisionesPendientes from "./RevisionesPendientes.jsx"

const FuncionalidadEstudiante = () => {
  const [tab, setTab] = useState(0)

  return (
    <Box>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
        <Tab label="Mi progreso completo" />
        <Tab label="Subir nueva evidencia" />
        <Tab label="Mis revisiones pendientes" />
      </Tabs>

      {tab === 0 && <ProgresoCompletoAlumno />}
      {tab === 1 && <NuevaEvidencia />}
      {tab === 2 && <RevisionesPendientes />}
    </Box>
  )
}

export default FuncionalidadEstudiante