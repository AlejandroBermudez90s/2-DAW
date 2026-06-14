import Roles from "../Roles/Roles"
import Dashboard from "../Dashboard/Dashboard"
import { Routes, Route } from 'react-router-dom'
import FuncionalidadEstudiante from "../FuncionalidadEstudiante/FuncionalidadEstudiante"
import FuncionalidadDocente from "../FuncionalidadDocente/FuncionalidadDocente"
import FamiliasProfesionales from "../../Paginas/FamiliasProfesionales"

const Layout = (props) => {

    return (
        <div className='row'>
            <aside className='col-4'>
                <Roles></Roles>
            </aside>
            <main className='col-8'>
                <Routes>
                    <Route path="/" element={<Dashboard menu={props.menu} />} />
                    <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
                    <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />} />
                    <Route path="/familiasprofesionales" element={<FamiliasProfesionales />} />
                </Routes>
            </main>
        </div>
    )
}

export default Layout