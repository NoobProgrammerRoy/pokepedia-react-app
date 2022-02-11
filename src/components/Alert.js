import React from 'react';

export default function Alert({message, color, bgColor, borderColor}) {
    return (
        <div className='flex flex-row justify-center my-4'>
            <p className={`${color} ${bgColor} ${borderColor} px-12 py-2 rounded-md border-2 w-max`}>
                {message}    
            </p>
        </div>
    )
}
