import Roles from "../Roles/Roles"
import Dashboard from "../Dashboard/Dashboard"

const Layout = (props) => {

    return (
        <div className='row'>
            <div className='col-4'>
                <Roles></Roles>
            </div>
            <div className='col-8'>
                <Dashboard menu={props.menu}></Dashboard>
            </div>
        </div>
    )
}

export default Layout