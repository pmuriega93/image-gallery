<template>
  <div>
    <ImageSearch />
  </div>
</template>

<script>
import ImageSearch from './components/ImageSearch.vue'


export default {
  name: 'App',
  components: {
    ImageSearch,
  }
}
</script>

<style>

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    background-color: #e5e5e5;
  }
  body {
    font-family: sans-serif;
  }

</style>
