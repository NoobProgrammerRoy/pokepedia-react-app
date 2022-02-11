import React from 'react';
import Widget from './Widget';

export default function Stats({stats}) {
    const statsList = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
    return (
        <Widget>
            <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 dark:text-gray-50">
                    Pokemon Stats
                </h3>
                {stats.map((stat, index) => (
                <div key={index}>
                    <span className='text-gray-700 dark:text-gray-50'>
                        {statsList[index]}
                    </span>
                    <div
                    className='w-full bg-white rounded-md h-2 mt-1 mb-4 dark:bg-gray-50'
                    key={index}
                    >
                        <div 
                        className='bg-purple-600 h-full rounded-md cursor-pointer'
                        style={{width: ((stat.base_stat * 100) / 255 ).toString() + '%'}}
                        title={stat.base_stat}
                        />
                    </div>
                </div>
                )
                )}
            </div>
        </Widget>
    )
}