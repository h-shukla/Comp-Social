import './App.css';
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={loggedIn?<Home/> : <Login/>}>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
