import { Navigate, useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import { Comment } from './Comment/Comment';
import { AuthContext, useAuthContext } from '../../contexts/AuthContexts';
import { deleteGame } from '../../services/gameService';
import { EditGame } from '../EditGame/EditGame';
import { useForm } from '../../hooks/useForm';
import { AddComment } from './AddComment/AddComment';

export const GameDetails = () => {
    const { userId, isAuthenticated } = useAuthContext(AuthContext)
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    
    const navigate = useNavigate();
    const isOwner = game._ownerId === userId;
    
    useEffect(() => {
        gameService.get(gameId)
            .then(result => setGame(result))

    }, [gameId]);

    useEffect(() => {
        commentService.getComments(gameId)
            .then(result => {
                setComments(result)
            })
    }, [gameId]);

    const onCommentSubmit = async (values) => {
        const newComment = await commentService.createComment(gameId, values.comment)
        setComments(state => [...state, newComment])
    };
    

    const onDeleteClick = async (e) => {
        await deleteGame(game._id);
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

                <div className="details-comments">
                    <h2>Comments:</h2>

                    <ul>
                        {comments.map(x => (<Comment key={x._id} comment={x} />))}
                    </ul>

                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/edit/${gameId}`} className="button">Edit</Link>
                        <button className="button" onClick={() => onDeleteClick(game._id)}>Delete</button>
                    </div>
                )
                }

            </div>
            {isAuthenticated && <AddComment game={game} onCommentSubmit={onCommentSubmit}/>}
            

        </section>
    )
}