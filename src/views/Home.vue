<template>
    <div class="homepage">
        <HomeHeader />
        <HomepageHero />
    </div>
</template>

<script>
import HomeHeader from "@/components/layouts/HomeHeader";
import HomepageHero from "../components/HomepageHero";

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomepageHero,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/pages/homepage.scss";
</style>
