<script>
import { store } from '../store';
import CardFilm from './CardFilm.vue';
import CardSeries from './CardSeries.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        CardFilm,
        CardSeries
    },
}
</script>




<template>
    <div id="bg-main">
        <h2>Films</h2>
        <div class="container-cards">
            <CardFilm v-if="store.movies.length > 0" v-for="movie in store.movies" :movie="movie"></CardFilm>
            <div v-else class="not-results">Nessun film trovato</div>
        </div>
        <h2>Tv series</h2>
        <div class="container-cards">
            <CardSeries v-if="store.seriesTv.length > 0" v-for="serie in store.seriesTv" :serie="serie"></CardSeries>
            <div v-else class="not-results">Nessuna serie trovata</div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
#bg-main {
    background-color: rgba(0, 0, 0, .6);
    color: white;
    height: calc(100vh - 76px);
    overflow-y: auto;
    text-align: center;

    .container-cards {
        display: flex;
        gap: 20px;

        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
        overflow-x: auto;
        height: 50%;

        .not-results {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 1.5em;
        }
    }
}
</style>