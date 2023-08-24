import { useEffect, useState } from "react";
import style from './Characters.module.css'
import CharacterListItem from "./CharacterListItem";

const BASE_URL = 'https://swapi.dev/api/people';

const CharactersList = () => {

    const [characters, setCharacters] = useState([]);
    // console.log(characters);
    useEffect(() => {
        if (characters.length === 0) {
            fetch(BASE_URL)
                .then(res => res.json())
                .then(data => {
                    setCharacters(data.results);
                })
        }

    });

    return (
        <>
            <h1>Star Wars Characters</h1>
            {(characters.length === 0) && <p>Loading...</p>}
            <ul className={style.characters}>

                {characters.map(x => <CharacterListItem key={x.url} {...x} />)}
            </ul>
        </>
    );
}

export default CharactersList