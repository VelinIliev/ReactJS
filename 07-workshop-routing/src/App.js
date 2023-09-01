import { Routes, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { RouteGuard } from './components/common/RouteGuard';
import { GamesProvider } from './contexts/GamesContexts';
import { AuthProvider } from './contexts/AuthContexts';

import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { EditGame } from "./components/EditGame/EditGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from './components/GameDetails/GameDetails';
import { Logout } from './components/Logout/Logout';
import { GameOwner } from './components/common/GameOwner';

// import { withAuth } from './hoc/withAuth';

function App() {

    // const EnhancedLogin = withAuth(Login);

    return (

        <AuthProvider>
            <ErrorBoundary>
                <div id="box">
                    <Header />

                    <main id="main-content">
                        <GamesProvider >
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/details/:gameId' element={<GameDetails />} />
                                <Route path='/catalogue' element={<Catalogue />} />
                                <Route element={<RouteGuard />} >
                                    <Route path='/edit/:gameId' element={
                                        <GameOwner>
                                            <EditGame />
                                        </GameOwner>
                                    } />
                                    <Route path='/create' element={<CreateGame />} />
                                </Route>
                            </Routes>
                        </GamesProvider >

                        <Routes>
                            <Route path='/login' element={<Login />} />
                            <Route element={<RouteGuard />} >
                                <Route path='/logout' element={<Logout />} />
                            </Route>
                            <Route path='/register' element={<Register />} />
                        </Routes>

                    </main>

                    {/* <Footer /> */}
                </div>
            </ErrorBoundary>
        </AuthProvider>

    );
}

export default App;
