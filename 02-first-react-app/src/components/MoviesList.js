import Movie from "./Movie"

const MoviesList = (props) => {
    return (<div className="App">
        <h1>Movie List</h1>
        {props.movies.map(movie => (
            <Movie
                title={movie.title}
                year={movie.year}
                cast={movie.cast}
                isNew={movie.isNew} />
        ))}

        <Movie
            title="Man of Steel"
            year="2022"
            cast={['Ivan', "Petkan"]}
            isNew={true} />
    </div>
    )
}

export default MoviesList