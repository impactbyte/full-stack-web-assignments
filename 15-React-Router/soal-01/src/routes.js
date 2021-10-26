import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieList from './pages/MovieList';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },

  {
    name: 'movie list',
    path: '/movies',
    component: MovieList,
  },
  {
    name: 'detail movie',
    path: '/movies/:id',
    component: Movie,
    isHidden: true,
  },
];

export default routes;
