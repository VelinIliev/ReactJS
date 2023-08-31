import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as gameService from "../services/gameService"

export const GamesContext = createContext();

export const GamesProvider = ({
    children,
}) => {
    const [games, setGames] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then(data => {
                setGames(data);
            })
    }, []);

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
        await gameService.deleteGame(id);
        setGames(state => state.filter(x => x._id !== id ));
        navigate("/catalogue")
    }

    const context = {
        onCreateGameSubmit,
        onGameEditSubmit,
        onDeleteClick,
        games,
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