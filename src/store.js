import { reactive } from 'vue';
// questa sintassi ci genera un oggetto reactive, dalla variabile globale 'vue

// anche questa è sintassi obbligatoria
export const store = reactive({
    APIpopularMovie: 'https://api.themoviedb.org/3/movie/popular?api_key=90a25af45a54fd411fdf0f71a6dda48f&language=en-US',

    APIsearchMovie: 'https://api.themoviedb.org/3/search/movie?api_key=90a25af45a54fd411fdf0f71a6dda48f&query=',

    APIpopularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=90a25af45a54fd411fdf0f71a6dda48f',

    APIsearchSeries: 'https://api.themoviedb.org/3/search/tv?api_key=90a25af45a54fd411fdf0f71a6dda48f&query=',

    APIimage: 'https://image.tmdb.org/t/p/w342',

    movies: [],

    seriesTv: [],

    searchFilms: '',

});