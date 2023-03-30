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
      this.store.popularMovie = res.data.results;
    });
  },
  components: {
    AppNavbar,
    AppMain,
  },
  methods: {
    search() {
      let newApi = this.store.APIsearchMovie;
      if (this.store.searchFilms != '') {
        newApi += this.store.searchFilms;
      };
      axios.get(newApi).then((res) => {
        console.log(res.data.results);
        this.store.popularMovie = res.data.results;
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
