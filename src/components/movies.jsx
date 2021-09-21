import React, { useState, useEffect } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listgroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import paginate from "./utils/paginate";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState();

  useEffect(() => {
    setMovies(getMovies());
    setGenres([{ _id: 0, name: "All movies" }, ...getGenres()]);
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
    setCurrentGenre(genre);
    setCurrentPage(1);
  };

  if (movies.length === 0) return <p>No movies in the database</p>;

  const filteredMovies =
    currentGenre && currentGenre._id
      ? movies.filter((movie) => movie.genre._id === currentGenre._id)
      : movies;

  const moviesOnPage = paginate(filteredMovies, currentPage, pageSize);

  return (
    <div className="row">
      <div className="col-2">
        <ListGroup
          items={genres}
          currentItem={currentGenre}
          onItemSelect={handleSelectGenre}
        />
      </div>
      <div className="col">
        <p>There are {filteredMovies.length} movies in the database</p>
        <MoviesTable
          movies={moviesOnPage}
          onLike={handleLike}
          onDelete={handleDelete}
        />
        <Pagination
          itemsCount={filteredMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Movies;
