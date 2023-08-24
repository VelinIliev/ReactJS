import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Routes, Route} from 'react-router-dom';
import styles from './Navigation.module.css'
import CharacterFilms from './CharacterFilms';

const BASE_URL = 'https://swapi.dev/api/people';

const Character = () => {
    const { characterId } = useParams();
    const navigate = useNavigate();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`${BASE_URL}/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data);
            })
    }, [characterId]);

    const onBackButtonClick = (e) => {
        // navigate(-1);
        navigate('/about');
    }

    return (
        <>
            <h1>Character Page</h1>
            <p>Name: {character.name}</p>
            <p>Birth year: {character.birth_year}</p>
            <p>Eye color: {character.eye_color}</p>
            <p>Height: {character.height}</p>
            <button onClick={onBackButtonClick}>Back</button>

            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="films">Films</Link></li>
                    <li><Link to="vehicles">Vehicles</Link></li>
                    <li><Link to="starships">Starships</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/films" element={<CharacterFilms films={character.films}/>}>Films</Route>
                <Route path="/vehicles" element={<h5>Vehicles</h5>}>Films</Route>
                <Route path="/starships" element={<h5>Starships</h5>}>Films</Route>
            </Routes>
        </>

    );
}

export default Character