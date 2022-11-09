<template>
    <nav class="navbar navbar-expand-lg navbar-light navbarClass">
        <div class="container">
        <a class="navbar-brand header-brand" href="/">clucknest</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
        >
            <div class="navbar-nav" v-for="(link, index) in links" :key="index">
            <router-link class="nav-link header-link" :to="link.url"
                >{{ link.name }} <i class="bi" :class="link.iconClass"></i
            ></router-link>
            </div>
        </div>
        </div>
    </nav>
</template>

<script>
    export default {
    name: "HomeHeader",
    data() {
        return {
        links: [
            { name: "Login", url: "/login", iconClass: "bi-box-arrow-in-right" },
            {
            name: "Register",
            url: "/register",
            iconClass: "bi-person-plus-fill",
            },
        ],
        };
    },
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/pages/homeheader.scss";
</style>
