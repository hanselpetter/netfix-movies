<template>
  <div>
    <router-link :to="'/tv_show/' + movie.id" class="movie-link">
      <div class="imag">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="Movie Poster"
          class="img"
        />
        <h3 class="type">{{ movie.name }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["movie", "index"],
};
</script>

<style></style>
