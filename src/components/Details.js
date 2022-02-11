import React from 'react';
import Widget from './Widget';
import pokemonTypes from '../utils/pokemonTypes';
import formatName from '../utils/formatName';

export default function Details({id, height, weight, types, ability}) {
    return (
        <Widget>
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-50">
                Pokemon Data
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-2">
                <div>
                    <h3 className="text-xl dark:text-gray-50">
                        Pokemon ID
                    </h3>
                    <p className='text-base text-gray-700 dark:text-gray-400'>
                        {id}
                    </p>               
                </div>
                <div>
                    <h3 className="text-xl dark:text-gray-50">
                        Ability
                    </h3>
                    <p className='text-base text-gray-700 dark:text-gray-400'>
                        {formatName(ability)}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl dark:text-gray-50">
                        Height
                    </h3>
                    <p className='text-base text-gray-700 dark:text-gray-400'>
                        {height / 10} m
                    </p>            
                </div>
                <div>
                    <h3 className="text-xl dark:text-gray-50">
                        Weight
                    </h3>
                    <p className='text-base text-gray-700 dark:text-gray-400'>
                        {weight / 10} kg
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2 dark:text-gray-50">
                        Type
                    </h3>
                    <p className='text-base text-gray-700 dark:text-gray-400'>
                        {types.map((type, index) => <span 
                        className='text-white px-2 py-1 rounded-md mr-2 mb-2 inline-block'
                        style={{backgroundColor: pokemonTypes[type.type.name]}}
                        key={index}
                        >
                            {formatName(type.type.name)}
                        </span>)}
                    </p>
                </div>
            </div>           
        </Widget>
    )
}
