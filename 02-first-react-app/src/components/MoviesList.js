import Movie from "./Movie"
import React from "react";

const MoviesList = ({ movies, deleteMovie, selectMovie }) => {
    // let moviesElements = []

    // movies.forEach(element => {
    //     moviesElements.push(<div className="single-movie"><Movie movie={element} /></div>)
    // });

    // return (
    //     <div className="moviesList">
    //         <h1>Movie List</h1>
    //         {moviesElements}
    //     </div>
    // )

    return (
        <div className="movies-list">
            <h1>Movie List</h1>

            {movies.map((movie, index) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    deleteMovie={deleteMovie}
                    selectMovie={selectMovie}
                />
            )
            )
            }


            {/* <Movie movie={
                {
                    'title': 'Man of Steel',
                    'year': '2022',
                    'cast': ['Ivan', "Petkan"],
                    "isNew": true
                }
            } /> */}

            {/* <Movie
                title="Man of Steel"
                year="2022"
                cast={['Ivan', "Petkan"]}
                isNew={true} /> */}
        </div>
    )
}

export default MoviesList