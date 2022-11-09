<template>
    <div class="">
        <div class="row m-0 login">
            <div class="col-md-5 right-side p-0">
                <img src="../assets/img/lady-with-hens.jpg" class="img-fluid" alt="" srcset="">
            </div>
            <div class="col-md-7 left-side">
                <router-link to="/" class="home-logo">
                    <i class="bi bi-house"></i>
                </router-link>
                <h1 class="left-side__heading pb-3">CLUCKNEST</h1>
                <h3 class="left-side__sub-heading pb-3">Login</h3>

                <form action="" method="post">
                    <div class="mb-2">
                        <div class="form-group contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <form-input type="email" label="Email" id="email" placeholder="abc@example.com"
                                        @input="email = $event" @change="onChange" />
                                </div>
                                <div class="col-md-6">
                                    <form-input type="password" label="Password" id="password"
                                        placeholder="Enter password" @input="password = $event" @change="onChange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <Button type="submit" btnText="Login" btnClass="btnSubmit" />

                <p class="text-center mt-3">
                    <em>Not yet registered? click </em>
                    <router-link to="/register"> here </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import FormInput from "../components/forms/FormInput";
import Button from "../components/Button";

export default {
    name: "Login",
    components: {
        FormInput,
        Button,
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/getstarted.scss";
</style>
