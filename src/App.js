import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {app} from "./FirebaseConfig"
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

	const [theme, setTheme] = useState("dark");

	const hTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	}


  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<div>Home page</div>}/>
				<Route path='/login' element={<Login hTheme={hTheme}/>}/>
				<Route path='/signup' element={<Signup hTheme={hTheme}/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
