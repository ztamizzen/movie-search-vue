<template>
  <div id="app">
    <Movies />
  </div>
</template>

<script>
import Movies from "@/components/Movies";
export default {
  name: "app",
  components: {
    Movies
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
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
