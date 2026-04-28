import React from "react";
import "../index.css";
import { FcRating } from "react-icons/fc";

const MovieList = ({ movieList }) => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Movie List</h1>
      <div className="movie-container">
        {movieList.map((movie, i) => (
          <div className="movie-card" key={i}>
            <div className="img-wrapper">
              <img src={movie.poster} alt={movie.title} className="movie-img" />
            </div>

            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>

              <p className="card-subtitle">
                {movie.genre} . {movie.language}
              </p>

              <div style={{ color: "gold" }}>
                {"⭐".repeat(Number(movie.rating))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
