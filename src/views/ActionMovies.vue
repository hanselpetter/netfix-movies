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
      <h1 class="h-one">Action Movies</h1>
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
  },
  setup() {
    const action1 = ref([]);
    const action2 = ref([]);
    const action3 = ref([]);
    const action4 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          action1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(28) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          action2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(28) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          action3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(28) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          action4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(28) !== -1
          );
        });
    };
    return {
      action1,
      action2,
      action3,
      action4,
      Movix1,
      Movix2,
      Movix3,
      Movix4,
      search,
    };
  },
  computed: {
    sum() {
      let allActions = [];
      allActions = this.action1
        .concat(this.action2)
        .concat(this.action3)
        .concat(this.action4);
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
<style>
.h-one {
  color: #fff;
  margin: 5% 0 5% 0;
}

@media only screen and (min-width: 992px) {
  .h-one {
    margin: 1% 0 3% 0;
  }
}
</style>
