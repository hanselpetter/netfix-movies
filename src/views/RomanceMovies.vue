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
      <h1 class="h-one">Romance Movies</h1>
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
    this.Movix13();
    this.Movix14();
    this.Movix15();
    this.Movix16();
  },
  setup() {
    const romance1 = ref([]);
    const romance2 = ref([]);
    const romance3 = ref([]);
    const romance4 = ref([]);
    const romance5 = ref([]);
    const romance6 = ref([]);
    const romance7 = ref([]);
    const romance8 = ref([]);
    const romance9 = ref([]);
    const romance10 = ref([]);
    const romance11 = ref([]);
    const romance12 = ref([]);
    const romance13 = ref([]);
    const romance14 = ref([]);
    const romance15 = ref([]);
    const romance16 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          romance1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          romance2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          romance3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          romance4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          romance5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          romance6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          romance7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          romance8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix9 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=9`
      )
        .then((response) => response.json())
        .then((data) => {
          romance9.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix10 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          romance10.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix11 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=11`
      )
        .then((response) => response.json())
        .then((data) => {
          romance11.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix12 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          romance12.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix13 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=13`
      )
        .then((response) => response.json())
        .then((data) => {
          romance13.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix14 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=14`
      )
        .then((response) => response.json())
        .then((data) => {
          romance14.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix15 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=15`
      )
        .then((response) => response.json())
        .then((data) => {
          romance15.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    const Movix16 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=16`
      )
        .then((response) => response.json())
        .then((data) => {
          romance16.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10749) !== -1
          );
        });
    };
    return {
      romance1,
      romance2,
      romance3,
      romance4,
      romance5,
      romance6,
      romance7,
      romance8,
      romance9,
      romance10,
      romance11,
      romance12,
      romance13,
      romance14,
      romance15,
      romance16,
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
      Movix13,
      Movix14,
      Movix15,
      Movix16,
      search,
    };
  },
  computed: {
    sum() {
      let allActions = [];
      allActions = this.romance1
        .concat(this.romance2)
        .concat(this.romance3)
        .concat(this.romance4)
        .concat(this.romance5)
        .concat(this.romance6)
        .concat(this.romance7)
        .concat(this.romance8)
        .concat(this.romance9)
        .concat(this.romance10)
        .concat(this.romance11)
        .concat(this.romance12)
        .concat(this.romance13)
        .concat(this.romance14)
        .concat(this.romance15)
        .concat(this.romance16);
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
