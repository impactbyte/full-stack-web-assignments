import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieList from './pages/MovieList';

const routes = [
  {
    name: 'home',
    path: '/',
    element: Home,
  },

  {
    name: 'movie list',
    path: '/movies',
    element: MovieList,
  },
  {
    name: 'detail movie',
    path: '/movies/:id',
    element: Movie,
    isHidden: true,
  },
];

export default routes;
