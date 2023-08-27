import { useState, useEffect} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import * as gameService from "./services/gameService"

import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { EditGame } from "./components/EditGame/EditGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from './components/GameDetails/GameDetails';



function App() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        gameService.getAll()
        .then(data => {
            setGames(data);
            // console.log(data);
        })
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);

        setGames(state => [...state, newGame])
        
        navigate('/catalogue');
    }

    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home games={games.length}/> } />
                    <Route path='/login' element={<Login /> } />
                    <Route path='/register' element={<Register /> } />
                    <Route path='/create' element={
                            <CreateGame 
                                onCreateGameSubmit={onCreateGameSubmit}/> } />
                    <Route path='/edit' element={<EditGame /> } />
                    <Route path='/details/:gameId' element={<GameDetails /> } />
                    <Route path='/catalogue' element={<Catalogue games={games}/> } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
