import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const BASE_URL = 'https://swapi.dev/api';

const CharacterFilms = () => {
    const [films, setFilms] = useState([]);

    const { characterId } = useParams();

    // console.log(characterId);

    useEffect(() => {
        fetch(`${BASE_URL}/films`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFilms(data.results)
            })
    }, [characterId]);

    return (
        <>
            <h1>Character Films:</h1>
            <ul>
                {films.map(x => <li key={x.url}><Link to={x.url}>{x.title}</Link></li>)}
            </ul>
        </>
    )
}

export default CharacterFilms;