import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<MainPage />} />
				<Route path='/user/:name' element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
