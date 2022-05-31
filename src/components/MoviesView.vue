<template>
  <div>
    <router-link :to="'/movie/' + movie.id" class="movie-link">
      <div class="imag">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="Movie Poster"
          class="img"
        />
        <h3 class="type">{{ movie.title }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["movie", "index"],
};
</script>

<style>
.img {
  width: 100%;
  height: 23rem;
}
</style>
