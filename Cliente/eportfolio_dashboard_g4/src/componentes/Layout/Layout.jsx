import Roles from "../Roles/Roles"
import Dashboard from "../Dashboard/Dashboard"

const Layout = (props) => {

    return (
        <div className='row'>
            <div id="aside" className='col-4 p-3 h-100 border-end'>
                <Roles></Roles>
            </div>
            <div id="main" className='col-8 p-4 overflow-auto'>
                <Dashboard menu={props.menu}></Dashboard>
            </div>
        </div>
    )
}

export default Layout