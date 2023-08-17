// let render = 0
import React from "react";
import styles from './Movie.module.css'

const Movie = ({ movie, deleteMovie, selectMovie }) => {

    React.useEffect(() => {
        console.log(`Movie ${movie.title} is created`);
    }, [movie.title])

    React.useEffect(() => {
        console.log(`Movie ${movie.title} is updated`);
    }, [movie.selected, movie.title])

    React.useEffect(() => {
        return () => {
            console.log(`Movie ${movie.title} is deleted`);
        };
    }, [movie.title])

    if (movie.isNew) {
        return (
            <div className={styles['single-movie']}>
                <h3 style={{ color: movie.selected ? "red" : "black" }}>{movie.title} ({movie.year}) </h3>
                <p>Cast: {movie.cast.join(", ")}</p>
                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                <button onClick={() => selectMovie(movie.id)}>Select</button>
            </div>
        )
    } else {
        return (
            <div className={styles['old-movie']}>
                <p>Old {movie.selected ? "- selected"  : null}</p>
                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                <button onClick={() => selectMovie(movie.id)}>Select</button>
            </div>)
    }
}

export default Movie