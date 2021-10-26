import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className='card w-100'>
      <img className='card-img-top' src={movie.image_url} alt='skilvul' />
      <div className='card-body'>
        <h5 className='card-title'>{movie.title}</h5>
        <p className='card-text'>
          <span
            className={`badge ${
              movie.type === 'TV' ? 'bg-danger' : 'bg-success'
            }`}
          >
            {movie.type}
          </span>
          <span className='text-muted'>{` ${movie.score}`}</span>
        </p>
        <Link className='btn btn-primary w-100' to={`/movies/${movie.mal_id}`}>
          readmore
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
