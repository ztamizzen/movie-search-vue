<template>
  <div id="app">
    <Header :title="'Composition API'" />
    <div class="loading" v-if="state.loading">Loading&hellip;</div>
    <Search :search="state.search" @search="handleSearch" />
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Search from "./Search";
import Movie from "./Movie";
import { useMovieApi } from "./hooks/movie-api";

export default {
  name: "app",
  components: {
    Header,
    Search,
    Movie
  },
  setup() {
    const state = useMovieApi();
    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
      }
    };
  }
};
</script>

<style>
@keyframes heartbeat {
  0%,
  28%,
  70% {
    transform: scale(1);
  }
  14%,
  42% {
    transform: scale(1.3);
  }
}
.loading {
  animation-name: heartbeat;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.movies {
  background: rgba(255, 255, 255, 1);
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  transition: background 0.3s ease, grid-gap 0.3s ease;
}
/** make the grid fit **/
@media (min-width: 520px) {
  .movies {
    background: rgba(250, 250, 250, 1);
    grid-gap: 1.8rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 760px) {
  .movies {
    background: rgba(245, 245, 245, 1);
    grid-gap: 1.6rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .movies {
    background: rgba(240, 240, 240, 1);
    grid-gap: 1.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
