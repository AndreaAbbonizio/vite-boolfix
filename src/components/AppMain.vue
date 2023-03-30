<script>
import { store } from '../store';
import CardFilm from './CardFilm.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        CardFilm,
    }
}
</script>




<template>
    <div id="bg-main">
        <div id="container-cards">
            <CardFilm v-for="movie in store.popularMovie" :title="movie.title" :originalTitle="movie.original_title"
                :languageFilm="movie.original_language" :rateFilm="movie.vote_average"></CardFilm>
        </div>
    </div>
</template>



<style lang="scss" scoped>
#bg-main {
    background-color: rgba(0, 0, 0, .6);
    color: white;
    height: calc(100% - 76px);

    #container-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        max-width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
    }
}
</style>