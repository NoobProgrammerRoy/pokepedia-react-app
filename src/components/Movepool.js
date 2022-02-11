import React from 'react';
import Widget from './Widget';
import formatName from '../utils/formatName';

export default function Movepool({moves}) {
    return (
        <Widget>
            <h3 className='text-2xl font-semibold mb-4 dark:text-gray-50'>
                Pokemon Movepool
            </h3>
            <div className="max-h-80 overflow-auto dark:text-gray-50">
                {moves.map((move, index) => <p 
                    className='my-1'
                    key={index}
                    >
                    {formatName(move.move.name)}
                </p>
                )}
            </div>
        </Widget>
    )
}
