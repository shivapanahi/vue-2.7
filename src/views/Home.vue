<template>
  <v-app>
    <Header :store="route.query.store"></Header>
    <v-main>
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
import Vue, { computed, onMounted, ref } from 'vue'
import { useStore } from 'vue2-helpers/vuex';
import { Cart, Product, Store } from '@/types/models';
import Header from "../components/Header.vue"
import Table from "../components/Table.vue"
import Products from "../components/Products.vue"
import Finall from "../components/Finall.vue"
import { useRoute } from 'vue2-helpers/vue-router';

export default Vue.extend({
  components: {
    Header,
    Table,
    Products,
    Finall
  },
  setup() {
    const store = useStore();
    const products = ref<Product[]>([]);
    const route = useRoute();
    onMounted(() => {
      store.dispatch('getProducts').then(() => {
        products.value = store.state.products
      }
      )
    })
    return {
      store,
      products,
      route
    }
  }
})
</script>

<style scoped></style>

  