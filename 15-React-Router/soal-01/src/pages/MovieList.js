import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";

import movies from "../dummy-data";

const MovieList = () => {
  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const params = {};

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: shows[0],
    category: categories[0],
    sort: fields[0]
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies;

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
