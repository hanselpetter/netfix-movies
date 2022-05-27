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
      <h1 class="h-one">Animation Movies</h1>
      <div class="movi-div">
        <div class="movitb" v-for="mox in sum" :key="mox.id">
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
import { ref } from "vue";
import env from "@/env.js";

export default {
  created() {
    this.Movix1();
    this.Movix2();
    this.Movix3();
    this.Movix4();
    this.Movix5();
    this.Movix6();
    this.Movix7();
    this.Movix8();
  },
  setup() {
    const animation1 = ref([]);
    const animation2 = ref([]);
    const animation3 = ref([]);
    const animation4 = ref([]);
    const animation5 = ref([]);
    const animation6 = ref([]);
    const animation7 = ref([]);
    const animation8 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          animation1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          animation2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          animation3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          animation4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          animation5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          animation6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          animation7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          animation8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(16) !== -1
          );
        });
    };
    return {
      animation1,
      animation2,
      animation3,
      animation4,
      animation5,
      animation6,
      animation7,
      animation8,
      Movix1,
      Movix2,
      Movix3,
      Movix4,
      Movix5,
      Movix6,
      Movix7,
      Movix8,
      search,
    };
  },
  computed: {
    sum() {
      let allActions = [];
      allActions = this.animation1
        .concat(this.animation2)
        .concat(this.animation3)
        .concat(this.animation4)
        .concat(this.animation5)
        .concat(this.animation6)
        .concat(this.animation7)
        .concat(this.animation8);
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
