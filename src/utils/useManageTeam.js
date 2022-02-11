import { useState, useEffect } from 'react'

// Function to check whether pokemon exists in the localStorage
export function checkInTeam(pokemon) {
    const team = localStorage.team;
    // Returns true if pokemon is in localStorage / team
    if (strToArr(team).some(item => item === pokemon)) return true;
    // Returns false if pokemon is not present
    else return false;
}

// Convert team string to team array
export function strToArr(str) {
    if (!str) return [];
    return str.split(',');
}

// This is a custom hook to manage pokemon teams
// Returns two values
// 1. State (whether the pokemon is present in the team or not)
// 2. Function to add/remove pokemon from team
export default function useManageTeam(pokemonName) {
    const [ isPokemonInTeam, setManagePokemon ] = useState(() => checkInTeam(pokemonName));

    useEffect(() => {
        setManagePokemon(checkInTeam(pokemonName))
    }, [pokemonName])

    function togglePokemon(pokemon) {
        const team = localStorage.team;
        // Remove pokemon if already present in team
        if (strToArr(team).some(item => item === pokemon)) {
            localStorage.team = (strToArr(team).filter(item => item !== pokemon)).toString();
            setManagePokemon(false);
        }
        // Add pokemon if not present in team
        else {
            const newTeam = strToArr(localStorage.team);
            newTeam.push(pokemon)
            localStorage.team = (newTeam).toString()
            setManagePokemon(true);
        }
    }

    return [ isPokemonInTeam, togglePokemon ];
}
