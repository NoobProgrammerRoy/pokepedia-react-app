import React from 'react';
import Widget from './Widget';
import formatName from '../utils/formatName';
import useManageTeam from '../utils/useManageTeam';

export default function Image({img, name, total}) {
    const [ isPokemonInTeam, togglePokemon ] = useManageTeam(name);
    
    // Convert total into rating for displaying star rating
    const rating = (total / 120) > 5 ? 5 : Math.floor(total / 120);
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i}>&#11088;</span>);
    }

    return (
        <Widget>
            <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold dark:text-gray-50">
                    {formatName(name)}
                </h3>
                <button 
                className={`text-xl ${isPokemonInTeam ? 'text-yellow-500' : 'text-black dark:text-gray-50' }`}
                title={isPokemonInTeam ? 'Remove from team' : 'Add to team'}
                onClick={() => togglePokemon(name)}
                >
                    &#9734;
                </button>
            </div>
            <img 
            className='mx-auto w-1/2'
            src={img} 
            alt={name} 
            />
            
            <p className='text-center mb-2'>
                {stars}
            </p>
        </Widget>
    )
}
