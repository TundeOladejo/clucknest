<template>
    <div class="homepage">
        <HomeHeader />
        <HomepageHero />
    </div>
</template>

<script lang="js">
import HomeHeader from "@/components/layouts/HomeHeader";
import HomepageHero from "../components/HomepageHero";

export default {
    name: "HomePage",
    components: {
        HomeHeader,
        HomepageHero,
    },
};
</script>

<style lang="scss">
@import "../assets/scss/pages/homepage.scss";
</style>
