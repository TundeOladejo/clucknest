<template>
    <div class="main">
        <div class="row m-0">
            <navigation-panel/>

            <div class="col col-md-9 main-header py-3">
                <ul class="nav justify-content-end align-items-center border-bottom border-secondary pb-3">
                    <li class="nav-item px-3">
                        <router-link class="nav-link" to="/">
                            Marketplace
                        </router-link>
                    </li>
                    <li class="nav-item px-3">
                        <router-link class="nav-link logout" to="/">Logout</router-link>
                    </li>
                </ul>

                <div>

                    <keep-alive>
                        <router-view :key="$route.fullPath"/>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationPanel from '../components/NavigationPanel.vue'
export default {
  components: { NavigationPanel },
    name: "Main"
}
</script>

<style lang="scss">
@import "@/assets/scss/pages/mainpage.scss"
</style>