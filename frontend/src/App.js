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
import About from './components/About';
import SearchRes from './components/SearchRes';
import ErrorPage from './components/ErrorPage';

function App() {
    // logged in status as state so we can update later
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoginCurrent, setisLoginCurrent] = useState(true);
    const [showSearchRes, setShowSearchRes] = useState(false);

    // to change logged in status with child components using props
    const changeLoggedIn = () => {
        if (loggedIn === false)
            setLoggedIn(true);
        else
            setLoggedIn(false);
    };

    // to change isLogincurrent state
    const changeLoginState = () => {
        if (isLoginCurrent === true)
            setisLoginCurrent(false);
        else
            setisLoginCurrent(true);
    };

    return (
        <BrowserRouter>
          <Navbar setLoggedIn={setLoggedIn} setisLoginCurrent={setisLoginCurrent} setShowSearchRes={setShowSearchRes}/>
          <Routes>
            <Route path='/' element={loggedIn?<Home/>: isLoginCurrent?<Login changeLoggedIn={changeLoggedIn} changeLoginState={changeLoginState} />: <Signup changeLoggedIn={changeLoggedIn} changeLoginState={changeLoginState}/>}/>
            <Route path='/home' element={loggedIn?<Home/>: isLoginCurrent?<Login changeLoggedIn={changeLoggedIn} changeLoginState={changeLoginState} />: <Signup changeLoggedIn={changeLoggedIn} changeLoginState={changeLoginState}/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/searchRes' element={showSearchRes?<SearchRes/>:<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
