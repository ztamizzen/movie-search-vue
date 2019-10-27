<template>
  <header class="App-header">
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
  setup() {}
};
</script>
<style>
.App-header {
  background: steelblue;
}
.App-header h2 {
  color: white;
  margin: 0;
  padding: 1rem;
}
</style>