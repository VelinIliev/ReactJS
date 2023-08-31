import { Routes, Route } from 'react-router-dom';

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
import { GamesProvider } from './contexts/GamesContexts';
import { Logout } from './components/Logout/Logout';
// import { withAuth } from './hoc/withAuth';

function App() {

    // const EnhancedLogin = withAuth(Login);

    return (
        <AuthProvider>
            <GamesProvider>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/edit/:gameId' element={<EditGame />} />
                            <Route path='/create' element={<CreateGame />} />
                            <Route path='/details/:gameId' element={<GameDetails />} />
                            <Route path='/catalogue' element={<Catalogue />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                        </Routes>
                    </main>

                    {/* <Footer /> */}
                </div>
            </GamesProvider>
        </AuthProvider>
    );
}

export default App;
