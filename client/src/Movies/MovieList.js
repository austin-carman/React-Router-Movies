import React from 'react';
import { Link } from 'react-router-dom'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} /> //pass in movieCard here?
        // <MoiveCard key={movie.id} movie=
      ))}
    </div>
  );
}

function MovieDetails(props) { // Comment out this function and use MovieCard instead?
  const { title, director, metascore, id } = props.movie;

  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}


