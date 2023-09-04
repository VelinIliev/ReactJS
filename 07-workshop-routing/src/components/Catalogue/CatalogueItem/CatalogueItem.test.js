import { render, screen } from '@testing-library/react';
import { CatalogueItem } from './CatalogueItem';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe("Catalogue item component", () => {
    test("Show title", () => {
        const game = {
            imageUrl: "imageUrl",
            category: 'category',
            title: "Some Title",
            _id: 'id'
        }
        render(
            <BrowserRouter>
                <CatalogueItem game={game} />
            </BrowserRouter>
        );

        expect(screen.queryByText(game.title)).toBeInTheDocument();
        expect(screen.queryByText(game.title)).toBeInTheDocument();
    });

    test("Click on details", async () => {
        global.window = { location: { pathname: null } }
        const game = {
            imageUrl: "imageUrl",
            category: 'category',
            title: "Some Title",
            _id: 'id'
        }
        render(
            <BrowserRouter>
                <CatalogueItem game={game} />
            </BrowserRouter>
        );
            userEvent.click(screen.queryByText('Details'))
        
            expect(global.window.location.pathname).toContain(`/details/${game._id}`)
    });
});