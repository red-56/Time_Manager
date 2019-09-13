import Vue from "vue";
import Router from "vue-router";
import User from "./components/User.vue"; 

Vue.use(Router); // tell Vue to action with Router

export default new Router({

  
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ // All the routes are described here
    {
      path: '/api/users/:id',
      component: User
    }
  ]
});