<template>
  <div class="register">
    <div class="row">
      <div class="col-md-5 right-side">
        <img src="../assets/img/lady-with-hens.jpg" class="img-fluid" alt="" srcset="">
      </div>
      <div class="col-md-7 left-side">
        <router-link to="/" class="home-logo">
          <i class="bi bi-house"></i>
        </router-link>
        <h1 class="left-side__heading pb-3">CLUCKNEST</h1>
        <h3 class="left-side__sub-heading pb-3">Register</h3>
        <p class="left-side__description pb-2">
          Kindly enter your details below. This process should take less than 5
          minutes
        </p>

        <form action="" method="post">
          <div class="mb-2">
            <div class="form-group contact-form">
              <div class="row">
                <div class="col-md-6">
                  <form-input
                    type="text"
                    label="First Name"
                    id="firstName"
                    placeholder="Ishola"
                    @input="firstName = $event"
                    @change="onChange"
                  />
                </div>
                <div class="col-md-6">
                  <form-input
                    type="text"
                    label="Last Name"
                    id="lastName"
                    placeholder="Qudus"
                    @input="lastName = $event"
                    @change="onChange"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <form-input
                    type="email"
                    label="Email"
                    id="email"
                    placeholder="abc@example.com"
                    @input="email = $event"
                    @change="onChange"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <form-input
                    type="password"
                    label="Password"
                    id="password"
                    placeholder="Enter password"
                    @input="password = $event"
                    @change="onChange"
                  />
                </div>
                <div class="col-md-6">
                  <form-input
                    type="password"
                    label="Confirm Password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    @input="confirmPassword = $event"
                    @change="onChange"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <Button type="submit" btnText="Register" btnClass="btnSubmit" @click="submit" />

        <p class="text-center mt-3">
          <em>Already registered? click </em
          ><router-link to="/login"> here </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "../components/forms/FormInput";
import Button from "../components/Button";

export default {
  name: "Register",
  components: {
    FormInput,
    Button,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    validate: function () {
        this.isValid = !!(
            this.firstName &&
            this.lastName &&
            this.email &&
            this.password &&
            this.confirmPassword
        );
    },

    onChange: function () {
        this.validate();
    },

    submit: function () {
      this.$router.push({
          name: "Main",
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/getstarted.scss";

.register {
  height: auto;
}
</style>
