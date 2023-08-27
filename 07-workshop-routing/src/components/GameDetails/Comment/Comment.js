export const Comment = ({comment}) => {
    return (
        <li className="comment">
            <p>{comment.username}: {comment.text}</p>
        </li>
    )
}