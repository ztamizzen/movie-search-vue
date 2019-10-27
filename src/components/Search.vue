<template>
  <form class="search">
    <label for="SearchInput">Search for any word in the title</label>
    <input type="text" :value="movieTitle" @keyup="handleChange" id="SearchInput" />
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
  grid-template-columns: [start] 1fr [middle] auto [end];
  margin: 1rem;
  text-align: left;
}
.search label {
  grid-column: start / end;
}
.search input {
  font-size: 1.3rem;
  grid-column: start / middle;
}
.search button {
  grid-column: middle / end;
}
</style>