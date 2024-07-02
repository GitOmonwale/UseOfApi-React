import { useState, useEffect } from 'react'
import './index.css'
import searchIcon from './assets/search.svg'
import MovieCard from './movieCard';
const apiUrl = 'http://www.omdbapi.com?apikey=b90dfb57'
// const movie1 = {
//   Title: 'Reign of Judges: Title of Liberty - Concept Short',
//   Year: '2018',
//   imdbID: 'tt4275958',
//   Type: 'movie',
//   Poster: 'https://m.media-amazon.com/images/M/MV5BYWM0MDI1Zm…TI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg'
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])
  return (
    <>
      <div className='app'>
        <h1>MoviesLand</h1>
        <div className='search'>
          <input
            type="text"
            placeholder='Search movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}/>
        </div>
      {
        movies?.length > 0 
        ? (
          <div className='container'>
          {
            movies.map((movie) => (
              <MovieCard movie={movie}></MovieCard>
            ))
          }
        </div>
        ):(
          <div className='empty'>
           <h3>No Movies Found</h3>
        </div>
        )
      }
             
            
      </div>
    </>
  )
}

export default App
