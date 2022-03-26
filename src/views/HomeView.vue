<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt1638002">
        <img src="https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg" alt="Love, Rosie Poster" class="featured-img" />
        <div class="detail">
          <h3>Love, Rosie</h3>
          <p>
            From the age of 5 Rosie Dunne and Alex Stewart have been best friends, as they take on life they just end up getting separated time and time again. 
            When it comes to love it's just everyone else but each other.... But when will they realise they are meant to be together?
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search for movies here..." v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
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
// hello
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
    width: 100%;
    padding: 3.5%;
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
        padding: 2%;
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
