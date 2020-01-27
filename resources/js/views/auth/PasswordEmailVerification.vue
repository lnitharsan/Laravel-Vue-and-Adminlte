<template>
  <div class="container-fluid">
    <div class="container p-t-50 p-b-50">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4">
          <div class="row">
            <div class="col-12">
              <div class="p-b-50 text-center">
                <img :src="Laravel.baseUrl+'/public/img/matrimony.png'" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-4">
          <div class="text-center">
            <h2 class="text-center">Enter your code</h2>
            <p
              class="py-3"
            >We sent a 6-digit verification code to {{form_data.email}}. You may need to check your junk email or spam folder.</p>

            <form
              @submit.prevent="submitEmailVerification"
              id="emailVerificationForm"
              role="form"
              autocomplete="off"
              class="email-verification-form"
              method="post"
            >
              <div class="form-group">
                <input
                  id="securityCode"
                  name="code"
                  placeholder="Enter security code"
                  class="form-control text-center"
                  type="text"
                  maxlength="6"
                  v-model="form_data.code"
                  v-validate="'required|digits:6'"
                  data-vv-as="security code"
                  :class="{ 'is-invalid': errors.has('code') }"
                />
                <div class="invalid-feedback" v-show="errors.has('code')">{{ errors.first('code') }}</div>

                <div class="row">
                  <div class="col-12">
                    <button type="button" class="btn-link" @click="resendVerificatonCode()">Resend</button>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <input
                  name="recover-submit"
                  class="btn btn-lg btn-primary btn-block"
                  value="Continue"
                  type="submit"
                  :disabled="submitted"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12">
          <div class="p-t-30 text-center">
            <router-link :to="{name: 'login'}" class="txt1 bo1 hov1">Return to login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoading: true,
      submitted: false,
      resend_submitted: false,
      form_data: {
        email: "",
        code: ""
      }
    };
  },
  components: {},
  mounted() {
    if (this.$route.query.email) {
      this.form_data.email = this.$route.query.email;
    }
  },
  computed: {},
  methods: {
    submitEmailVerification(e) {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.submitted = true;
          axios
            .post(route("user.api.auth.password.verify"), this.form_data)
            .then(response => {
              this.submitted = false;
              this.$router.push({ name: "password_reset_form" });
              this.$router.push({
                name: "password_reset_form",
                query: {
                  token: response.data.token,
                  email: response.data.email
                }
              });
            })
            .catch(error => {
              this.submitted = false;
              this.$setLaravelValidationErrorsFromResponse(error.response.data);
            });
        }
      });
    },

    resendVerificatonCode() {
      if (!this.resend_submitted) {
        this.resend_submitted = true;
        axios
          .post(route("user.api.auth.password.email"), {
            email: this.form_data.email
          })
          .then(response => {
            this.resend_submitted = false;
            Vue.prototype.$awn.success();
          })
          .catch(error => {
            this.resend_submitted = false;
            this.$setLaravelValidationErrorsFromResponse(error.response.data);
          });
      }
    }
  }
};
</script>