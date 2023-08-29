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
import { AuthContext } from './contexts/AuthContexts';
import { login, register, logout } from './services/authService';
import { Logout } from './components/Logout/Logout';
// 
function App() {
        const [games, setGames] = useState([]);
        const [auth, setAuth] = useState({});
        const navigate = useNavigate();

        useEffect(() => {
            gameService.getAll()
                .then(data => {
                    setGames(data);
                    // console.log(data);
                })
        }, []);

        const onCreateGameSubmit = async (data) => {
            const newGame = await gameService.create(data, auth.accessToken);

            setGames(state => [...state, newGame])

            navigate('/catalogue');
        };

        const onLoginSubmit = async (data) => {
            // e.preventDefault();
            // console.log(Object.fromEntries(new FormData(e.target)));
            // console.log(data);
            const result = await login(data);
            if (result.accessToken) {
                // console.log(result.accessToken);
                setAuth(result);
                navigate('/catalogue')
            } else {
                setAuth({ "message": result.message });
            }
            // console.log(auth);
        };

        const onRegisterSubmit = async (data) => {
            const { confirmPassword, ...registerData } = data;
            if (confirmPassword !== registerData.password) {
                setAuth({ "message": "passwords don't match" });
                return;
            }
            const result = await register(registerData);
            if (result.accessToken) {
                setAuth(result);
                navigate('/catalogue');
            } else {
                setAuth({ "message": result.message });
            }
        };
        const onLogout = async () => {
            const result = await logout(auth.accessToken)
            setAuth({});
            // console.log("x");
            // console.log(auth);
            return
        };
        

        const context = {
            onLogout,
            onRegisterSubmit,
            onLoginSubmit,
            userId: auth._id,
            token: auth.accessToken,
            userEmail: auth.email,
            message: auth.message
        }

        return (
            <AuthContext.Provider value={context}>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home games={games.length} />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/create' element={
                                <CreateGame
                                    onCreateGameSubmit={onCreateGameSubmit} />} />
                            <Route path='/edit' element={<EditGame />} />
                            <Route path='/details/:gameId' element={<GameDetails />} />
                            <Route path='/catalogue' element={<Catalogue games={games} />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AuthContext.Provider>
        );
    }

export default App;
