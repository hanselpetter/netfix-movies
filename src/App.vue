<template>
  <header id="nav" v-if="$store.state.user">
    <router-link to="/">
      <h1>
        <span>NetFix</span>
        Movies
      </h1>
    </router-link>
    <div class="log-div">
      <router-link to="/" class="log">Home</router-link>
      <button @click="$store.dispatch('logout')" class="log sign logout">Logout</button>
    </div>
  </header>
  <header id="nav" v-else>
    <router-link to="/home">
      <h1>
        <span>NetFix</span>
        Movies
      </h1>
    </router-link>
    <div class="log-div">
      <router-link to="/login" class="log">Log in</router-link>
      <router-link to="/signup" class="log sign">Sign up</router-link>
    </div>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
  </footer>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}
body {
  background-color: #35495E;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  h1 {
    color: #FFF;
    font-size: 28px;
    span {
      color: #42B883;
    }
  }
}

.log-div {
  display: flex;
  width:  48%;
  align-items: center;
  justify-content: end;
  @media only screen and (min-width:992px) {
    width:  80%;
  }
}

.log {
  color: #fff;
}

.log:hover {
  text-decoration: underline;
  color: yellow;
}

.sign {
  margin-left: 5%;
  @media only screen and (min-width:992px) {
    margin-left: 3%
  }
}

.logout {
  padding: 2%;
  background-color: #42B883;
  border-radius: 10px;
  border: none;
  @media only screen and (min-width:992px) {
    padding: 1%;
  }
}
</style>
