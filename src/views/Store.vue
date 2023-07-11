<template>
  <v-container fill-height>
    <v-row>
      <v-col sm="1" md="2" lg="2"></v-col>
      <v-col sm="10" md="8" lg="8" class="pa-10 rounded">
        <v-card class="pa-10">
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">فروشگاه ها</v-card-title>
          <v-list>
            <v-list-item-group multiple color="indigo">
              <v-list-item v-for="(item, i) in stores" :key="i">
                <v-list-item-content>
                  <router-link :to="{ path: 'home', query: { store: `${item.name}` } }"
                    class="btn btn-sm btn-bg-light btn-active-color-primary me-2 text-decoration-none">
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col sm="1" md="2" lg="2"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { computed, onMounted } from 'vue'
import { useRouter } from 'vue2-helpers/vue-router';
import { useStore } from 'vue2-helpers/vuex';

export default Vue.extend({
  setup() {
    const store = useStore();
    const userName = JSON.parse(localStorage.getItem('user') ?? '{}')
    const router = useRouter()
    const stores = computed(() => {
      return store.state.stores.stores;
    });
    router.beforeEach((to, from, next) => {
      if (to.name !== 'login' && !userName.id) next({ name: 'Login' })
      else next()
    })
    onMounted(() => {
      store.dispatch('getStores', { userId: userName?.id })
    })
    return {
      store,
      stores
    }

  }
})
</script>

<style scoped></style>