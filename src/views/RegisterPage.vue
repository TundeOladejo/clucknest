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

                <form action="" method="post">
                    <div class="mb-2">
                        <div class="form-group contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <form-input type="text" label="Company Name" id="companyName"
                                        placeholder="Abc Farms" @input="companyName = $event" @change="onChange" />
                                </div>
                                <div class="col-md-6">
                                    <form-input type="email" label="Email" id="email" placeholder="abc@example.com"
                                        @input="email = $event" @change="onChange" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <form-input type="text" label="Address" id="address"
                                        placeholder="No 1. abc street, xyz" @input="address = $event"
                                        @change="onChange" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <form-input type="password" label="Password" id="password"
                                        placeholder="Enter password" @input="password = $event" @change="onChange" />
                                </div>
                                <div class="col-md-6">
                                    <form-input type="password" label="Confirm Password" id="confirmPassword"
                                        placeholder="Confirm Password" @input="confirmPassword = $event"
                                        @change="onChange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <custom-button type="submit" btnText="Register" btnClass="btn-brand-secondary" @click="submit" />

                <p class="text-center mt-3">
                    <em>Already registered? click </em>
                    <router-link class="text-info" to="/login"> here </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import FormInput from "../components/forms/FormInput";
import CustomButton from "../components/CustomButton";

export default {
    name: "RegisterPage",
    components: {
        FormInput,
        CustomButton,
    },
    data() {
        return {
            companyName: null,
            address: null,
            email: null,
            password: null,
            confirmPassword: null
        }
    },
    methods: {
        validate: function () {
            this.isValid = !!(
                this.companyName &&
                this.address &&
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
                name: "MainPage",
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
