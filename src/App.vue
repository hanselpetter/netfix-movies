<template>
  <header
    id="nav"
    v-if="$store.state.user"
    class="header-first"
    :class="{ 'scrolled-nav': scrolledNav }"
  >
    <router-link to="/home" class="homx">
      <h1 class="netfix">
        <span class="net">NetFix</span>
        Movies
      </h1>
    </router-link>
    <div class="logfirst-div" v-show="!mobile">
      <router-link to="/home" class="log">Home</router-link>
      <div class="dropdown log">
        <button class="dropbtn">
          Movies
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <router-link to="/action" class="logmov">Action</router-link>
          <router-link to="/adventure" class="logmov">Adventure</router-link>
          <router-link to="/animation" class="logmov">Animation</router-link>
          <router-link to="/comedy" class="logmov">Comedy</router-link>
          <router-link to="/crime" class="logmov">Crime</router-link>
          <router-link to="/documentary" class="logmov"
            >Documentary</router-link
          >
          <router-link to="/drama" class="logmov">Drama</router-link>
          <router-link to="/family" class="logmov">Family</router-link>
          <router-link to="/history" class="logmov">History</router-link>
          <router-link to="/horror" class="logmov">Horror</router-link>
          <router-link to="/music" class="logmov">Music</router-link>
          <router-link to="/romance" class="logmov">Romance</router-link>
        </div>
      </div>
      <button class="log logout" @click="$store.dispatch('logout')">
        Logout
      </button>
    </div>
    <div class="icon">
      <button
        type="button"
        class="butto"
        @click="toggleMobileNav"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
      >
        <i class="fa fa-bars fa-2x" style="color: white"></i>
      </button>
    </div>
    <div class="mologfirst-div" v-show="mobileNav">
      <router-link to="/home" class="firs" @click="closeDropdown"
        >Home</router-link
      >
      <div class="dropdown firs">
        <button class="dropbtn">
          Movies
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <router-link to="/action" class="logmov" @click="closeDropdown"
            >Action</router-link
          >
          <router-link to="/adventure" class="logmov" @click="closeDropdown"
            >Adventure</router-link
          >
          <router-link to="/animation" class="logmov" @click="closeDropdown"
            >Animation</router-link
          >
          <router-link to="/comedy" class="logmov" @click="closeDropdown"
            >Comedy</router-link
          >
          <router-link to="/crime" class="logmov" @click="closeDropdown"
            >Crime</router-link
          >
          <router-link to="/documentary" class="logmov" @click="closeDropdown">
            Documentary</router-link
          >
          <router-link to="/drama" class="logmov" @click="closeDropdown"
            >Drama</router-link
          >
          <router-link to="/family" class="logmov" @click="closeDropdown"
            >Family</router-link
          >
          <router-link to="/history" class="logmov" @click="closeDropdown"
            >History</router-link
          >
          <router-link to="/horror" class="logmov" @click="closeDropdown"
            >Horror</router-link
          >
          <router-link to="/music" class="logmov" @click="closeDropdown"
            >Music</router-link
          >
          <router-link to="/romance" class="logmov" @click="closeDropdown"
            >Romance</router-link
          >
        </div>
      </div>
      <button class="log sign mologout" @click="$store.dispatch('logout')">
        Logout
      </button>
    </div>
  </header>
  <nav id="navi" class="header-sec" v-else>
    <router-link to="/" class="hom">
      <h1 class="netfix">
        <span class="net">NetFix</span>
        Movies
      </h1>
    </router-link>
    <div class="logsec-div">
      <router-link to="/login" class="log sign">
        <span class="bl">Log in</span>
      </router-link>
      <router-link to="/signup" class="log sign">
        <span class="bl">Sign up</span>
      </router-link>
    </div>
  </nav>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeDropdown() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return this;
      }
      this.scrolledNav = false;
      return this;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return this;
      }
      this.mobile = false;
      this.mobileNav = false;
      return this;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  &::selection {
    background: transparentize(#42b883, 0.5);
  }
}

body {
  max-width: 100%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

a {
  text-decoration: none;
}

.header-first,
.header-sec {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2% 0 2% 1%;
  background-color: #1a1017;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

.hom {
  display: flex;
  width: 50%;
}

.netfix {
  color: #fff;
  font-size: 28px;
}

.net {
  color: #42b883;
}

.logfirst-div,
.logsec-div {
  display: flex;
}

.logsec-div {
  width: 50%;
}

.icon {
  display: flex;
  width: 50%;
  align-self: flex-end;
  justify-content: flex-end;
}

.butto {
  width: 20%;
  background-color: #1a1017;
  border: transparent;
}

.mologfirst-div {
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #1a1017;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20%;
  padding-left: 5%;
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
}

.log {
  color: #fff;
  width: 15%;
  font-size: 1.2em;
}

.firs {
  color: #fff;
  width: 50%;
  font-size: 1.4em;
  margin-bottom: 6%;
}

.sign {
  width: 50%;
}

.dropbtn {
  display: flex;
  background-color: transparent;
  border: none;
  width: 60%;
  justify-content: space-between;
  color: #fff;
  font-size: 1em;
  margin: 0 1% 0 1%;
}

.log:hover,
.dropdown:hover .dropbtn {
  text-decoration: underline;
  color: yellow;
}

.sign {
  margin-left: 10%;
}

.logout {
 background-color: #42b883;
  border-radius: 10px;
  border: none;
}

.mologout {
  background-color: #42b883;
  border-radius: 10px;
  border: none;
  padding: 1%;
  margin-top: 4%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .logmov {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content .logmov:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media only screen and (min-width: 992px) {
  .header-first,
  .header-sec {
    max-width: 100%;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    padding: 0.7% 0 0.7% 2%;
  }

  .homx, .hom {
    width: 40%; 
  }

  .logfirst-div {
    width: 100%;
    margin: 0 0 0 4%;
    padding: 0 0 0 22%;
    align-items: center;
  }

  .logsec-div {
    width: 60%;
    margin: 0 0 0 30%;
    padding: 0 0 0 0;
    align-items: center;
    justify-content: flex-end;
  }

  .log {
    width: 35%;
    font-size: 1.1em;
  }

  .logout {
    padding: 0.6%;
    margin: 0 0 0 19%;
    justify-self: flex-end;
  }

  .sign {
    display: flex;
    align-items: center;
    width: 15%;
  }

  .bl {
    margin: 0 6% 0 4%;
  }
}
</style>
