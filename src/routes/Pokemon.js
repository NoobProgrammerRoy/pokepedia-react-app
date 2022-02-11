import React from 'react';
import Page from '../components/Page';
import PokemonInput from '../components/PokemonInput';
import { Outlet } from 'react-router-dom';

export default function Pokemon() {
    return (
        <Page>
            <h1 className="md:text-center text-3xl font-bold mb-4 pt-4 dark:text-gray-50">
                Pokemon Search
            </h1>
            {/* Search box */}
            <PokemonInput />
            {/* Pokemon nested route */}
            <Outlet />
        </Page>
    )
}
