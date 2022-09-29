import React, { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import axios from 'axios';
import './App.css';

 const PageContext = createContext()

function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
          .then((res) => {
            console.log(res.data.results)
            setMovieList(res.data.results)
          })
  }

  useEffect(() => {
    getData()
  }, [page])

  const addMovie = (movie) => {
     setWatchList([...list, movie])
  }

  const removeMovie = (movie) => {
    const newState = list.filter((item) => {
      return item !== movie
    })
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <PageContext.Provider value={{page, setPage}} >
        <MovieScreen
        addMovie={addMovie}
        list={list}
        //page={page}
        //setPage={setPage}
        movieList={movieList}
        removeMovie={removeMovie}
        />
        </PageContext.Provider>
        <Watchlist list={list} removeMovie={removeMovie} page={page} setPage={setPage}/>
      </main>
    </div>
  );
}

export default App;
export {PageContext}
