<template>
  <v-app>
    <v-main>
      <div class="text-center text-h5 font-weight-bold" id="title">
            <strong>محصولات</strong>
      </div>
      <v-container fluid class="">
        <v-row no-gutters  class="flex" justify="center"
     > 
          <v-col cols="6" sm="12" md="6" lg="6"  class="rounded"  >
            <Table></Table>
          </v-col>
          <v-col cols="2" sm="12" md="2" lg="2"  class=" rounded">
            <Finall></Finall>
          </v-col>
          <v-col cols="4" sm="12" md="4" lg="4"  class=" rounded">
            <Products></Products>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script lang="ts">
import Vue, {  onMounted, onUnmounted, ref, watch } from 'vue'
import { useStore } from 'vue2-helpers/vuex';
import {  Product,  } from '@/types/models';
import Table from "../components/Table.vue"
import Products from "../components/Products.vue"
import Finall from "../components/Finall.vue"
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue2-helpers/vue-router';

export default Vue.extend({
  components: {
    Table,
    Products,
    Finall
  },
  setup() {
    const store = useStore();
    const products = ref<Product[]>([]);
    const route = useRoute();
    const router=useRouter()
    onMounted(() => {
      store.dispatch('getProducts').then(() => {
        products.value = store.state.products
      }
      )
    })
    onUnmounted(() => {
      store.dispatch('clear')
    })
    return {
      store,
      products,
      route,
      router
    }
  }
})
</script>

<style scoped></style>

  