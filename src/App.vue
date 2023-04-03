<script >
import { store } from './store';
import axios from 'axios'
import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      store,
    }
  },
  created() {
    axios.get(store.APIpopularMovie).then((res) => {
      this.store.movies = res.data.results;

    });

    axios.get(store.APIpopularSeries).then((res) => {
      this.store.seriesTv = res.data.results;
    });

  },
  components: {
    AppNavbar,
    AppMain,
  },
  methods: {
    search() {
      let newApiFilm = this.store.APIsearchMovie;
      if (this.store.searchFilms != '') {
        newApiFilm += this.store.searchFilms;
      };
      axios.get(newApiFilm).then((res) => {
        this.store.movies = res.data.results;
      });

      let newApiSeries = this.store.APIsearchSeries;
      if (this.store.searchFilms != '') {
        newApiSeries += this.store.searchFilms;
      };
      axios.get(newApiSeries).then((res) => {
        this.store.seriesTv = res.data.results;
      });
    },
  },
}
</script>

<template>
  <AppNavbar @searchFilm="search()"></AppNavbar>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
