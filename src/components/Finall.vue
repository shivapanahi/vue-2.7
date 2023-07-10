<template>
    <v-card class="mx-auto pa-2" min-height="400" outlined tile>
        <p>قیمت کل:{{ totalPrice }}</p>
        <v-btn depressed color="primary" @click="sendData()">
            ارسال اطلاعات
        </v-btn>
    </v-card>
</template>

<script lang="ts">
import { Cart, Product } from '@/types/models';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vue2-helpers/vuex';
import Swal from "sweetalert2";

export default ({
    setup() {
        const store = useStore();
        const products = ref<Product[]>([]);
        const cartItems = computed(() => {
            return store.state.cart.cart;
        });
        const totalPrice = computed(() => {
            let totalPrice = 0;
            cartItems.value.forEach((c: Product) => {
                totalPrice += parseInt(c?.qty.toString()) * c.price;
            });
            return totalPrice;
        });
        const data = computed((): Cart => {
            return {
                totalPrice: totalPrice.value,
                items: cartItems.value
            };
        });
        const sendData = () => {
            store.dispatch('sendData', data.value).then(() => {
                Swal.fire({
                    text: "محصولات با موفقیت به سبد خرید افزوده شدند!",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "",
                    heightAuto: false,
                    customClass: {
                        confirmButton: "btn fw-semobold btn-light-primary",
                    },
                }).then(function () {
                    store.dispatch('clear')
                });

            }
            )
        }
        return {
            cartItems,
            products,
            sendData,
            totalPrice,
            data
        }
    }
})
</script>

<style scoped></style>