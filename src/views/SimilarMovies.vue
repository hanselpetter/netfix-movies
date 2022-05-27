<template>
  <div class="homex-div">
    <div class="homex">
      <div class="search">
            <input
              type="search"
              class="ins"
              placeholder="search for movies..."
              v-model="search"
            />
            <img
              class="simg"
              src="../assets/magnifying-glass-solid.svg"
              alt="search loop"
            />
          </div>
      <div class="movi-div">
        <div class="movitb" v-for="mox in MovieSearch" :key="mox.id">
          <router-link :to="'/movie/' + mox.id" class="movie-link">
            <div class="imag">
              <img
                :src="'https://image.tmdb.org/t/p/w500' + mox.poster_path"
                alt="Movie Poster"
                class="img"
              />
              <h3 class="type">{{ mox.title }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="footers">
    <hr />
    <div class="footers-foot">
      <small class="footers-foo"
        >Copyright © 2022 NetFlix Privacy & Legal AdChoices
      </small>
      <small class="footers-foo"> Accessibility Language: English (US)</small>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
export default {
  setup() {
    const movies = ref([]);
    const route = useRoute();
    const search = ref("");
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}/similar?api_key=${env.apikeys}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          movies.value = data.results;
        });
    });
    return {
      search,
      movies,
    };
  },
  computed: {
    MovieSearch() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.movies.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.movies;
      }
      return moviesArr;
    }
  },
};
</script>

<style></style>
