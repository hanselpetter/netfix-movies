<template>
  <div class="detal">
    <div class="detail-di">
      <div class="movie-detail">
        <div class="mo-firs" v-if="movie.poster_path !== null">
          <img
            v-if="movie.poster_path !== null"
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            alt="Movie Poster"
            class="featux"
          />
        </div>
        <div class="mo-sec font spacing">
          <h2 class="tit">{{ movie.original_name }}</h2>
          <p class="lang overview">{{ movie.overview }}</p>
          <p
            class="lang"
            v-if="movie.homepage !== '' && movie.homepage !== null"
          >
            Homepage:
            <a :href="movie.homepage" target="_blank" class="spa">{{
              movie.homepage
            }}</a>
          </p>
          <div class="genre">
            <h4 class="genre-tit gen">Genres:</h4>
            <div v-for="mov in movie.genres" :key="mov.id" class="genre-div">
              <p class="name-mo">{{ mov.name }}</p>
            </div>
          </div>
          <h5 class="prod" v-if="movie.production_companies.length !== 0">
            Production Companies
          </h5>
          <div class="comp">
            <div
              v-for="mo in movie.production_companies"
              :key="mo.id"
              class="comp-first"
            >
              <div v-if="typeof mo.logo_path == 'string'" class="logox">
                <img
                  :src="'https://image.tmdb.org/t/p/w500' + mo.logo_path"
                  alt="Company logo"
                  class="featured"
                />
                <p>{{ mo.name }}</p>
                <p>{{ mo.origin_country }}</p>
              </div>
              <div v-else class="logos">
                <p>{{ mo.name }}</p>
                <p>{{ mo.origin_country }}</p>
              </div>
            </div>
          </div>
          <router-link
            :to="'/tv_show/similar_tv_show/' + movie.id"
            class="simi-mo"
          >
            <button type="button" class="si-btn sbt">
              <p class="view">View similar Tv Show</p>
              <i class="fa fa-arrow-right"></i>
            </button>
          </router-link>
        </div>
      </div>
      <div class="season">
        <h4 class="seas">Seasons</h4>
        <div class="movi-div">
          <div v-for="seas in movie.seasons" :key="seas.id" class="movitb">
            <img
              v-if="seas.poster_path !== null"
              :src="'https://image.tmdb.org/t/p/w500' + seas.poster_path"
              alt="season"
              class="img"
            />
            <h5 class="setit">{{ seas.name }}</h5>
            <p class="air">Airing date: {{ seas.air_date }}</p>
            <p class="nom">
              <span>Number of episodes: </span>
              <span class="coun">{{ seas.episode_count }}</span>
            </p>
            <p class="over">{{ seas.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterBloackVue />
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
import FooterBloackVue from "../components/FooterBloack.vue";

export default {
  components: {
    FooterBloackVue,
  },
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=${env.apikeys}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
          console.log(data);
        });
    });
    return {
      movie,
    };
  },
};
</script>

<style>
.seas {
  color: #fff;
  margin: 3% 0 2% 0;
  text-decoration: underline;
}

.setit {
  font-size: 1.2em;
  text-align: center;
  margin: 2% 0 2% 0;
}

.gen {
  margin-right: 5%;
}

.nom {
  margin: 1% 0 2% 0;
  font-weight: 600;
}

.air {
  font-size: 1.1em;
  text-align: center;
  margin: 1% 0 2% 0;
  color: rgb(36, 36, 198);
}

.over {
  text-align: center;
}

.coun {
  font-weight: 600;
  color: #35495e;
}

.detal {
  display: flex;
  flex-direction: column;
  background-color: #35495e;
}

.detail-di {
  display: flex;
  flex-direction: column;
}

.mo-firs {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1%;
  background-color: #fff;
  border: 2px solid rgb(81, 78, 78);
}

.season {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 992px) {
  .mo-firs {
    min-width: 45%;
    max-width: 47%;
    margin: 0 2% 0 0;
    padding: 1%;
    border: 2px solid rgb(81, 78, 78);
  }

  .featux {
    width: 100%;
    height: 30rem;
  }

  .sbt {
    margin-top: 16%;
  }
}
</style>
