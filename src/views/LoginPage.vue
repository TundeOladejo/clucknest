<template>
  <div class="">
    <div class="row m-0 login">
      <div class="d-none d-md-flex col-md-5 right-side p-0">
        <img src="../assets/img/lady-with-hens.jpg" class="img-fluid" alt="" srcset="" />
      </div>
      <div class="col-md-7 container left-side">
        <router-link to="/" class="home-logo">
          <i class="bi bi-house"></i>
        </router-link>
        <h1 class="left-side__heading pb-3">CLUCKNEST</h1>
        <h3 class="left-side__sub-heading pb-3">Login</h3>

        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="form-input__wrapper">
            <label for="email">Email</label>
            <Field name="email" type="text" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-input__wrapper">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn btn-brand-secondary" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span> Login</span>
            </button>
          </div>

          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>

        <p class="text-center mt-3">
          <em>Not yet registered? click </em>
          <router-link class="text-info" to="/register"> here </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "LoginPage",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/main/dashboard");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/main/dashboard");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/getstarted.scss";
@import "@/assets/scss/components/form-input";
</style>
