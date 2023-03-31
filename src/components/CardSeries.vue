<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        serie: Object,
    },
    methods: {
        flagLanguage(serie) {
            let language = serie.original_language;
            if (language == 'en') {
                language = 'gb';
                console.log(language);
            } else if (language == '') {
                language = 'Sconosciuta';
            } else if (language == 'ja') {
                language = 'jp';
            } else if (language == 'zh') {
                language = 'cn';
            } else if (language == 'ko') {
                language = 'kr';
            } else if (language == 'hi') {
                language = 'in';
            };
            return language;
        },
    },
}
</script>




<template>
    <div id="series-card">
        <h2>{{ serie.name }}</h2>
        <div><em>{{ serie.original_name }}</em></div>
        <div>Lingua Originale: <i :class="`fi fi-${flagLanguage(serie)} fis`"></i></div>
        <div>Voto Film: {{ serie.vote_average }}</div>
    </div>
</template>



<style lang="scss" scoped>
#series-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    text-align: center;
    gap: .5em;
    border: 2px solid black;
    border-radius: 6px;
    padding: 0.5em 20px;
}
</style>