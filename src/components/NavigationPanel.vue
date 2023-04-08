<template>
    <div class="col-12 col-md-3 sidebar">
        <div class="d-flex justify-content-between align-items-center gap-3">
            <p class="nav-title">Obasanjo Farms</p>
            <!-- <img src="" alt="farm avatar" class="img-fluid farm-avatar" > -->
            <p class="nav-avatar fw-bold">OF</p>
            <p class="d-md-none fs-3 nav-collapse" data-bs-toggle="collapse"
                data-bs-target="#collapseExample" aria-controls="collapseExample">
               <i class="bi bi-list"></i>
            </p>
        </div>

        <div class="collapse mt-5 d-md-block" id="collapseExample">
            <div class="mb-5">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Dashboard</li>
                </ul>
            </div>

            <div class="mb-5">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'BirdsRecord' }">Birds</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'EggsRecord' }">Egg
                            Collection</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'ExpensesRecord' }">Expenses</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'SalesRecord' }">Sales</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'VetRecord' }">Vet Care</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'FeedingRecord' }">Feeding</router-link>
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
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'CompanyStaffs' }">Staffs</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link class="stretched-link" :to="{ name: 'ClientsAndVendors' }">Contacts</router-link>
                    </li>
                    <li class="list-group-item">Roles</li>
                    <li class="list-group-item">Settings</li>
                </ul>
            </div>
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
