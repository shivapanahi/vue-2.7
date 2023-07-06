<template>
    <v-card  class="mx-auto pa-2"   min-height="400"  utlined tile>
        <v-list>
            <v-list-item-group multiple color="indigo">
                <v-list-item v-for="(item, i) in products" :key="i">
                    <v-list-item-content>
                        <v-list-item-title @click="addToCart(item)">{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import { Product } from '@/types/models';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vue2-helpers/vuex';

export default ({
    setup() {
        const store = useStore();
        const products = computed(() => {
            return store.state.products.products;
        });
        const addToCart = (product: Product) => {
            store.dispatch('addProduct', product)
        }
        onMounted(() => {
            store.dispatch('getProducts')
        })
        return {
            addToCart,
            products
        }
    }
})
</script>

<style scoped></style>