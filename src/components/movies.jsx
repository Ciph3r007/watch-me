import React, { useState, useEffect } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import ListGroup from "./common/listgroup";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

  const handleLike = (movie) => {
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    setMovies([...movies]);
  };

  const handleDelete = (movie) => {
    const filtered = movies.filter((m) => m._id !== movie._id);
    setMovies(filtered);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectGenre = (genre) => {
    console.log(genre);
  };

  if (movies.length === 0) return <p>No movies in the database</p>;

  const moviesOnPage = paginate(movies, currentPage, pageSize);
  return (
    <div className="row">
      <div className="col-2">
        <ListGroup items={genres} onItemSelect={handleSelectGenre} />
      </div>
      <div className="col">
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
            {moviesOnPage.map((movie) => (
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
        <Pagination
          itemsCount={movies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Movies;
