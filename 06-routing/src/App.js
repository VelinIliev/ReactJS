import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import CharactersList from './components/CharactersList';
import Character from './components/Character';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <Navigation />
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/characters' element={<CharactersList />} />
                    <Route path='/characters/:characterId/*' element={<Character />} />
                    <Route path='/*' element={<h1>404</h1>} />
                </Routes>

            </header>
        </div>
    );
}

export default App;
