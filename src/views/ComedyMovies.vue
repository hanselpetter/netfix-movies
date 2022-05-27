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
      <h1 class="h-one">Comedy Movies</h1>
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
    const comedy1 = ref([]);
    const comedy2 = ref([]);
    const comedy3 = ref([]);
    const comedy4 = ref([]);
    const comedy5 = ref([]);
    const comedy6 = ref([]);
    const comedy7 = ref([]);
    const comedy8 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          comedy8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(35) !== -1
          );
        });
    };
    return {
      comedy1,
      comedy2,
      comedy3,
      comedy4,
      comedy5,
      comedy6,
      comedy7,
      comedy8,
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
      allActions = this.comedy1
        .concat(this.comedy2)
        .concat(this.comedy3)
        .concat(this.comedy4)
        .concat(this.comedy5)
        .concat(this.comedy6)
        .concat(this.comedy7)
        .concat(this.comedy8);
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
