<template>
    <div class="modal fade" id="actionViewItemModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="actionViewItemModal">{{ viewDetailsTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="selectedItem">
                    <div class="row">
                        <div v-for="(item, index) in viewDetails" :key="index" class="d-flex gap-2">
                            <p class="fw-bold">{{ item.title }}:</p>
                            <p>{{ item.value }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewDetails",
    props: {
        viewDetailsTitle: String,
        viewDetails: Array,
        selectedItem: Boolean
    }
}
</script>
