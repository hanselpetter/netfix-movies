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
      <h1 class="h-one">Family Movies</h1>
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
    const family1 = ref([]);
    const family2 = ref([]);
    const family3 = ref([]);
    const family4 = ref([]);
    const family5 = ref([]);
    const family6 = ref([]);
    const family7 = ref([]);
    const family8 = ref([]);
    const family9 = ref([]);
    const family10 = ref([]);
    const family11 = ref([]);
    const family12 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          family1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          family2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          family3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          family4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          family5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          family6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          family7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          family8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix9 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=9`
      )
        .then((response) => response.json())
        .then((data) => {
          family9.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix10 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          family10.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix11 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=11`
      )
        .then((response) => response.json())
        .then((data) => {
          family11.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    const Movix12 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          family12.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10751) !== -1
          );
        });
    };
    return {
      family1,
      family2,
      family3,
      family4,
      family5,
      family6,
      family7,
      family8,
      family9,
      family10,
      family11,
      family12,
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
      allActions = this.family1
        .concat(this.family2)
        .concat(this.family3)
        .concat(this.family4)
        .concat(this.family5)
        .concat(this.family6)
        .concat(this.family7)
        .concat(this.family8)
        .concat(this.family9)
        .concat(this.family10)
        .concat(this.family11)
        .concat(this.family12);
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
<style scoped>
h1 {
  color: #fff;
}
</style>
