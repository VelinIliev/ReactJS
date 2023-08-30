import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { get } from "../../services/gameService";

export const EditGame = ({onGameEditSubmit}) => {
    const { gameId } = useParams();
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        gameId: gameId,
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        summary: ""

    }, onGameEditSubmit);

    useEffect(() => {
        get(gameId)
            .then(result => changeValues(result));
    }, [gameId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="post" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={values.maxLevel}
                        onChange={changeHandler}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values.summary}
                        onChange={changeHandler}
                    >
                    </textarea>
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />

                </div>
            </form>
        </section>
    )
}