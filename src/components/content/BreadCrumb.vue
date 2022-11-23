<template>
    <div class="d-flex justify-content-between align-items-center py-5">
        <div class="fw-bold text-uppercase">{{ title }}</div>
        <div v-if="hasAddBtn">
            <custom-button :btnText="'Add New'" :btnClass="'btn-brand-secondary'" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop" />   
        </div>
    </div>
</template>

<script>
import CustomButton from '../CustomButton.vue'

export default {
    name: "BreadCrumb",
    props: {
        title: { type: String },
        hasAddBtn: { type: Boolean, default: true }
    },
    components: { CustomButton },
}
</script>