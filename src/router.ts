import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import TvShows from './views/TvShows.vue'
import Search from './views/Search.vue'
import MyList from './views/MyList.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies
    },
    {
        path: '/tvshows',
        name: 'TvShows',
        component: TvShows
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/mylist',
        name: 'MyList',
        component: MyList
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
      }
]

export default createRouter({
    history: createWebHistory(),
    routes
})