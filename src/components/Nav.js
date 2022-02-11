import React from 'react';
import { Link } from 'react-router-dom';
import '../toggleButton.css';

export default function Nav({darkMode, setDarkMode}) {
	function toggleDarkMode() {
		if (localStorage.darkMode === 'true') {
			document.body.classList.add('bg-white');
			document.body.classList.remove('bg-gray-900');
			localStorage.darkMode = 'false';
		}
		else { 
			document.body.classList.add('bg-gray-900');
			document.body.classList.remove('bg-white');
			localStorage.darkMode = 'true';
		}
		setDarkMode(() => !darkMode);
	}

	return (
		<header className={`border-b sticky top-0 ${darkMode ? 'bg-gray-900 border-purple-300' : 'bg-white border-gray-300'}`}>
			<nav className='container mx-auto p-2 font-semibold flex flex-col md:flex-row justify-center md:justify-between 
				items-center w-full'
			>
				<div>
					<Link
						to='/'
						className={`text-2xl md:ml-4 ${darkMode ? 'text-gray-50' : 'text-black'}`}
					>
						PokeDB
					</Link>
				</div>
				<div className={`mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-black'}`}>
					<Link
						to='/pokemon'
						className={`mr-2 md:mr-4 ${darkMode ? 'hover:text-gray-50' : 'hover:text-gray-900'}`}
					>
						Pokemon
					</Link>
					<Link
						to='/team'
						className={`mx-2 md:mx-4 ${darkMode ? 'hover:text-gray-50' : 'hover:text-gray-900'}`}
					>
						Team
					</Link>
					<label className="switch ml-2 md:ml-4">
  						<input 
							type="checkbox" 
							onChange={toggleDarkMode}
							checked={darkMode}
						/>
  						<span className="slider round" />
					</label>
				</div>
			</nav>
		</header>
	)
}
