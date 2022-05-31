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
        <ShowViewVue
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
import ShowViewVue from "../components/ShowView.vue";

export default {
  components: {
    FooterBloackVue,
    ShowViewVue,
  },
  setup() {
    const movies = ref([]);
    const route = useRoute();
    const search = ref("");
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/tv/${route.params.id}/similar?api_key=${env.apikeys}&language=en-US`
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
          p.name.toLowerCase().includes(this.search.toLowerCase())
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
