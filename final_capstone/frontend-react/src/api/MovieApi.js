import { utilFetchWrapper } from '../services/utilFetchWrapper';

const fetchWrapper = utilFetchWrapper();

export function getMovies() {
  return fetchWrapper.get('/movies');
}

export function getMovieById(id) {
  return fetchWrapper.get(`/movies/${id}`);
}
