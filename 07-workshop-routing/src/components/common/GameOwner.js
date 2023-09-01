import { useAuthContext } from "../../contexts/AuthContexts";
import { useGamesContext } from "../../contexts/GamesContexts";
import { Navigate, Outlet, useParams } from "react-router-dom";

export const GameOwner = ({ children }) => {
    const { gameId } = useParams();
    // console.log(gameId);
    const { getGame } = useGamesContext();
    const { userId } = useAuthContext();
    const currentGame = getGame(gameId);
    if (currentGame && currentGame._ownerId !== userId) {
        return <Navigate to={`/details/${gameId}`} />
    };
    return children ? children : <Outlet />
}