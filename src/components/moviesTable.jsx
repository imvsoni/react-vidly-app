import React, { Component } from "react";
import Like from "./common/like";

const moviesTable = (props) => {
  const { movies, onDelete, onLike } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>Like</th>
          <th>Action</th>
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
              <Like onClick={() => onLike(movie)} liked={movie.liked} />
            </td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(movie)}
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default moviesTable;
