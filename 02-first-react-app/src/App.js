// import logo from './logo.svg';

import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
import Link from './components/Link';

import './App.css';
import Movie from './components/Movie';
import MoviesList from './components/MoviesList';
import Timer from './components/Timer';
import Counter from './components/Counter';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Logo />
//                 <Paragraph
//                     title="React"
//                     secondTitle="22"
//                     final="!" />
//                 <Link />
//             </header>
//         </div>
//     );
// }
const movies = [
    { title: 'Man of steel', year: 2008, cast: ["Ivan", "Petkan"], isNew: true },
    { title: 'Spiderman', year: 2010, cast: ["Ivan", "Petkan"], isNew: true },
    { title: 'Ironman', year: 2012, cast: ["Ivan", "Petkan"], isNew: true },
];

// function App() {
//     return (
//         <MoviesList movies={movies}/>
//     )
// }

function App() {
    return (
        <div>
            <Timer start={0} speed={1000}/>
            <Timer start={0} speed={667}/>
            {/* <Timer start={15}/> */}
            <Counter canReset={true}/>
            
            <MoviesList movies={movies}/>
        </div>
        
    )
}

export default App;
