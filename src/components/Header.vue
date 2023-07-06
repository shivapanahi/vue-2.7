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
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue2-helpers/vue-router';
import { useStore } from 'vue2-helpers/vuex';


export default defineComponent({
    props: {
        store: String,
    },
    setup(props) {
        const router = useRouter();
        const route = useRoute()
        const store = useStore();
        const user = JSON.parse(localStorage.getItem('user') ?? '{}')
        return {
            route,
            user
        }
    },
})
</script>