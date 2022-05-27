<template>
  <div class="detail">
    <div
      class="movie-detail"
      v-if="
        movie.poster_path !== null &&
        movie.status_message !==
          'The resource you requested could not be found.'
      "
    >
      <div class="mo-first" v-if="movie.poster_path !== null">
        <img
          v-if="movie.poster_path !== null"
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="Movie Poster"
          class="featured-img"
        />
      </div>
      <div class="mo-sec font spacing">
        <h2 class="tit">{{ movie.original_title }}</h2>
        <p class="lang overview">{{ movie.overview }}</p>
        <p class="lang" v-if="movie.homepage !== '' && movie.homepage !== null">
          Homepage:
          <a :href="movie.homepage" target="_blank" class="spa">{{
            movie.homepage
          }}</a>
        </p>
        <div class="genre">
          <h4 class="genre-tit">Genres:</h4>
          <div v-for="mov in movie.genres" :key="mov.id" class="genre-div">
            <p class="name-mo">{{ mov.name }}</p>
          </div>
        </div>
        <h5 class="prod">Production Companies</h5>
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
        <router-link :to="'/movie/similar_movies/' + movie.id" class="simi-mo">
          <button type="button" class="si-btn">
            <p class="view">View similar movies</p>
            <i class="fa fa-arrow-right"></i>
          </button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h3 class="no">No information available for this movie/show</h3>
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
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikeys}&language=en-US`
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

<style lang="scss">
.detail {
  display: flex;
  flex-direction: column;
  background-color: #35495e;
}

.movie-detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1%;
  padding: 2%;
}

.mo-first {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1%;
  background-color: #fff;
  border: 2px solid rgb(81, 78, 78);
}

.mo-second {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.featured-img {
  height: 30rem;
}

.tit {
  align-self: center;
  text-align: center;
  color: #fff;
  font-size: 1.6em;
}

.lang {
  color: #fff;
  margin: 0 0 2% 0;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 22px;
}

.spa {
  color: rgb(96, 215, 11);
  font-weight: 600;
}

.overview {
  letter-spacing: 0.9px;
  line-height: 24px;
  font-weight: 500;
  font-size: 1.1em;
}

.genre {
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
  align-items: center;
  margin-top: 7%;
}

.name-mo {
  color: rgb(96, 215, 11);
  margin: 7% 0 7% 0;
  font-weight: 600;
}

.comp {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 6% auto 0 auto;
}

.comp-first {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.featured {
  width: 50%;
}

.logox,
.logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3% 0 2% 0;
}

.prod {
  color: #fff;
  margin: 8% 0 0 0;
  font-size: 1.1em;
  text-align: center;
  text-decoration: underline;
  font-size: 1.3em;
}

.simi-mo {
  display: flex;
  flex-direction: column;
  margin: 2% 0 0 0;
}

.si-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3%;
  border-radius: 10px;
  color: #fff;
  border: transparent;
  font-size: 16px;
  background-color: rgb(4, 151, 53);
}

.genre-tit {
  font-size: 1.3em;
}

.si-btn:hover {
  background-color: rgb(184, 184, 14);
}

.view {
  margin: 0 5% 0 0;
}

.no {
  color: #fff;
  text-align: center;
  margin: 5% 0 0 0;
  letter-spacing: 0.8px;
}

@media only screen and (min-width: 992px) {
  .detail {
    height: 100vh;
  }

  .movie-detail {
    flex-direction: row;
  }

  .mo-first {
    width: 70%;
    margin: 0 2% 0 0;
    padding: 1%;
    border: 2px solid rgb(81, 78, 78);
  }

  .mo-second {
    width: 30%;
  }

  .featured-img {
    width: 100%;
    height: 30rem;
  }

  .overview {
    line-height: 22px;
    font-size: 1em;
  }

  .genre {
    flex-direction: row;
    width: 90%;
  }

  .genre-div {
    flex-direction: row;
    width: 100%;
  }

  .genre-tit {
    width: 10%;
    margin: 0 3% 0 0;
    font-size: 1em;
  }

  .name-mo {
    margin: 0 1% 0 1%;
  }

  .comp {
    flex-direction: row;
    width: 100%;
    color: #fff;
    margin: 3% 0 0 0;
  }

  .prod {
    margin: 4% 0 0 0;
    font-size: 1em;
  }

  .comp-first {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 6% 0 0 0;
    width: 30%;
    height: 3rem;
  }

  .logox {
    width: 100%;
  }

  .logos {
    width: 100%;
  }

  .featured {
    width: 60%;
  }

  .simi-mo {
    margin: 7% 0 0 0;
    width: 30%;
  }
}
</style>
