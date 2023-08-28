<template>
    <div class="main">
        <div class="row m-0">
            <navigation-panel :companyName="companyName" :companyInitials="companyInitials" />

            <div class="col col-md-9 main-header py-3">
                <ul class="nav justify-content-end align-items-center pb-3">
                    <li class="nav-item px-3">
                        <router-link class="nav-link" to="/main">
                            Market Insights
                        </router-link>
                    </li>
                    <li class="nav-item px-3">
                        <router-link class="nav-link logout" @click="logoutUser" to="/login">Logout</router-link>
                    </li>
                </ul>

                <div>
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
export default {
    components: { NavigationPanel },
    name: "MainPage",
    data(){
        return {
            companyName: "",
            companyInitials: ""
        }
    },
    methods: {
        logoutUser() {
            return this.$store.dispatch("auth/logout")
        },
        getCompanyInitials(companyInitials) {
            companyInitials = "Asiwaju Farms"
            const name = companyInitials.split(' ')
            return  `${name[0].charAt(0)}${name[1] ? name[1].charAt(0) : ''}`
            // return this.companyInitials
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        this.companyName = this.currentUser.company_name
        let initials = this.currentUser.company_name
        const name = initials.split(' ')
        this.companyInitials =  `${name[0].charAt(0)}${name[1] ? name[1].charAt(0) : ''}`

    }
}
</script>

<style lang="scss">
@import "@/assets/scss/pages/mainpage.scss";
@import "src/assets/scss/components/form-input";
</style>
