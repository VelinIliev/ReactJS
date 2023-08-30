import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
import { AuthProvider } from './contexts/AuthContexts';
import { Logout } from './components/Logout/Logout';
// import { withAuth } from './hoc/withAuth';



function App() {
    const [games, setGames] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then(data => {
                setGames(data);
            })
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);
        setGames(state => [...state, newGame])

        navigate('/catalogue');
    };

    

    const onGameEditSubmit = async (values) => {
        
        const id = (values._id);
        const result = await gameService.editGame(id, values);
        setGames(state => state.map(x => x._id === id ? values : x));
        navigate(`/details/${id}`);
    };

    // const EnhancedLogin = withAuth(Login);


    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home games={games} />} />
                        {/* <Route path='/login' element={<EnhancedLogin />} /> */}
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' 
                            element={<CreateGame
                                onCreateGameSubmit={onCreateGameSubmit} />} />
                        <Route path='/edit/:gameId' 
                            element={<EditGame onGameEditSubmit={onGameEditSubmit}/>} />
                        <Route path='/details/:gameId' element={<GameDetails />} />
                        <Route path='/catalogue' element={<Catalogue games={games} />} />
                    </Routes>
                </main>

                {/* <Footer /> */}
            </div>
        </AuthProvider>
    );
}

export default App;
