<template>
    <div class="main">
        <div class="row m-0">
            <navigation-panel />

            <div class="col col-md-9 main-header py-3">
                <ul class="nav justify-content-end align-items-center pb-3">
                    <li class="nav-item px-3">
                        <router-link class="nav-link" to="/main">
                            Farm Market
                        </router-link>
                    </li>
                    <li class="nav-item px-3">
                        <router-link class="nav-link logout" to="/">Logout</router-link>
                    </li>
                </ul>

                <div>
                    <!-- <expenses-page></expenses-page> -->
                    <router-view v-slot="{ Component }" :key="$route.fullPath">
                        <keep-alive>
                            <component :is="Component" />
                        </keep-alive>
                    </router-view>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import NavigationPanel from '../components/NavigationPanel.vue'
// import ExpensesPage from '../components/pages/ExpensesPage.vue'
export default {
    // components: { NavigationPanel, ExpensesPage },
     components: { NavigationPanel },
    name: "MainPage"
}
</script>

<style lang="scss">
@import "@/assets/scss/pages/mainpage.scss";
@import "src/assets/scss/components/form-input";
</style>