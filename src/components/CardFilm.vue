<script>
import { store } from '../store';
export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        originalTitle: String,
        languageFilm: String,
        rateFilm: Number,
    },
}
</script>




<template>
    <div id="film-card">
        <h2>{{ title }}</h2>
        <div><em>{{ originalTitle }}</em></div>
        <div>Lingua Originale: {{ languageFilm }}</div>
        <div>Voto Film: {{ rateFilm }}</div>
    </div>
</template>



<style lang="scss" scoped>
#film-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 4 - 20px / 4 * 3);
    text-align: center;
    gap: .5em;
    border: 2px solid black;
    border-radius: 6px;
    padding: .5em 0;
}
</style>