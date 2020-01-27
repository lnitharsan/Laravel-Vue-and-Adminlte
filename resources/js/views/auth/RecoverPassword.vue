<template>
  <div class="hold-transition login-page">
      <div class="login-box">
          <div class="login-logo">
              <a href="../../index2.html"><b>Admin</b>LTE</a>
          </div>
          <!-- /.login-logo -->
          <div class="card">
              <div class="card-body login-card-body">
                  <p class="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

                  <form action="login.html" method="post">
                      <div class="input-group mb-3">
                          <input type="password" class="form-control" placeholder="Password">
                          <div class="input-group-append">
                              <div class="input-group-text">
                                  <span class="fas fa-lock"></span>
                              </div>
                          </div>
                      </div>
                      <div class="input-group mb-3">
                          <input type="password" class="form-control" placeholder="Confirm Password">
                          <div class="input-group-append">
                              <div class="input-group-text">
                                  <span class="fas fa-lock"></span>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12">
                              <button type="submit" class="btn btn-primary btn-block">Change password</button>
                          </div>
                          <!-- /.col -->
                      </div>
                  </form>

                  <p class="mt-3 mb-1">
                      <a href="login.html">Login</a>
                  </p>
              </div>
              <!-- /.login-card-body -->
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
      form_data: {
        token: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  components: {},
  mounted() {
    if (this.$route.query.token) {
      this.form_data.token = this.$route.query.token;
    }
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
            .post(route("user.api.auth.password.reset"), this.form_data)
            .then(response => {
              // Login after reset password
              this.$auth
                .login(this.form_data.email, this.form_data.password)
                .then(() => {
                  this.submitted = false;
                  this.$router.push({ name: "home" });
                })
                .catch(error => {
                  this.$router.push({ name: "login" });
                });
            })
            .catch(error => {
              this.submitted = false;
              this.$setLaravelValidationErrorsFromResponse(error.response.data);
            });
        }
      });
    }
  }
};
</script>
