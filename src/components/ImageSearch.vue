<template>
    <nav class="nav">
        <img src="../assets/logo.png" alt="logo" class="logo">
        <h1 class="title">customized photo gallery.</h1>
    </nav>
    <form class="form" onsubmit="event.preventDefault()">
        <input
        v-model="searchBox"
        @keypress.enter="triggerSearch"
        type="text"
        placeholder="Search photos... (press Enter to start searching)" />
    </form>
    <ImageGrid
    v-if="searchBox"
    :query="searchBox"
    :pictures="pictures"
        />
</template>

<script>
import ImageGrid from './ImageGrid.vue'
import imageApi from '@/api/imageApi'
export default {

    components: {
        ImageGrid
    },
    data() {
        return {
            searchBox: '',
            pictures: []

        }
    },
     methods: {
        async triggerSearch( ) {
            try {
                const { data } = await imageApi.get(`?query=${this.searchBox}&page=1&per_page=12`)
                const { photos } = data
                for(let i = 0; i < photos.length; i++) {
                    this.pictures.push({
                      photographer: photos[i].photographer,
                      src: photos[i].src.medium,
                    })
                }
                
            }
            catch(e) {
                console.log(e);
            }
        }
    },

    watch: {
        searchBox(newVal, oldVal) {
            if( !newVal && oldVal.length > 0 ) {
                this.pictures = []
            }
        }
    }
    
}
</script>

<style scoped>

    .nav {
        display: flex;
        height: 10vh;
        background-color: #0096c7;
        align-items: center;
        padding: 10px 15px;
    }

    .title {
        color: #CAF0F8;
        margin-left: 15px;
    }

    .logo {
        width: 5%;
    }

    .form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    }

    input {
        border-radius: 5px;
        border: none;
        color: #727272;
        outline: 2px solid #90E0EF;
        padding: 10px;
        transition: all .3s;
        width: 50vw;
    }

    input:focus {
        transform: scale(1.1);
        outline: 2px solid #48CAE4;
    }

</style>