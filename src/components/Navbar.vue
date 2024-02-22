<script setup lang="ts">
    //
</script>

<template>
    <v-bottom-navigation grow>
      <v-btn to="/">
        <v-icon>mdi-home</v-icon>

        <span>Accueil</span>
      </v-btn>

      <v-btn to="/movies">
        <v-icon>mdi-filmstrip</v-icon>

        <span>Films</span>
      </v-btn>

      <v-btn to="/tvshows">
        <v-icon>mdi-television-classic</v-icon>

        <span>Séries</span>
      </v-btn>

      <v-btn to="/search">
        <v-icon>mdi-magnify</v-icon>

        <span>Chercher</span>
      </v-btn>

      <v-btn to="/mylist">
        <v-icon>mdi-heart</v-icon>

        <span>Ma liste</span>
      </v-btn>
    </v-bottom-navigation>
</template>

<style scoped>

</style>