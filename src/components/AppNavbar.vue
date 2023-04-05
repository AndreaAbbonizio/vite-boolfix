<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        changeMain() {
            this.store.activeMovie = true;
            this.store.activeTv = true;
        },
        changeMainMovie() {
            this.store.activeMovie = true;
            this.store.activeTv = false;
        },
        changeMainTv() {
            this.store.activeMovie = false;
            this.store.activeTv = true;
        }


    },
}
</script>

<template>
    <nav>
        <div id="navbar-inner">
            <div class="navbar-left">
                <h1>BOOLFLIX</h1>
                <ul>
                    <li @click="changeMain()">Home</li>
                    <li @click="changeMainMovie()">Movies</li>
                    <li @click="changeMainTv()">Tv Series</li>
                </ul>

            </div>
            <div id="input-container">
                <input type="text" placeholder="Cerca un film" v-model="store.searchFilms"
                    @keyup.enter="$emit('searchFilm')">
                <button @click="$emit('searchFilm')">Cerca</button>
            </div>

        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);

    #navbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 50px;


        .navbar-left {
            display: flex;
            gap: 20px;
            align-items: center;

            ul {
                display: flex;
                gap: 10px;
                list-style-type: none;
            }
        }
    }

    input {
        margin-right: .6em;
        padding: 5px 10px;
    }

    button {
        padding: 5px 10px;
    }
}
</style>