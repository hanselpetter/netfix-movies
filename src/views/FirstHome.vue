<template>
  <div class="main">
    <div class="sec-one spacing">
      <h1 class="titlex font">NetFix marks the spot for free streaming.</h1>
      <p class="text font">
        Say goodbye to free movie websites and hello to the app that brings you
        over 50,000 on-demand titles, plus live TV on all your favorite devices.
      </p>
    </div>
    <div class="sec-two spacing">
      <h1 class="play font">Now playing on NetFix.</h1>
      <div class="texto font">
        Our huge library of ad-supported movies and shows is available on
        demand, 24/7. Start watching now, no payment or subscription required.
      </div>
      <div>
        <p class="dat font spacing">
          <span class="spn font">From: </span>
          {{ movie.dates.minimum }}
          <span class="spn font"> to: </span>
          <span>{{ movie.dates.maximum }}</span>
        </p>
      </div>
      <div class="features font spacing">
        <div
          class="movx"
          v-for="mov in movie.results.slice(0, 6)"
          :key="mov.id"
        >
          <div class="imag-mov">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + mov.poster_path"
              alt="Movie Poster"
              class="img-mov"
            />
            <h5 class="motit">{{ mov.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="sec-three spacing">
      <div class="div3">
        <h1 class="text3 font">Come to the pro side.</h1>
        <p class="pthree font">
          Did you know that you can add your own personal movie and music
          collections to the Plex app? When you create your own server you
          can—pro status unlocked. Take it to the next level with a Plex Pass
          upgrade for the most premium personal media experience out there.
        </p>
      </div>
    </div>
    <div class="sec-four spacing">
      <h1 class="tit-four font">NetFlix</h1>
      <div class="blockfr">
        <div class="bl-div font">
          <p class="bloc font">Company</p>
          <p class="tex font">Our Team</p>
          <p class="tex font">Careers</p>
          <p class="tex font">Charity</p>
          <p class="tex font">Partners</p>
          <p class="tex font">NetFlix Labs</p>
          <p class="tex font">CordCutter</p>
        </div>
        <div class="bl-div font">
          <p class="bloc font">Support</p>
          <p class="tex font">Articles</p>
          <p class="tex font">Forums</p>
          <p class="tex font">Billing Questons</p>
          <p class="tex font">Status</p>
          <p class="tex font">Bug Bounty</p>
        </div>
        <div class="bl-div font">
          <p class="bloc font">Community</p>
          <p class="tex font">NetFlix Blog</p>
          <p class="tex font">The Gist</p>
        </div>
      </div>
    </div>
  </div>
  <FooterBloackVue />
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";
import FooterBloackVue from "../components/FooterBloack.vue";

export default {
  components: {
    FooterBloackVue,
  },
  created() {
    this.Movix();
  },
  setup() {
    const search = ref("");
    const movie = ref([]);
    const Movix = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${env.apikeys}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    };
    return {
      search,
      movie,
      Movix,
    };
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.sec-one {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background: url("../assets/movx.png");
  background-size: cover;
  padding: 2% 3% 2% 5%;
  color: #fff;
  height: 28rem;
}

.sec-two {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2% 10% 2%;
  background-color: #d8dde1;
}

.titlex {
  font-size: 2.2em;
}

.text {
  font-size: 1.2em;
  margin: 4% 0 0 0;
}

.spacing {
  letter-spacing: 0.7px;
}

.play {
  text-align: center;
  margin: 4% 0 0 0;
}

.texto {
  text-align: center;
  margin: 3% 0 0 0;
  line-height: 24px;
  font-size: 1.29em;
  width: 100%;
}

.dat {
  text-align: center;
  font-weight: 600;
  margin: 2% 0 0 0;
  font-size: 1.29em;
  color: #0d6af5;
}

.spn {
  color: #000;
  font-size: 1.1em;
}

.movx,
.imag-mov,
.features,
.sec-three,
.div3,
.blockfr,
.bl-div {
  display: flex;
  flex-direction: column;
}

.features {
  align-items: center;
  padding: 0 1% 0 1%;
  width: 100%;
  margin: 3% 0 0 0;
}

.movx {
  width: 80%;
  margin: 6% 0 0 0;
  padding: 2%;
  background-color: #fff;
}

.imag-mov {
  width: 100%;
}

.motit {
  text-align: center;
  margin: 3% 0 1% 0;
  font-size: 16px;
}

.sec-three {
  background: url("../assets/pur.png");
  background-size: cover;
  padding: 0 3% 20% 4%;
}

.text3 {
  text-align: center;
  margin: 28% 0 0 0;
  color: #fff;
  font-size: 2.2em;
}

.font {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.div3 {
  justify-content: flex-start;
}

.pthree {
  margin: 10% 0 0 0;
  text-align: center;
  color: #fff;
  line-height: 22px;
  letter-spacing: 0.7px;
  font-size: 1.2em;
}

.sec-four {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #28292c;
  color: #fff;
  padding: 5% 2% 2% 4%;
}

.tit-four {
  width: 50%;
}

.blockfr {
  width: 40%;
  align-items: center;
}

.bl-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 6% 0 5% 0;
  font-size: 17px;
}

.bloc {
  text-decoration: underline;
  margin: 0 0 6% 0;
  font-size: 1.3em;
}

.tex {
  text-align: center;
  margin: 5% 0 3% 0;
  font-size: 1.1em;
}

@media only screen and (min-width: 992px) {
  .sec-one {
    background: url("../assets/movx.png");
    background-size: cover;
  }

  .titlex {
    font-size: 3em;
    margin: 0 0 0.5% 0;
  }

  .text {
    font-size: 1.1em;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.6px;
  }

  .sec-two {
    padding: 0 0 3% 0;
  }

  .play {
    font-size: 1.1em;
    font-size: 2.2em;
    letter-spacing: 0.7px;
    line-height: 22px;
  }

  .texto {
    text-align: center;
    line-height: 22px;
  }

  .dat {
    margin: 1% 0 0 0;
  }

  .features {
    flex-direction: row;
    width: 98%;
  }

  .movx {
    width: 15%;
    padding: 0.5%;
    margin: 0 1% 0 1%;
  }

  .sec-three {
    background: url("../assets/blue.png");
    background-size: cover;
    width: 100%;
    height: 26rem;
  }

  .div3 {
    max-width: 50%;
    margin: 7rem 0 0 0;
    text-align: start;
  }

  .text3 {
    text-align: start;
    font-size: 2.6em;
    margin: 0;
  }

  .pthree {
    margin: 5% 0 0 0;
  }

  .sec-four {
    flex-direction: row;
    padding: 5% 3% 3% 5%;
  }

  .tit-four {
    width: 36%;
  }

  .blockfr {
    flex-direction: row;
    align-items: flex-start;
    width: 64%;
  }

  .bl-div {
    width: 42%;
    align-items: center;
    margin: 0;
  }

  .bloc {
    margin: 0 0 3% 0;
  }

  .tex {
    margin: 1.9% 0 1.9% 0;
  }
}
</style>
