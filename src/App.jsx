import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import AddMovie from './components/AddMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<MovieList/>} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/add-movie' element={<AddMovie />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App