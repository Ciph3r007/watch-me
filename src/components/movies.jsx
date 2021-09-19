import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

function Movies() {
  const [movies, setMovies] = useState(getMovies());

  const handleLike = (movie) => {
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    setMovies([...movies]);
  };

  const handleDelete = (movie) => {
    const filtered = movies.filter((m) => m._id !== movie._id);
    setMovies(filtered);
  };

  if (movies.length === 0) return <p>No movies in the database</p>;

  return (
    <>
      <p>There are {movies.length} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Movies;