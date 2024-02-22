<script setup lang="ts">
import { ref, computed } from 'vue'
import VueHorizontal from 'vue-horizontal'

const popularFilms = ref([])
const popularTvShows = ref([])
const basicUrl = "https://image.tmdb.org/t/p/original/"

/*
Query popular films
*/

const popularFilmsUrl = 'https://api.themoviedb.org/3/movie/popular?language=fr&page=1'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTQ1ZGU3YmQ3Mzc2Zjk4MGJiYWQ4NTFmOTZjZjRiNSIsInN1YiI6IjVkOTFiZDUwMTA5Y2QwMDAxOTQ2NjAxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdaIiIR-b0Xp-EK6jeiItQ0ggEKahk3rz1gsEXsCv0g'
  }
};

fetch(popularFilmsUrl, options)
  .then(res => res.json())
  .then(json => {
    popularFilms.value = json.results;
    console.log("popular films", popularFilms.value);
  })
  .catch(err => console.error('error:' + err))

  /*
  Query popular TV Shows
  */

  const tvShowsUrl = 'https://api.themoviedb.org/3/tv/popular?language=fr&page=1';

fetch(tvShowsUrl, options)
  .then(res => res.json())
  .then(json => {
    popularTvShows.value = json.results;
    console.log("popular tv shows", popularTvShows.value);
    //console.log("tv shows",json);
  })
  .catch(err => console.error('error:' + err));

  /*
  Random film for Hero
  */

  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    const heroFilm = ref([]);
    //heroFilm.value.push(popularFilms.value[getRandomInt(21)])
</script>

<template>
    <div>
        <div v-for="film in heroFilm" class="heroSection d-flex">
            <v-card>
                <v-card-title>{{ film.title }}</v-card-title>

            </v-card>
            <v-card>
            </v-card>
        </div>
        <div class="mt-8 mb-4">
            <h2 class="text-uppercase font-weight-light">Films Populaires</h2>
        </div>
        <vue-horizontal>
            <div v-for="popularFilm in popularFilms">
                <v-card width="200" class="mr-3">
                    <v-img
                        :src="basicUrl + popularFilm.poster_path"
                        height="300px"></v-img>
                    <v-card-title>{{ popularFilm.title }}</v-card-title>
                    <v-card-subtitle>{{ popularFilm.vote_average }}</v-card-subtitle>
                </v-card>
            </div>
        </vue-horizontal>
        <div class="mt-8 mb-4">
            <h2 class="text-uppercase font-weight-light">Séries Populaires</h2>
        </div>
        <vue-horizontal>
            <div v-for="popularTvShow in popularTvShows">
                <v-card width="200" class="mr-3">
                    <v-img
                        :src="basicUrl + popularTvShow.poster_path"
                        height="300px"></v-img>
                    <v-card-title>{{ popularTvShow.name }}</v-card-title>
                    <v-card-subtitle>{{ popularTvShow.vote_average }}</v-card-subtitle>
                </v-card>
            </div>
        </vue-horizontal>
    </div>
</template>

<style scoped>

</style>