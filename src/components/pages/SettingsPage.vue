<template>
    <bread-crumb title="Settings" :hasAddBtn="false"/>

    <div class="row">
        <div class="col-6 col-md-4 mb-3" v-for="(item, index) in settings" :key="index">
            <div class="card border rounded py-3 h-100 justify-content-center">
                <router-link class="stretched-link d-flex gap-3 align-items-center" :to="'#'">
                    <span class="fs-3"><i :class="`bi bi-${item.icon}`"></i></span>
                    <span>{{ item.name }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue'

export default {
    name: "SettingsPage",
    components: { BreadCrumb },
    data: () => ({
        settings: [
            { name: "Items Categories", icon: "files" },
            { name: "Items List", icon: "list-ul" },
            { name: "Roles", icon: "ui-checks" },
            { name: "Currency", icon: "cash" }
        ]
    }),
}
</script>
