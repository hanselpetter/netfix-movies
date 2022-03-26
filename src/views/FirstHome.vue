<template>
  <div class="home">
    <div class="backgroung">
      <h1 class="title-one"> NetFix marks the spot for free streaming.</h1>
      <p class="text">Say goodbye to free movie websites and hello to the app that brings you over 50,000 on-demand titles, plus live TV on all your favorite devices.</p>
    </div>
    <div class="section-two">
      <h1 class="title-two">Now playing on NetFix.</h1>
      <p class="text-two">
        Our huge library of ad-supported movies and shows is available on demand, 24/7. 
        Start watching now, no payment or subscription required.
      </p>
      <div class="features">
        <img src="https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg" alt="Love, Rosie poster" class="featured marg" />
        <img src="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg" alt="love actually Poster" class="featured marg" />
        <img src="https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg" alt="I love you man Poster" class="featured marg" />
        <img src="https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="In the mood for love Poster" class="featured marg" />
        <img src="https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg" alt="Crazy stupid love Poster" class="featured" />
      </div>
    </div>
    <div class="section-two sec">
      <h1 class="title-two">250+ reasons to love Live TV.</h1>
      <p class="text-two">
        Tune in to over 250 channels anytime, on any device, no extra hardware required. It’s a live TV free for all, with action, sports, kids stuff, cooking, news, and more streaming 24 hours a day, 7 days a week.
      </p>
    </div>
    <div class="section-three">
      <h1 class="title-three">Come to the pro side.</h1>
      <p class="text-three">
        Did you know that you can add your own personal movie and music collections to the Plex app? When you create your own server you can—pro status unlocked. Take it to the next level with a Plex Pass upgrade for the most premium personal media experience out there.
      </p>
    </div>
    <div class="section-four">
      <h1 class="title-four">NetFlix</h1>
      <div class="block-tex">
        <div class="bl-div">
          <p class="block">Company</p>
          <p class="tex">Our Team</p>
          <p class="tex">Careers</p>
          <p class="tex">Charity</p>
          <p class="tex">Partners</p>
          <p class="tex">NetFlix Labs</p>
          <p class="tex">CordCutter</p>
        </div>
        <div class="bl-div">
          <p class="block">Support</p>
          <p class="tex">Articles</p>
          <p class="tex">Forums</p>
          <p class="tex">Billing Questons</p>
          <p class="tex">Status</p>
          <p class="tex">Bug Bounty</p>
        </div>
        <div class="bl-div">
          <p class="block">Community</p>
          <p class="tex">NetFlix Blog</p>
          <p class="tex">The Gist</p>
        </div>
      </div>
    </div>
    <div class="foot-div">
      <hr />
      <div class="foot">
        <small>Copyright © 2022 NetFlix Privacy & Legal AdChoices </small> 
        <small class="foo"> Accessibility Language: English (US)</small>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import env from '@/env.js';

export default {
  setup () {
    const search = ref('');
    const movies = ref([]);
    const SearchMovies = () => {
      if (search.value != '') {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            movies.value = data.Search;
            search.value = '';
          });
        }
      }
      return {
        search,
        movies,
        SearchMovies
      }
  },
}
</script>

<style lang="scss">
.backgroung {
  background: url('../assets/smal.png');
  background-size: cover;
  height: 28rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2% 3% 2% 5%;
  @media only screen and (min-width:500px) {
    background: url('../assets/phon.png');
    background-size: cover;
  }
  @media only screen and (min-width:992px) {
    background: url('../assets/pr.jpg');
    background-size: cover;
    height: 35rem;
    padding: 0 0 0 2%;
  }
  .title-one {
    max-width: 100%;
    margin-top: 13rem;
    color: #fff;
    @media only screen and (min-width:992px) {
      max-width: 40%;
      font-size: 2.6em;
      font-weight: bold;
      margin-top: 0;
      color: #000;
    }
  }
  .text {
    max-width: 100%;
    color: #fff;
    font-size: 1.08em;
    margin-top: 2%;
    @media only screen and (min-width:992px) {
      font-size: 1.3em;
      color: #000;
      max-width: 35%;
      margin-top: 1.5%;
    }
  }
}

