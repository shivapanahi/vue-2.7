<template>
    <v-card class=" mx-auto pa-2" min-height="400" outlined tile>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-right">
                            نام کالا
                        </th>
                        <th class="text-right">
                            تعداد
                        </th>
                        <th class="text-right">
                            قیمت کل
                        </th>
                        <th class="text-right">
                            حذف
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, i) in cartItems" :key="i">
                        <td>{{ product.name }} </td>
                        <td class="d-lg-flex bg-surface-variant">
                            <v-text-field @keyup="addToCart(product)" v-model="product.qty" required outlined dense class="ma-1 "></v-text-field>
                        </td>
                        <td>
                            {{ (product.price * product.qty) }}
                        </td>
                        <td>
                            <v-btn depressed color="primary" @click="remove(product.id)">
                                حذف
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script lang="ts">
import { Product } from '@/types/models';
import { computed, ref } from 'vue';
import { useStore } from 'vue2-helpers/vuex';

export default ({
    setup() {
        const store = useStore();
        const cartItems = computed(() => {
            return store.state.cart.cart;
        });
        const remove = (id: number) => {
            store.dispatch('removeProduct', id)
        }
        const addToCart = (product: Product) => {
            store.dispatch('addProduct',{product:product,count:product.qty})
        }
        return {
            cartItems,
            remove,
            addToCart
        }
    }
})
</script>

<style scoped></style>