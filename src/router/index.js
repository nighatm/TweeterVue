import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/Home.vue";
import SignupPage from "../views/Signup.vue";
import LoginPage from "../views/Login.vue";
import ProfilePage from "../views/Profile.vue";
import DiscoverPage from "../views/Discover.vue";
import FeedPage from "../views/Feed.vue";
import TweetPage from "../views/Tweet.vue";
import Logout from "../components/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage
  },
  {
    path: "/discover",
    name: "discover-page",
    component: DiscoverPage
  },
  {
    path: "/feed",
    name: "feed-page",
    component: FeedPage
  },
  {
    path: "/tweet",
    name: "Tweet",
    component: TweetPage
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  }
];

const router = new VueRouter({
  routes
});

export default router;
