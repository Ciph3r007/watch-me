import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

const MoviesTable = ({ movies, sortBy, onLike, onDelete, onSort }) => {
  const columns = [
    { key: "title", label: "Title" },
    { key: "genre.name", label: "Genre" },
    { key: "numberInStock", label: "Stock" },
    { key: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} sortBy={sortBy} onSort={onSort} />
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
