import apiClient from "./apiClient";

export default {
  getMovies() {
    return apiClient.get(`/movies`);
  },
  getMovie(id) {
    return apiClient.get(`/movies/${id}`);
  },
};
