import { Navigate, useParams, useNavigate, Link} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import { Comment } from './Comment/Comment';
import { AuthContext } from '../../contexts/AuthContexts';
import { deleteGame } from '../../services/gameService';
import { EditGame } from '../EditGame/EditGame';

export const GameDetails = () => {
    const { userId, token } = useContext(AuthContext)
    const [game, setGame] = useState({});
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const { gameId } = useParams();
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();
    const isOwner = game._ownerId === userId

    // console.log(userId);
    // console.log(game._id);
    // console.log(gameId);
    useEffect(() => {
        gameService.get(gameId)
            .then(result => setGame(result))

    }, [gameId]);

    useEffect(() => {
        commentService.getComments(gameId)
            .then(result => {
                setComments(result)
                // console.log(result);    
            })
    }, [gameId]);


    const onCommentSubmit = async (e) => {
        e.preventDefault();
        const newComment = await commentService.createComment({
            gameId,
            username,
            text
        });
        setComments(state => [...state, newComment])
        setUsername("");
        setText("")
    };
    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    };
    const onTextChange = (e) => {
        setText(e.target.value)
    };

    const onDeleteClick = async (e) => {
        await deleteGame(game._id, token);
        navigate("/catalogue")
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>

                    <ul>
                        {comments.map(x => (<Comment key={x._id} comment={x} />))}
                    </ul>

                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                { isOwner && (
                    <div className="buttons">
                        {/* <Link to={<EditGame game />} className="button">Edit</Link> */}
                        {/* <a href="#" className="button">Edit</a> */}
                        <Link to={`/edit/${gameId}`} className="button">Edit</Link>
                        <button className="button" onClick={() => onDeleteClick(game._id)}>Delete</button>
                    </div>
                    )
                }

            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input
                        type="text"
                        name='username'
                        placeholder='username'
                        value={username}
                        onChange={onUsernameChange}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={text}
                        onChange={onTextChange}></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                    />
                </form>
            </article>

        </section>
    )
}