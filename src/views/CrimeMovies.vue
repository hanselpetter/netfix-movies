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
      <h1 class="h-one">Crime Movies</h1>
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
    this.Movix8();
    this.Movix9();
    this.Movix10();
    this.Movix11();
    this.Movix12();
  },
  setup() {
    const crime1 = ref([]);
    const crime2 = ref([]);
    const crime3 = ref([]);
    const crime4 = ref([]);
    const crime5 = ref([]);
    const crime6 = ref([]);
    const crime7 = ref([]);
    const crime8 = ref([]);
    const crime9 = ref([]);
    const crime10 = ref([]);
    const crime11 = ref([]);
    const crime12 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          crime1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          crime2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          crime3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          crime4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          crime5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          crime6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          crime7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          crime8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix9 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=9`
      )
        .then((response) => response.json())
        .then((data) => {
          crime9.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix10 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          crime10.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix11 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=11`
      )
        .then((response) => response.json())
        .then((data) => {
          crime11.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    const Movix12 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          crime12.value = data.results.filter(
            (p) => p.genre_ids.indexOf(80) !== -1
          );
        });
    };
    return {
      crime1,
      crime2,
      crime3,
      crime4,
      crime5,
      crime6,
      crime7,
      crime8,
      crime9,
      crime10,
      crime11,
      crime12,
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
      allActions = this.crime1
        .concat(this.crime2)
        .concat(this.crime3)
        .concat(this.crime4)
        .concat(this.crime5)
        .concat(this.crime6)
        .concat(this.crime7)
        .concat(this.crime8)
        .concat(this.crime9)
        .concat(this.crime10)
        .concat(this.crime11)
        .concat(this.crime12);
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
