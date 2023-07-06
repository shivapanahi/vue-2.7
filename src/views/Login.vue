<template>
  <div class="login">
    <v-container fill-height>
      <v-row>
        <v-col sm="1" md="3" lg="4"></v-col>
        <v-col sm="10" md="6" lg="4" class="pa-10 rounded">
          <v-card class="pa-10" max-width="500">
            <v-form @submit.prevent="signIn" ref="form" v-model="valid" lazy-validation>
              <v-row justify="center">
                <v-col cols="12" sm="6" md="12">
                  <p class="text-right font-weight-bold" id="title">
                    <strong>ورود به مدیریت</strong>
                  </p>
                  <v-text-field required :rules="[rules.required]" maxlength="12" placeholder="نام کاربری"
                    v-model="data.userName" outlined dense prepend-inner-icon="mdi-account"></v-text-field>
                  <v-text-field required :rules="[rules.required]" placeholder="رمز عبور" v-model="data.password" outlined
                    dense type="password" maxlength="30" prepend-inner-icon="mdi-lock"></v-text-field>
                  <v-btn :disabled="!valid" type="submit" id="btn-sign-in" class="ml-0 btn-login" large width="100%">
                    ورود
                  </v-btn>
                </v-col>
              </v-row>
              <br />
            </v-form>
          </v-card>
        </v-col>
        <v-col sm="1" md="3" lg="4"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Auth } from '@/types/models';
import { defineComponent } from 'vue'
import { ref } from 'vue';
import { useRouter } from 'vue2-helpers/vue-router';
import { useStore } from 'vue2-helpers/vuex';
import Swal from "sweetalert2";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const form = ref<any>(null);
    const rules = store.state.rules
    const data = ref<Auth>({
      userName: "",
      password: ""
    });
    const signIn = () => {
      if (form.value.validate()) {
        store.dispatch('login', data.value).then(()=>{
          Swal.fire({
          text: "ورود شما موفقیت آمیز بود!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(function () {
          router.push('/store'); 
        });
        })
        .catch(()=>{
          Swal.fire({
          text: "اطلاعات شما صحیح نمی باشد!",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        })
        })
       
      }
    }
    return {
      valid: true,
      data,
      signIn,
      form,
      rules
    }
  },
})
</script>

  