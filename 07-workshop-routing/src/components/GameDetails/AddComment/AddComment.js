import { useState } from "react";
import * as commentService from '../../../services/commentService';
import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ game, onCommentSubmit }) => {
    const gameId = game._id
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const { values, changeHandler, onSubmit } = useForm({
        comment: ""
    }, onCommentSubmit)

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={values.comment}
                    onChange={changeHandler}>
                </textarea>
                <input
                    className="btn submit"
                    type="submit"
                />
            </form>
        </article>
    )
}