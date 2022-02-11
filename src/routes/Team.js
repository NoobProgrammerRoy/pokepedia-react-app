import React, { useState} from 'react';
import Page from '../components/Page';
import { strToArr } from '../utils/useManageTeam';
import formatName from '../utils/formatName';
import { Link } from 'react-router-dom';

export default function Team() {
    const [team, setTeam] = useState(getTeam);

    // Function to clear team and localStorage
    function clearTeam() {
        localStorage.removeItem('team');
        setTeam(null); 
    }

    return (
        <Page>
            <div className='flex flex-row justify-between items-end pt-4 mb-4 relative'>
                <h1 className="md:text-center md:mx-auto text-3xl font-bold dark:text-gray-50">
                    My Team
                </h1>
                <span 
                    className='text-sm text-purple-600 font-semibold md:absolute md:right-0
                    cursor-pointer hover:text-purple-800'
                    onClick={clearTeam}
                >
                    Clear Team
                </span>
            </div>
            {team ?
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {team.map((pokemon, index) => <Link
                        to={`/pokemon/${pokemon}`}
                        key={index}
                        className='inline-block rounded-md p-2 bg-gray-50 border-2 border-gray-100 text-xl font-semibold 
                        cursor-pointer hover:border-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:border-purple-600'
                    >
                        {formatName(pokemon)}
                    </Link>
                    )}
                </div>
                :
                <p className='text-gray-700 md:text-center dark:text-gray-400'>
                    There is no pokemon currently in your team!
                </p>
            }
        </Page>
    )
}

function getTeam() {
    const team = localStorage.team;
    if (!team) return null;
    return strToArr(team);
}