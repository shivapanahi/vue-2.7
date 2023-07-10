<template>
    <div>
        <Header :store="route.query.store"></Header>
        <div>
           <router-view></router-view> 
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { useRoute } from 'vue2-helpers/vue-router';
import Header from "@/components/Header.vue"

export default Vue.extend({
    components: {
     Header
  },
  setup() {
    const route = useRoute();
    return {
        route,
    }
  }
})
</script>