import React from 'react';

export default function Widget({ children }) {
    return (
        <div className='rounded-md p-2 bg-gray-50 shadow-md shadow-gray-200 dark:bg-gray-800 dark:shadow-purple-600 dark:shadow-sm'>
            {children}
        </div>
    )
}
