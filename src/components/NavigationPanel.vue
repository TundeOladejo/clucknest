<template>
    <div class="col col-md-3 sidebar">
        <div class="p-3 mb-5 d-flex justify-content-between align-items-center border-bottom border-white">
            <span class="nav-title">Obasanjo Farms</span>
            <!-- <img src="" alt="farm avatar" class="img-fluid farm-avatar" > -->
            <span class="nav-avatar fw-bold">OF</span>
        </div>

        <div class="mb-5">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Dashboard</li>
            </ul>
        </div>

        <div class="mb-5">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <router-link to="/main">Inventory</router-link>
                </li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'BirdsPage' }">Birds</router-link>
                </li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'ExpensesPage'}">Expenses</router-link>
                </li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'SalesPage'}">Sales</router-link>
                </li>
            </ul>
        </div>

        <div class="mb-5">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Financial Statement</li>
            </ul>
        </div>

        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Staffs</li>
                <li class="list-group-item">Roles</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationPanel"
}
</script>

<style lang="scss">
@import "@/assets/scss/components/navigation.scss";
</style>
