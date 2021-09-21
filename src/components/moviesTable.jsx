import React from "react";
import Like from "./common/like";
import Table from "./common/table";

const MoviesTable = ({ movies, sortBy, onLike, onDelete, onSort }) => {
  const columns = [
    { key: "title", label: "Title" },
    { key: "genre.name", label: "Genre" },
    { key: "numberInStock", label: "Stock" },
    { key: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table data={movies} columns={columns} sortBy={sortBy} onSort={onSort} />
  );
};

export default MoviesTable;
