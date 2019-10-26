<template>
  <form class="search">
    <input type="text" :value="movieTitle" @keyup="handleChange" />
    <button @click="handleSubmit" type="submit">Search</button>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "Search",
  props: ["search"],
  setup({ search }, { emit }) {
    const movieTitle = ref(search);
    return {
      movieTitle,
      handleSubmit(event) {
        event.preventDefault();
        emit("search", movieTitle.value);
      },
      handleChange(event) {
        movieTitle.value = event.target.value;
      }
    };
  }
};
</script>

<style lang="css">
.search {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
  outline: 1px solid firebrick;
  outline-offset: 0.4rem;
}
.search input {
  font-size: 1.3rem;
}
</style>