import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import PlanificarCriterios from "./PlanificarCriterios.jsx"
import EvaluarEvidencias from "./EvaluarEvidencias.jsx"
import AsignarRevisiones from "./AsignarRevisiones.jsx"

const FuncionalidadDocente = () => {
  const [tab, setTab] = useState(0)

  return (
    <Box>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
        <Tab label="Planificar criterios" />
        <Tab label="Evaluar evidencias" />
        <Tab label="Asignar revisiones" />
      </Tabs>

      {tab === 0 && <PlanificarCriterios />}
      {tab === 1 && <EvaluarEvidencias />}
      {tab === 2 && <AsignarRevisiones />}
    </Box>
  )
}

export default FuncionalidadDocente