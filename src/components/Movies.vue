<template>
  <div>
    <Header :title="'Composition API - Movie search'" />
    <div class="loading" v-if="state.loading">Loading&hellip;</div>
    <Search :search="state.search" @search="handleSearch" />
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Search from "@/components/Search";
import Movie from "@/components/Movie";
import { useMovieApi } from "../hooks/movie-api";
export default {
  name: "Movies",
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

