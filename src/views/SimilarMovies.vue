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
        <MoviesViewVue
          v-for="(mox, index) in MovieSearch"
          :key="mox.id"
          class="movitb"
          :index="index"
          :movie="mox"
        />
      </div>
    </div>
  </div>
  <FooterBloackVue />
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
import FooterBloackVue from "../components/FooterBloack.vue";
import MoviesViewVue from "../components/MoviesView.vue";

export default {
  components: {
    FooterBloackVue,
    MoviesViewVue,
  },
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
    },
  },
};
</script>

<style></style>
