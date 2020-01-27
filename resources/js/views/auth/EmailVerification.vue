<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                    <form action="recover-password.html" method="post">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">Request new password</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <p class="mt-3 mb-1">
                        <a href="login.html">Login</a>
                    </p>
                    <p class="mb-0">
                        <a href="register.html" class="text-center">Register a new membership</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
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
            .post(route("user.api.auth.email_verification"), this.form_data)
            .then(response => {
              this.submitted = false;
              Vue.prototype.$awn.success();
              this.$router.push({ name: "login" });
            })
            .catch(error => {
              this.submitted = false;
              const { data } = error.response;
              Vue.prototype.$awn.warning(data.message);
            });
        }
      });
    },

    resendVerificatonCode() {
      this.form_data.code = "";
      this.$validator.reset();

      if (!this.resend_submitted) {
        this.resend_submitted = true;
        axios
          .post(route("user.api.auth.resend_verification_code"), {
            email: this.form_data.email
          })
          .then(response => {
            this.resend_submitted = false;
            Vue.prototype.$awn.success();
          })
          .catch(error => {
            this.resend_submitted = false;
            const { data } = error.response;
            Vue.prototype.$awn.warning(data.message);
          });
      }
    }
  }
};
</script>
