<template>
    <div class="col-12 col-md-3 sidebar">
        <div class="d-flex justify-content-between align-items-center gap-3">
            <span class="nav-title">Cluck Farms</span>
            <span class="nav-avatar fw-bold">CF</span>
            <span class="d-md-none fs-3 nav-collapse" data-bs-toggle="collapse" data-bs-target="#collapseNavigation"
                aria-controls="collapseNavigation" @click="toggleNavbar">
                <i class="bi bi-list"></i>
            </span>
        </div>

        <div class="collapse mt-5 d-md-block" id="collapseNavigation" :class="{ 'show': isNavbarOpen }">
            <div class="mb-5">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" @click="collapseNavbar">
                        <router-link class="stretched-link" :to="{ name: 'MainDashboard' }">Dashboard</router-link>
                    </li>
                </ul>
            </div>

            <div class="mb-5">
                <ul class="list-group list-group-flush">
                    <li v-for="(link, index) in navLinks" :key="index" class="list-group-item" @click="collapseNavbar">
                        <router-link class="stretched-link" :to="{ name: link.name }">{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>

            <div class="mb-5">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" @click="collapseNavbar">Financial Statement</li>
                </ul>
            </div>

            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" @click="collapseNavbar">
                        <router-link class="stretched-link" :to="{ name: 'CompanyStaffs' }">Staffs</router-link>
                    </li>
                    <li class="list-group-item" @click="collapseNavbar">
                        <router-link class="stretched-link" :to="{ name: 'ClientsAndVendors' }">Contacts</router-link>
                    </li>
                    <li class="list-group-item" @click="collapseNavbar">
                        <router-link class="stretched-link" :to="{ name: 'SettingsPage' }">Settings</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationPanel",
    data() {
        return {
            isNavbarOpen: false,
            navLinks: [
                { name: "BirdsRecord", label: "Birds" },
                { name: "EggsRecord", label: "Eggs" },
                { name: "ExpensesRecord", label: "Expenses" },
                { name: "SalesRecord", label: "Sales" },
                { name: "VetRecord", label: "Vet" },
                { name: "FeedingRecord", label: "Feed" },
            ]
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        collapseNavbar() {
            this.isNavbarOpen = false;
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/components/navigation.scss";
</style>
