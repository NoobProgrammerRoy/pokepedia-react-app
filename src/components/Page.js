import React, { useState } from 'react';
import Nav from './Nav';

export default function Page({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        // Set dark mode as false and change background color
        if (!localStorage.darkMode || localStorage.darkMode === 'false') {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-gray-900');
            return false;
        }
        // Set dark mode as true and change background color
        document.body.classList.add('bg-gray-900');
        document.body.classList.remove('bg-white');
        return true;
    });

    return (
        <>
            {/* Navbar */}
            <Nav
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            {/* Main content */}
            <main 
                className={`${darkMode ? 'dark' : ''}`}
            >
                <section className='dark:bg-gray-900'>
                    <div className="max-w-screen-xl mx-auto px-4">
                        {children}
                    </div>
                </section>
            </main>
        </>
    )
}