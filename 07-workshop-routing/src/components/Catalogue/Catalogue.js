import { CatalogueItem } from "./CatalogueItem/CatalogueItem"

export const Catalogue = ({games}) => {
    // console.log(...games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(x => <CatalogueItem key={x._id} game={x}/>)}
            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
            
        </section>
    )
}