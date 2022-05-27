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
      <h1 class="h-one">Horror Movies</h1>
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
    this.Movix9();
    this.Movix10();
    this.Movix11();
    this.Movix12();
  },
  setup() {
    const horror1 = ref([]);
    const horror2 = ref([]);
    const horror3 = ref([]);
    const horror4 = ref([]);
    const horror5 = ref([]);
    const horror6 = ref([]);
    const horror7 = ref([]);
    const horror8 = ref([]);
    const horror9 = ref([]);
    const horror10 = ref([]);
    const horror11 = ref([]);
    const horror12 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          horror1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          horror2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          horror3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          horror4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          horror5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          horror6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          horror7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          horror8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix9 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=9`
      )
        .then((response) => response.json())
        .then((data) => {
          horror9.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix10 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          horror10.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix11 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=11`
      )
        .then((response) => response.json())
        .then((data) => {
          horror11.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    const Movix12 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          horror12.value = data.results.filter(
            (p) => p.genre_ids.indexOf(27) !== -1
          );
        });
    };
    return {
      horror1,
      horror2,
      horror3,
      horror4,
      horror5,
      horror6,
      horror7,
      horror8,
      horror9,
      horror10,
      horror11,
      horror12,
      Movix1,
      Movix2,
      Movix3,
      Movix4,
      Movix5,
      Movix6,
      Movix7,
      Movix8,
      Movix9,
      Movix10,
      Movix11,
      Movix12,
      search,
    };
  },
  computed: {
    sum() {
      let allActions = [];
      allActions = this.horror1
        .concat(this.horror2)
        .concat(this.horror3)
        .concat(this.horror4)
        .concat(this.horror5)
        .concat(this.horror6)
        .concat(this.horror7)
        .concat(this.horror8)
        .concat(this.horror9)
        .concat(this.horror10)
        .concat(this.horror11)
        .concat(this.horror12);
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
