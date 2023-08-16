let render = 0
 
const Movie = (props) => {

    // console.log(`render Movie - ${++render}`);
    if (props.isNew) {
        return (
            <div>
                <h3>{props.title} ({props.year})</h3>
                <p>Cast: {props.cast.join(", ")}</p>
            </div>
        )
    } else {
        return <p>{props.movie}</p>
    }
}

export default Movie