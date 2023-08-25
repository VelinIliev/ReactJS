import { useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Details } from "./components/Details/Details";
import { EditGame } from "./components/EditGame/EditGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import {getAll} from "./services/gameService"



function App() {
    const [games, setGames] = useState([]);

    useEffect( () => {
       getAll()
    }, []);
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home /> } />
                    <Route path='/login' element={<Login /> } />
                    <Route path='/register' element={<Register /> } />
                    <Route path='/create' element={<CreateGame /> } />
                    <Route path='/edit' element={<EditGame /> } />
                    <Route path='/details' element={<Details /> } />
                    <Route path='/catalogue' element={<Catalogue /> } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
