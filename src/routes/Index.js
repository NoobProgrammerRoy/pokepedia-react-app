import React from 'react';
import Page from '../components/Page';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <Page>
            {/* Title */}
            <h1 className="md:text-center text-3xl md:text-5xl font-bold mb-8 md:mb-16 pt-8 md:pt-16 dark:text-gray-50">
                PokeDB - Pokemon Database and Analytics
            </h1>
            {/* Description */}
            <p className="text-gray-700 dark:text-gray-400">
                {/* PokeDB provides users with detailed information
                about different species of pokemon, such as stats,
                evolutionary line, move pool and more. Users can also
                build their very own pokemon team and compare it
                against the strongest trainers from the core series games.
                Also, get detailed statistics for each pokemon region such
                as inhabitants, species, power rankings and more. */}
                PokeDB is an online pokemon platform that provides users
                with detailed information about the different species of 
                pokemon, such as stats, star ratings, pokedex details, 
                movepool, type matchups and more. Also create your very own 
                pokemon team. Powered by the awesome PokeAPI.
            </p>
            {/* Navigation links */}
            <div className="flex flex-col md:flex-row justify-center items-center my-8">
                <Link 
                to='/pokemon'
                className='text-center text-white bg-purple-500 hover:bg-purple-600 rounded-md border-2 border-purple-500 
                hover:border-purple-600 w-full md:w-max py-1 md:px-16 mb-2 md:mx-2'
                >
                    Try Now
                </Link>
                {/* <Link 
                to='/about'
                className='text-center bg-white hover:bg-gray-100 rounded-md border-2 border-purple-500 hover:border-purple-600 w-full 
                md:w-max py-1 md:px-16 mb-2 md:mx-2'
                >
                    About
                </Link> */}
            </div>        
        </Page>
    )
}
