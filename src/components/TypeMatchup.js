import React from 'react';
import Widget from './Widget';
import formatName from '../utils/formatName';
import pokemonTypes from '../utils/pokemonTypes';
import pokemonDamage from '../utils/pokemonDamage';

export default function TypeMatchup({types}) {
    const typesList = [
        'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 
        'ghost', 'dragon', 'dark', 'steel', 'fairy'
    ];
    // Arrays for storing the required types as per category
    let superEffective = [];
    let normalEffective = [];
    let notEffective = [];

    // Map the types to required arrays
    for (let type of types) {
        pokemonDamage[type.type.name].forEach((damage, index) => {
            if (damage > 1) superEffective.push(typesList[index])
            else if (damage === 1) normalEffective.push(typesList[index])
            else notEffective.push(typesList[index])
        })
    }

    return (
        <Widget>
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-50">
                Type Matchups
            </h3>
            <p className="text-xl mb-2 dark:text-gray-50">
                Strong against
            </p>
            <div>
                {[...new Set(superEffective)].map((type ,index) => (
                    <span 
                    className='text-white px-2 py-1 rounded-md mr-2 mb-2 inline-block'
                    style={{backgroundColor: pokemonTypes[type]}}
                    key={index}
                    >
                        {formatName(type)}
                    </span>
                ))}
            </div>            
            <p className="text-xl mt-4 mb-2 dark:text-gray-50">
                Neutral against
            </p>
            <div>
                {[...new Set(normalEffective)].map((type ,index) => (
                    <span 
                    className='text-white px-2 py-1 rounded-md mr-2 mb-2 inline-block'
                    style={{backgroundColor: pokemonTypes[type]}}
                    key={index}
                    >
                        {formatName(type)}
                    </span>
                ))}
            </div>            
            <p className="text-xl mt-4 mb-2 dark:text-gray-50">
                Weak against
            </p>
            <div>
                {[...new Set(notEffective)].map((type ,index) => (
                    <span 
                    className='text-white px-2 py-1 rounded-md mr-2 mb-2 inline-block'
                    style={{backgroundColor: pokemonTypes[type]}}
                    key={index}
                    >
                        {formatName(type)}
                    </span>
                ))}
            </div>            
        </Widget>
    )
}
