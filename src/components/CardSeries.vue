<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            hoveredClass: 'hovered',
            isHovered: false,
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

        imagePoster(serie) {
            return this.store.APIimage + serie.poster_path;
        },

        changeHovered() {
            this.isHovered = true;
        },

        notHovered() {
            this.isHovered = false;
        }
    },
}
</script>




<template>
    <div id="series-card">
        <div class="text-card">
            <h2>{{ serie.name }}</h2>
            <div><em>{{ serie.original_name }}</em></div>
            <div>Lingua Originale: <i :class="`fi fi-${flagLanguage(serie)} fis`"></i></div>
            <div>
                Voto Film:
                <i v-for="star in parseInt(serie.vote_average / 2)" class="fas fa-star"></i>
            </div>
        </div>
        <img :src=imagePoster(serie) alt="" class="image" :class="isHovered ? 'hovered' : 'image'"
            @mouseover="changeHovered()" @mouseleave="notHovered()">
    </div>
</template>



<style lang="scss" scoped>
#series-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: 250px;
    max-width: 250px;
    text-align: center;
    gap: .5em;
    border: 2px solid black;
    border-radius: 6px;
    padding: 0.5em 20px;
    background-color: rgba(0, 0, 0, .8);

    .text-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: .5em;

        position: relative;
        z-index: 2;
    }

    .image {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        opacity: 1;
        z-index: 3;
        border-radius: 8px;
    }

    .hovered {
        opacity: .2;
        z-index: 1;
    }
}
</style>