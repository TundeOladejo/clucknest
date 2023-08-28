<template>
    <div class="register">
        <div class="row m-0">
            <div class="d-none d-md-flex col-md-5 right-side p-0">
                <img src="../assets/img/lady-with-hens.jpg" class="img-fluid" alt="" srcset="">
            </div>
            <div class="col-md-7 container left-side">
                <router-link to="/" class="home-logo">
                    <i class="bi bi-house"></i>
                </router-link>
                <h1 class="left-side__heading pb-3">CLUCKNEST</h1>
                <h3 class="left-side__sub-heading pb-3">Register</h3>
                <p class="left-side__description pb-2">
                    Kindly enter your details below. This process should take less than 5
                    minutes
                </p>

                <Form @submit="registerUser" :validation-schema="schema" class="form-group contact-form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-input__wrapper">
                                <label for="first_name">First Name</label>
                                <Field name="first_name" type="text" class="form-control" />
                                <ErrorMessage name="first_name" class="error-feedback" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-input__wrapper">
                                <label for="last_name">Last Name</label>
                                <Field name="last_name" type="text" class="form-control" />
                                <ErrorMessage name="last_name" class="error-feedback" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-input__wrapper">
                                <label for="company_name">Company Name</label>
                                <Field name="company_name" type="text" class="form-control" />
                                <ErrorMessage name="company_name" class="error-feedback" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-input__wrapper">
                                <label for="email">Email</label>
                                <Field name="email" type="text" class="form-control" />
                                <ErrorMessage name="email" class="error-feedback" />
                            </div>
                        </div>
                    </div>

                    <div class="form-input__wrapper">
                        <label for="address">Address</label>
                        <Field name="address" type="text" class="form-control" />
                        <ErrorMessage name="address" class="error-feedback" />
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-input__wrapper">
                                <label for="password">Password</label>
                                <Field name="password" type="password" class="form-control " />
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-input__wrapper">
                                <label for="password_confirm">Confirm Password</label>
                                <Field name="password_confirm" type="password" class="form-control " />
                                <ErrorMessage name="password_confirm" class="error-feedback" />
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <button class="btn btn-brand-secondary" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span> Register</span>
                        </button>
                    </div>

                    <div class="form-group">
                        <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                            {{ message }}
                        </div>
                    </div>
                </Form>

                <p class="text-center mt-3">
                    <em>Already registered? click </em>
                    <router-link class="text-info" to="/login"> here </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: "RegisterPage",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            first_name: yup
                .string()
                .required("First name is required!")
                .min(2, "Must be at least 2 characters!"),
            last_name: yup
                .string()
                .required("Last name is required!")
                .min(2, "Must be at least 2 characters!"),
            company_name: yup
                .string()
                .required("Company/Farm name is required!")
                .min(2, "Must be at least 2 characters!"),
            email: yup
                .string()
                .required("Email is required!")
                .email("Email is invalid!")
                .max(50, "Must be maximum 50 characters!"),
            address: yup.string().required("Address is required!"),
            password: yup
                .string()
                .required("Password is required!")
                .min(6, "Must be at least 6 characters!")
                .max(40, "Must be maximum 40 characters!"),
            password_confirm: yup
                .string()
                .required("Password is required!")
                .min(6, "Must be at least 6 characters!")
                .max(40, "Must be maximum 40 characters!"),
        });
        return {
            successful: false,
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
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/main/dashboard");
        }
    },
    methods: {
        registerUser: function (user) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            this.$store.dispatch("auth/register", user).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;

                    setTimeout(() => {
                        this.$router.push("/login");
                    }, 2000);
                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                },
            );
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/getstarted.scss";
@import "@/assets/scss/components/form-input";

.register {
    height: auto;
}
</style>
