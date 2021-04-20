import React from 'react';

export default function MovieCard (props) {
  return(
    <div className="save-wrapper">
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
      <Router path={`/movies/${id}`}>
        <ActorList />
      </Router>
    </div>
  );
}

function ActorList(props) {
  const { title, director, metascore, id } = props.movie;
  return (
    <>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div className="save-button">Save</div>
    </>
  );
}
