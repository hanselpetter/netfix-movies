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
      <h1 class="h-one">Music Movies</h1>
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
    this.Movix13();
    this.Movix14();
    this.Movix15();
    this.Movix16();
    this.Movix17();
    this.Movix18();
  },
  setup() {
    const music1 = ref([]);
    const music2 = ref([]);
    const music3 = ref([]);
    const music4 = ref([]);
    const music5 = ref([]);
    const music6 = ref([]);
    const music7 = ref([]);
    const music8 = ref([]);
    const music9 = ref([]);
    const music10 = ref([]);
    const music11 = ref([]);
    const music12 = ref([]);
    const music13 = ref([]);
    const music14 = ref([]);
    const music15 = ref([]);
    const music16 = ref([]);
    const music17 = ref([]);
    const music18 = ref([]);
    const search = ref("");
    const Movix1 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          music1.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix2 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          music2.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix3 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=3`
      )
        .then((response) => response.json())
        .then((data) => {
          music3.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix4 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=4`
      )
        .then((response) => response.json())
        .then((data) => {
          music4.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix5 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=5`
      )
        .then((response) => response.json())
        .then((data) => {
          music5.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix6 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=6`
      )
        .then((response) => response.json())
        .then((data) => {
          music6.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix7 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=7`
      )
        .then((response) => response.json())
        .then((data) => {
          music7.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix8 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=8`
      )
        .then((response) => response.json())
        .then((data) => {
          music8.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix9 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=9`
      )
        .then((response) => response.json())
        .then((data) => {
          music9.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix10 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          music10.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix11 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=11`
      )
        .then((response) => response.json())
        .then((data) => {
          music11.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix12 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          music12.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix13 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=13`
      )
        .then((response) => response.json())
        .then((data) => {
          music13.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix14 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=14`
      )
        .then((response) => response.json())
        .then((data) => {
          music14.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix15 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=15`
      )
        .then((response) => response.json())
        .then((data) => {
          music15.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix16 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=16`
      )
        .then((response) => response.json())
        .then((data) => {
          music16.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix17 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=17`
      )
        .then((response) => response.json())
        .then((data) => {
          music17.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    const Movix18 = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikeys}&language=en-US&page=18`
      )
        .then((response) => response.json())
        .then((data) => {
          music18.value = data.results.filter(
            (p) => p.genre_ids.indexOf(10402) !== -1
          );
        });
    };
    return {
      music1,
      music2,
      music3,
      music4,
      music5,
      music6,
      music7,
      music8,
      music9,
      music10,
      music11,
      music12,
      music13,
      music14,
      music15,
      music16,
      music17,
      music18,
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
      Movix17,
      Movix18,
      search,
    };
  },
  computed: {
    sum() {
      let allActions = [];
      allActions = this.music1
        .concat(this.music2)
        .concat(this.music3)
        .concat(this.music4)
        .concat(this.music5)
        .concat(this.music6)
        .concat(this.music7)
        .concat(this.music8)
        .concat(this.music9)
        .concat(this.music10)
        .concat(this.music11)
        .concat(this.music12)
        .concat(this.music13)
        .concat(this.music14)
        .concat(this.music15)
        .concat(this.music16)
        .concat(this.music17)
        .concat(this.music18);
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