.section-two {
  background-color: #f2f3f4;
  display: flex;
  flex-direction: column;
  padding: 8% 4% 9% 4%;
  @media only screen and (min-width:992px) {
    padding: 6% 4% 6% 4%;
  }
}

.title-two {
  text-align: center;
  max-width: 100%;
  padding: 2% 0 3% 0;
  @media only screen and (min-width:992px) {
    padding: 0;
  }
}

.text-two {
  text-align: center;
  max-width: 100%;
  margin-top: 3%;
  padding: 0 0 4% 0;
  @media only screen and (min-width:992px) {
    padding: 0;
  }
}

.features {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width:992px) {
    flex-direction: row;
    margin-top: 7%;
    justify-content: space-between;
  }
  .featured {
    display: block;
    width: 80%;
    height: 370px;
    object-fit: cover;
    margin: 4% auto 0 auto;
    position: relative;
    z-index: 0;
    @media only screen and (min-width:992px) {
      flex-direction: row;
      width: 20%;
      margin-right: 2%;
      height: 340px;
    }
  }
}

.marg {
  @media only screen and (min-width:992px) {
    margin-right: 2%;
  }
}

.sec {
  background-color: #fff;
  padding: 6% 7% 6% 7%;
  @media only screen and (min-width:992px) {
    padding: 4% 7% 4% 7%;
  }
  
}

.foot-div {
  display: flex;
  background-color: #28292c;
  flex-direction: column;
  .foot {
    color: #fff;
    padding: 2% 0 2% 2%;
    @media only screen and (min-width:992px) {
      padding: 2% 0 0.5% 2%;
    }
  }
}
.section-four {
  background-color: #28292c;
  display: flex;
  flex-direction: row;
  padding: 9% 3% 3% 5%;
  color: #fff;
  @media only screen and (min-width:992px) {
    padding: 5% 3% 3% 3%;
  }
  .title-four {
    width: 80%;
    @media only screen and (min-width:992px) {
    width: 35%;
  }
  }
  .block-tex {
    display: flex;
    flex-direction: column;
    width: 75%;
    @media only screen and (min-width:992px) {
      flex-direction: row;
      justify-content: end;
    }
    .bl-div {
      width: 35%;
      margin-bottom: 12%;
      @media only screen and (min-width:992px) {
        width: 35%;
        margin-bottom: 0;
      }
      .block {
        text-decoration: underline;
        padding-bottom: 1%;
        font-weight: 600;
        font-size: 1.23em;
        @media only screen and (min-width:992px) {
          text-decoration: underline;
          padding-bottom: 1%;
          font-weight: 600;
        }
      }
      .tex {
        margin-top: 5.5%;
        @media only screen and (min-width:992px) {
          margin-top: 3.5%;
        }
      }
    }
  }
}

.section-three {
  background: url('../assets/pur.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 0 2% 20% 3%;
  height: 25rem;
  align-items: flex-start;
  justify-content: end;
  @media only screen and (min-width:992px) {
    background: url('../assets/blue.png');
    background-size: cover;
    height: 30rem;
    padding: 2%;
    align-items: flex-start;
    justify-content: center;
  }

  .title-three {
    max-width: 100%;
    margin-top: 17rem;
    color: #fff;
    @media only screen and (min-width:992px) {
      max-width: 40%;
      font-size: 2.8em;
      margin: 0;
      font-weight: bold;
      color: #fff;
    }
  }
  .text-three {
    max-width: 100%;
    color: #fff;
    font-size: 1.08em;
    @media only screen and (min-width:992px) {
      font-size: 1.1em;
      color: #fff;
      max-width: 42%;
      margin-top: 3%;
    }
  }
}

.foo {
  margin-left: 2%;
}

.home {
  .feature-card {
    position: relative;
    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;
      h3 {
        color:#FFF;
        margin-bottom: 16px;
      }
      p {
        color: #FFF;
      }
  }
}
.search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      &[type="text"] {
        width: 100%;
        color: #FFF;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42B883;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #3B8070;
        }
      }
    }
  }
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        .product-image {
          position: relative;
          display: block;
          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .year {
            color: #AAA;
            font-size: 14px;
          }
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
