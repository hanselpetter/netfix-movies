import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetail from "../views/MovieDetail.vue";
import FirstHome from "../views/FirstHome.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import ActionMovies from "../views/ActionMovies.vue";
import AdventureMovies from "../views/AdventureMovies.vue";
import AnimationMovies from "../views/AnimationMovies.vue";
import ComedyMovies from "../views/ComedyMovies.vue";
import CrimeMovies from "../views/CrimeMovies.vue";
import DocMovies from "../views/DocMovies.vue";
import DramaMovie from "../views/DramaMovie.vue";
import FamilyMovies from "../views/FamilyMovies.vue";
import HistoryMovies from "../views/HistoryMovies.vue";
import HorrorMovies from "../views/HorrorMovies.vue";
import MusicMovies from "../views/MusicMovies.vue";
import RomanceMovies from "../views/RomanceMovies.vue";
import { auth } from "../firebase";
import SimilarMovies from "../views/SimilarMovies.vue";
import TvShowDetail from "../views/TvShowDetail.vue";
import SimilarTvShows from "../views/SimilarTvShows.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/movie/:id",
    name: "Detail",
    component: MovieDetail,
  },
  {
    path: "/action",
    name: "Action-Movies",
    component: ActionMovies,
  },
  {
    path: "/adventure",
    name: "Adventure-Movies",
    component: AdventureMovies,
  },
  {
    path: "/animation",
    name: "Animation-Movies",
    component: AnimationMovies,
  },
  {
    path: "/tv_show/:id",
    name: "Detail-show",
    component: TvShowDetail,
  },
  {
    path: "/comedy",
    name: "Comedy-Movies",
    component: ComedyMovies,
  },
  {
    path: "/crime",
    name: "Crime-Movies",
    component: CrimeMovies,
  },
  {
    path: "/documentary",
    name: "documentary-Movies",
    component: DocMovies,
  },
  {
    path: "/drama",
    name: "drama-Movies",
    component: DramaMovie,
  },
  {
    path: "/family",
    name: "family-Movies",
    component: FamilyMovies,
  },
  {
    path: "/history",
    name: "history-Movies",
    component: HistoryMovies,
  },
  {
    path: "/horror",
    name: "horror-Movies",
    component: HorrorMovies,
  },
  {
    path: "/music",
    name: "music-Movies",
    component: MusicMovies,
  },
  {
    path: "/romance",
    name: "romance-Movies",
    component: RomanceMovies,
  },
  {
    path: "/movie/similar_movies/:id",
    name: "Similar",
    component: SimilarMovies,
  },
  {
    path: "/tv_show/similar_tv_show/:id",
    name: "Similar-show",
    component: SimilarTvShows,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/",
    name: "FirstHome",
    component: FirstHome,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (to.path === "/signup" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/home");
    return;
  }

  next();
});

export default router;
