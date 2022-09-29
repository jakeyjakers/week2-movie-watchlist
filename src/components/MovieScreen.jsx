import React, {useContext} from "react";
import MovieCard from "./MovieCard";
import { PageContext } from "../App";

const MovieScreen = ({movieList, addMovie, removeMovie, list}) => {

     const {page, setPage} = useContext(PageContext)

    const movieDisplay = movieList.map((movie, index) => {
        return (
            <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} list={list}/>
        )
    })    

    const increment = () => {
        setPage(page + 1)
    }

    const decrement = () => {
        if (page === 1) {
            return
        }
        else {
            setPage(page - 1)
        }
    }

    return (

        <div className="page">
            <h1>Bob's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className="btn-container">
                <button onClick={decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen