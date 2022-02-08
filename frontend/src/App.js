import './App.css';
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    // logged in status as state so we can update later
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoginCurrent, setisLoginCurrent] = useState(true);

    // to change logged in status with child components using props
    const changeLoggedIn = () => {
        if (loggedIn===false) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    };

    // to change isLogincurrent state
    const changeLoginState = () => {
        if (isLoginCurrent === true) {
            setisLoginCurrent(false);
        } else {
            setisLoginCurrent(true);
        }
    };

    return (
        <BrowserRouter>
          <Navbar setLoggedIn={setLoggedIn}/>
          <Routes>
            <Route path='/' element={loggedIn?<Home/>: isLoginCurrent?<Login changeLoggedIn={changeLoggedIn} changeLoginState={changeLoginState} />: <Signup changeLoggedIn={changeLoggedIn} changeLoginState={changeLoginState}/>}/>
            <Route path='/home' element={<Home/>} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;
