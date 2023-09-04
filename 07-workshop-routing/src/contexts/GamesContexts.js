import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as gameService from "../services/gameService"

export const GamesContext = createContext();

export const GamesProvider = ({
    children,
}) => {
    const [games, setGames] = useState([]);
    const [latestGames, setlatestGames] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then(data => {
                setGames(data);
            })
    }, []);

    useEffect(() => {
        gameService.getLatestGames()
            .then(data => {
                setlatestGames(data);
            })
    }, [games]);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);
        setGames(state => [...state, newGame])
        navigate('/catalogue');
    };

    const onGameEditSubmit = async (values) => {
        const id = (values._id);
        const result = await gameService.editGame(id, values);
        setGames(state => state.map(x => x._id === id ? values : x));
        navigate(`/details/${id}`);
    };

    const onDeleteClick = async (id) => {
        const game = games.find(x => x._id === id)
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${game.title}`);

        if (result) {
            await gameService.deleteGame(id);
            setGames(state => state.filter(x => x._id !== id));
            navigate("/catalogue")
        }
    };

    const getGame = (gameId) => {
        const game = games.find(game => game._id === gameId);
        return game;
    };

    const context = {
        onCreateGameSubmit,
        onGameEditSubmit,
        onDeleteClick,
        games,
        latestGames,
        getGame,
    };

    return (
        <>
            <GamesContext.Provider value={context}>
                {children}
            </GamesContext.Provider>
        </>
    )
};

export const useGamesContext = () => {
    const context = useContext(GamesContext);
    return context
}