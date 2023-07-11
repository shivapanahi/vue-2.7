<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <p class="">{{ store }}</p>
            
        </div> <v-spacer></v-spacer>
        <p class="">
       {{ user.username }}</p>
    </v-app-bar>
</template>

<script lang="ts" script>
import {  defineComponent } from 'vue'
import { useRoute } from 'vue2-helpers/vue-router';


export default defineComponent({
    props: {
        store: String,
    },
    setup(props) {
        const route = useRoute()
        const user = JSON.parse(localStorage.getItem('user') ?? '{}')
        return {
            route,
            user
        }
    },
})
</script>