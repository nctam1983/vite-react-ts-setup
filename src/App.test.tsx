import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('App', () => {
    it('Renders hello world', () => {
        render(<WrappedApp />);

        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello world!');
    });

    it('Render not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/this-route-does-not-exit']}>
                <App />
            </MemoryRouter>
        );

        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found');
    });
});
