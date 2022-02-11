import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './routes/Index';
import Pokemon from './routes/Pokemon';
import PokemonNested from './routes/PokemonNested';
import Team from './routes/Team';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/pokemon' element={<Pokemon />} >
        <Route path=':name' element={<PokemonNested />} />
      </Route>
      <Route path='/team' element={<Team />} />
    </Routes>
  )
}
