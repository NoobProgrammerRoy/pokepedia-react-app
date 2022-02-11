import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import Image from '../components/Image';
import Details from '../components/Details';
import Stats from '../components/Stats';
import Movepool from '../components/Movepool';
import TypeMatchup from '../components/TypeMatchup';
import { useParams } from 'react-router-dom';

export default function PokemonNested() {
    const params = useParams();
    const [pokemonData, setPokemonData] = useState();
    const formattedName = (params.name).trim().toLowerCase().replace(' ', '-');

    // Fetch pokemon data from API
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${formattedName}`)
            .then(res => {
                if (!res.ok)
                    return null;
                return res.json();
            })
            .then(data => setPokemonData(data))
            .catch(err => console.log(err));
    }, [params.name])

    return (
        <>
            {pokemonData ?
                <>
                    <Alert
                        message='Pokemon found!'
                        color='text-green-700'
                        bgColor='bg-green-300'
                        borderColor='border-green-700'
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                        {/* Image widget */}
                        <Image
                            img={pokemonData.sprites.other['official-artwork'].front_default}
                            name={pokemonData.name}
                            total={pokemonData.stats.map(stat => stat.base_stat).reduce((pre, curr) => pre + curr)}
                        />
                        {/* Details widget */}
                        <Details
                            id={pokemonData.id}
                            height={pokemonData.height}
                            weight={pokemonData.weight}
                            types={pokemonData.types}
                            ability={pokemonData.abilities[0].ability.name}
                        />
                        {/* Stats widget */}
                        <Stats stats={pokemonData.stats} />
                        {/* Movepool widget */}
                        <Movepool moves={pokemonData.moves} />
                        {/* Type matchup widget */}
                        <TypeMatchup types={pokemonData.types} />
                    </div>
                </>
                :
                pokemonData === undefined ? <></>
                :
                <Alert
                    message='Could not find pokemon!'
                    color='text-red-700'
                    bgColor='bg-red-300'
                    borderColor='border-red-700'
                />
            }
        </>
    )
}
