import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera.jsx'
import TokenContext from './componentes/Contexts/TokenContext.jsx'
import UserContext from './componentes/Contexts/UserContext.jsx'
import Layout from './componentes/Layout/Layout.jsx'

function App() {

	const usuario = 'Alejandro'
	const token = 'abc123xyz456'
	const menu = 'Principal'

	return (
		<div className='container-fluid vh-100 vw-100 d-flex flex-column p-0'>
			<TokenContext.Provider value={token}>
				<Cabecera usuario={usuario}></Cabecera>
				<UserContext.Provider value={usuario}>
					<Layout menu={menu}></Layout>
				</UserContext.Provider>
			</TokenContext.Provider>
		</div>
	)

}

export default App
