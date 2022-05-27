<template>
  <div class="homex-div">
    <div class="homex">
      <div class="homex">
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
          <h3
            class="most"
            v-if="searchMovie.length !== 0 || searchFromSecArr.length !== 0"
          >
            Most Popular Movies
          </h3>
          <div class="movi-div">
            <div class="movitb" v-for="movie in searchMovie" :key="movie.id">
              <router-link :to="'/movie/' + movie.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ movie.title }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="!more && searchFromSecArr.length !== 0"
          class="click"
          @click="loadMore()"
        >
          <p class="pt">Show more</p>
          <i class="fa fa-arrow-right"></i>
        </button>
        <div class="homex">
          <div class="movi-div" v-if="more">
            <div class="movitb" v-for="movx in searchFromSecArr" :key="movx.id">
              <router-link :to="'/movie/' + movx.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + movx.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ movx.title }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="more && searchFromSecArr.length !== 0"
          class="click"
          @click="loadMore()"
        >
          <p class="pt">Show less</p>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <div class="homex top-rated">
        <div class="homex">
          <h3
            class="most"
            v-if="searchRated.length !== 0 || searchFromSecRate.length !== 0"
          >
            Top Rated Movies
          </h3>
          <div class="movi-div">
            <div class="movitb" v-for="rate in searchRated" :key="rate.id">
              <router-link :to="'/movie/' + rate.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + rate.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ rate.title }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="!moreRate && searchFromSecRate.length !== 0"
          class="click"
          @click="rateMore()"
        >
          <p class="pt">Show more</p>
          <i class="fa fa-arrow-right"></i>
        </button>
        <div class="homex">
          <div class="movi-div" v-if="moreRate">
            <div
              class="movitb"
              v-for="rats in searchFromSecRate"
              :key="rats.id"
            >
              <router-link :to="'/movie/' + rats.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + rats.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ rats.title }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="moreRate && searchFromSecRate.length !== 0"
          class="click"
          @click="rateMore()"
        >
          <p class="pt">Show less</p>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <div class="homex top-rated">
        <div class="homex">
          <h3
            class="most"
            v-if="
              searchFromtvShow.length !== 0 || searchFromtArrShow.length !== 0
            "
          >
            Most Popular TV Shows
          </h3>
          <div class="movi-div">
            <div class="movitb" v-for="show in searchFromtvShow" :key="show.id">
              <router-link :to="'/movie/' + show.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + show.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ show.name }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="!moreShow && searchFromtArrShow.length !== 0"
          class="click"
          @click="tvMore()"
        >
          <p class="pt">Show more</p>
          <i class="fa fa-arrow-right"></i>
        </button>
        <div class="homex">
          <div class="movi-div" v-if="moreShow">
            <div
              class="movitb"
              v-for="sect in searchFromtArrShow"
              :key="sect.id"
            >
              <router-link :to="'/movie/' + sect.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + sect.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ sect.name }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="moreShow && searchFromtArrShow.length !== 0"
          class="click"
          @click="tvMore()"
        >
          <p class="pt">Show less</p>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <div class="homex top-rated">
        <div class="homex">
          <h3
            class="most"
            v-if="
              searchFromtAir.length !== 0 || searchFromtMoreAir.length !== 0
            "
          >
            TV Shows Airing today
          </h3>
          <div class="movi-div">
            <div class="movitb" v-for="show in searchFromtAir" :key="show.id">
              <router-link :to="'/movie/' + show.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + show.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ show.name }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="!topMor && searchFromtMoreAir.length !== 0"
          class="click"
          @click="moreTop()"
        >
          <p class="pt">Show more</p>
          <i class="fa fa-arrow-right"></i>
        </button>
        <div class="homex">
          <div class="movi-div" v-if="topMor">
            <div
              class="movitb"
              v-for="sect in searchFromtMoreAir"
              :key="sect.id"
            >
              <router-link :to="'/movie/' + sect.id" class="movie-link">
                <div class="imag">
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + sect.poster_path"
                    alt="Movie Poster"
                    class="img"
                  />
                  <h3 class="type">{{ sect.name }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <button
          type="button"
          v-if="topMor && searchFromtMoreAir.length !== 0"
          class="click"
          @click="moreTop()"
        >
          <p class="pt">Show less</p>
          <i class="fa fa-arrow-right"></i>
        </button>
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
    this.Movix();
    this.MostRated();
    this.TvShows();
    this.Top();
  },
  setup() {
    const movieTB = ref([]);
    const rated = ref([]);
    const secRate = ref([]);
    const secArr = ref([]);
    const more = ref(false);
    const moreRate = ref(false);
    const moreShow = ref(false);
    const tvshows = ref([]);
    const secArrShows = ref([]);
    const topShow = ref([]);
    const arrTop = ref([]);
    const topMor = ref(false);
    const search = ref("");
    const Top = () => {
      fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${env.apikeys}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          topShow.value = data.results.slice(0, 4);
          arrTop.value = data.results.slice(4);
        });
    };
    const TvShows = () => {
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${env.apikeys}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          tvshows.value = data.results.slice(0, 4);
          secArrShows.value = data.results.slice(4);
        });
    };
    const Movix = () => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${env.apikeys}`
      )
        .then((response) => response.json())
        .then((data) => {
          movieTB.value = data.results.slice(0, 4);
          secArr.value = data.results.slice(4);
        });
    };
    const MostRated = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${env.apikeys}`
      )
        .then((response) => response.json())
        .then((data) => {
          rated.value = data.results.slice(0, 4);
          secRate.value = data.results.slice(4);
        });
    };
    const loadMore = () => {
      more.value = !more.value;
    };
    const tvMore = () => {
      moreShow.value = !moreShow.value;
    };
    const rateMore = () => {
      moreRate.value = !moreRate.value;
    };
    const moreTop = () => {
      topMor.value = !topMor.value;
    };
    const loadAll = () => {
      more.value = true;
      moreShow.value = true;
      moreRate.value = true;
      topMor.value = true;
    };
    return {
      loadAll,
      topShow,
      arrTop,
      Top,
      moreTop,
      topMor,
      tvshows,
      secArrShows,
      moreShow,
      TvShows,
      tvMore,
      rateMore,
      movieTB,
      rated,
      secRate,
      Movix,
      MostRated,
      more,
      moreRate,
      secArr,
      loadMore,
      search,
    };
  },
  computed: {
    // search for a movie under popular movies
    searchMovie() {
      let moviesArr = [];
      if (this.search !== "") {
        this.loadAll();
        moviesArr = this.movieTB.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.movieTB;
      }
      return moviesArr;
    },

    // search for a movie under show more popular movies
    searchFromSecArr() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.secArr.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.secArr;
      }
      return moviesArr;
    },

    // search for a movie under top rated movies
    searchRated() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.rated.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.rated;
      }
      return moviesArr;
    },

    // search for a movie under show more top rated movies
    searchFromSecRate() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.secRate.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.secRate;
      }
      return moviesArr;
    },

    searchFromtvShow() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.tvshows.filter((p) =>
          p.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.tvshows;
      }
      return moviesArr;
    },

    searchFromtArrShow() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.secArrShows.filter((p) =>
          p.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.secArrShows;
      }
      return moviesArr;
    },

    searchFromtAir() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.topShow.filter((p) =>
          p.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.topShow;
      }
      return moviesArr;
    },

    searchFromtMoreAir() {
      let moviesArr = [];
      if (this.search !== "") {
        moviesArr = this.arrTop.filter((p) =>
          p.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        moviesArr = this.arrTop;
      }
      return moviesArr;
    },
  },
};
</script>

