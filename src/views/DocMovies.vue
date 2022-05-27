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
      <h1 class="h-one">Documentary Movies</h1>
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
    const doc1 = ref([]);
    const doc2 = ref([]);
    const doc3 = ref([]);
    const doc4 = ref([]);
    const doc5 = ref([]);
    const doc6 = ref([]);
    const doc7 = ref([]);
    const doc8 = ref([]);
    const doc9 = ref([]);
    const doc10 = ref([]);
    const doc11 = ref([]);
    const doc12 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          doc1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          doc2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          doc3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          doc4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          doc5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          doc6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          doc7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          doc8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix9 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=9`
      )
        .then((response) => response.json())
        .then((data) => {
          doc9.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix10 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          doc10.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix11 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=11`
      )
        .then((response) => response.json())
        .then((data) => {
          doc11.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    const Movix12 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          doc12.value = data.results.filter(
            (p) => p.genre_ids.indexOf(99) !== -1
          );
        });
    };
    return {
      doc1,
      doc2,
      doc3,
      doc4,
      doc5,
      doc6,
      doc7,
      doc8,
      doc9,
      doc10,
      doc11,
      doc12,
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
      allActions = this.doc1
        .concat(this.doc2)
        .concat(this.doc3)
        .concat(this.doc4)
        .concat(this.doc5)
        .concat(this.doc6)
        .concat(this.doc7)
        .concat(this.doc8)
        .concat(this.doc9)
        .concat(this.doc10)
        .concat(this.doc11)
        .concat(this.doc12);
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
