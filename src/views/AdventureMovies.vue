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
      <h1 class="h-one">Adventure Movies</h1>
      <div class="movi-div">
        <MoviesViewVue
          v-for="(mox, index) in sum"
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
import { ref } from "vue";
import env from "@/env.js";
import FooterBloackVue from "../components/FooterBloack.vue";
import MoviesViewVue from "../components/MoviesView.vue";

export default {
  components: {
    FooterBloackVue,
    MoviesViewVue,
  },
  created() {
    this.Movix1();
    this.Movix2();
    this.Movix3();
    this.Movix4();
    this.Movix5();
    this.Movix6();
    this.Movix7();
  },
  setup() {
    const adventure1 = ref([]);
    const adventure2 = ref([]);
    const adventure3 = ref([]);
    const adventure4 = ref([]);
    const adventure5 = ref([]);
    const adventure6 = ref([]);
    const adventure7 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          adventure7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(12) !== -1
          );
        });
    };
    return {
      adventure1,
      adventure2,
      adventure3,
      adventure4,
      adventure5,
      adventure6,
      adventure7,
      Movix1,
      Movix2,
      Movix3,
      Movix4,
      Movix5,
      Movix6,
      Movix7,
      search,
    };
  },
  computed: {
    sum() {
      let allActions = [];
      allActions = this.adventure1
        .concat(this.adventure2)
        .concat(this.adventure3)
        .concat(this.adventure4)
        .concat(this.adventure5)
        .concat(this.adventure6)
        .concat(this.adventure7);
      if (this.search !== "") {
        allActions = allActions.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
        return allActions;
      }
      return allActions;
    },
  },
};
</script>
