import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
		<div>
			<div>
				<Navbar />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
