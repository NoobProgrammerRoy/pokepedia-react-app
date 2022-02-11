import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PokemonInput() {
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                navigate(`/pokemon/${pokemon}`)
            }} 
        >
            <div className='flex flex-row items-center h-8'>
                <input
                    type="text"
                    onChange={e => setPokemon(e.target.value)}
                    className='border-2 rounded-md border-purple-500 focus:border-purple-600 w-full p-1 h-full'
                    placeholder='Eg: Pikachu'
                    required
                />
                <button
                    className='text-center bg-purple-500 hover:bg-purple-600 rounded-md h-full px-1 ml-2'
                >
                    &#x1F50D;
                </button>
            </div>
        </form>
    )
}
