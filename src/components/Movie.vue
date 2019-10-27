<template>
  <div class="movie">
    <h2>{{ movie.Title }}</h2>
    <div>
      <img :src="movie.Poster" width="200" :alt="altText" />
    </div>
    <p>{{ movie.Year }}</p>
    <a :href="imdbLink" target="_blank" rel="noopener noreferrer">Imdb</a>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  name: "Movie",
  props: ["movie"],
  setup({ movie }) {
    const altText = computed(() => `The movie titled: ${movie.Title}`);
    const imdbLink = computed(
      () => `https://www.imdb.com/title/${movie.imdbID}/`
    );
    return {
      altText,
      imdbLink
    };
  }
};
</script>
<style>
.movie {
  border: 1px solid goldenrod;
  padding: 1rem;
}
.movie img {
  filter: drop-shadow(3px 3px 8px black);
}
</style>