import './App.css';
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={loggedIn?<Home/> : <Register />}>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
