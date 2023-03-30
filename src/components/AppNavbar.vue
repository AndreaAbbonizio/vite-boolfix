<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <nav>
        <div id="navbar-inner">
            <h1>BOOLFIX</h1>
            <div id="input-container">
                <input type="text" placeholder="Cerca un film" v-model="store.searchFilms">
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