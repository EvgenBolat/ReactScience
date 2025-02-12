import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import BasicPage from './pages/BasicPage/BasicPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<BasicPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
