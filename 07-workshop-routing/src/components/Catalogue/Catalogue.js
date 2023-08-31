import { CatalogueItem } from "./CatalogueItem/CatalogueItem"
import { useContext } from "react";
import { useGamesContext } from "../../contexts/GamesContexts";

export const Catalogue = () => {
    const { games } = useGamesContext();
    // console.log(...games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(x => <CatalogueItem key={x._id} game={x} />)}
            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}

        </section>
    )
}