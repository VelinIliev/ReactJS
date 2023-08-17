// import logo from './logo.svg';

import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
import Link from './components/Link';
import React from 'react';

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
const movieData = [
    { id: 1, title: 'Man of steel', year: 2008, cast: ["Ivan", "Petkan"], isNew: true, selected: false },
    { id: 2, title: 'Spiderman', year: 2010, cast: ["Ivan", "Petkan"], isNew: false, selected: false },
    { id: 3, title: 'Ironman', year: 2012, cast: ["Ivan", "Petkan"], isNew: true, selected: false },
    { id: 4, title: 'Ironman2', year: 2018, cast: ["Ivan", "Petkanov"], isNew: true, selected: false  },
    { id: 5, title: 'Spiderman', year: 2018, cast: ["Ivan", "Petkanov"], isNew: true, selected: false },
];

// function App() {
//     return (
//         <MoviesList movies={movies}/>
//     )
// }

function App() {
    const [movies, setMovies] = React.useState([])
    
    React.useEffect(() => {
        fetch('http://localhost:3000/movies.json')
        .then(res => res.json())
        .then(data => setMovies(data.movies))
    }, []);

    const deleteMovie = function(id){
        setMovies(state => state.filter(x => x.id !== id))
        
    }
    
    const selectMovie = (id) => {
        setMovies(state => state.map(x => ({ ...x, selected: x.id === id})))
        // console.log("selected");
    }

    return (
        <div>
            <Timer start={0} speed={1000} />
            <Timer start={0} speed={667} />
            <Counter canReset={true} />
            <MoviesList movies={movies} deleteMovie={deleteMovie} selectMovie={selectMovie} />
        </div>
    )
}

export default App;