<style lang="scss">
.homex-div {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: #35495e;
  padding: 0 0 4% 0;
}

.homex {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.movi-div {
  display: grid;
  grid-template-columns: 47% 47%;
  column-gap: 5%;
  width: 95%;
  padding: 1% 0 0 0;
}

.movitb {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2% 0 0 0;
  background-color: #fff;
  margin: 0 0 10% 0;
  border: 3px solid aqua;
  box-shadow: 0 0 5px aqua;
}

.imag {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  width: 100%;
  height: 23rem;
}

.footers {
  display: flex;
  flex-direction: column;
  background-color: #28292c;
}

.footers-foot {
  display: flex;
  flex-direction: column;
  color: #fff;
}

.type {
  text-align: center;
  margin: 3% 0 2% 0;
  color: rgb(20, 20, 200);
}

.most {
  color: #fff;
  margin: 5% 0 4% 0;
  font-size: 18px;
}

.click {
  display: flex;
  background-color: transparent;
  color: aqua;
  border: none;
  width: 100%;
  align-items: flex-start;
}

.pt {
  padding: 0 1% 0 3%;
  text-decoration: underline;
}

.search {
  display: flex;
  background-color: #fff;
  align-items: center;
  width: 100%;
  max-height: 2.8rem;
  align-self: center;
  padding: 0.5% 1% 0.5% 1%;
}

.ins {
  width: 95%;
  height: 1.3rem;
  border: transparent;
}

.simg {
  width: 5%;
}

@media only screen and (min-width: 992px) {
  .movi-div {
    grid-template-columns: 23% 22% 22% 23%;
    column-gap: 3%;
  }

  .footers-foot {
    flex-direction: row;
    padding: 0 0 0 3%;
    align-items: center;
    height: 3rem;
  }

  .most {
    font-size: 1.6em;
    letter-spacing: 0.7px;
    margin: 2% 0 2% 0;
  }

  .click {
    padding: 0 0 0 3%;
    width: 100%;
    font-size: 18px;
  }

  .pt {
    padding: 0 1% 0 0;
  }

  .search {
    width: 25%;
    height: 2rem;
    align-self: flex-end;
    align-items: center;
    margin: 2% 2% 0 0;
    border-radius: 20px;
    padding: 0.1% 1% 0 1%;
  }

  .ins {
    width: 98%;
    height: 1.7rem;
  }

  .simg {
    align-self: center;
    justify-self: center;
    width: 5%;
  }

  .search::placeholder {
    font-size: 12px;
  }
}
</style>
