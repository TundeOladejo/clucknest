<template>
    <div class="d-flex gap-2">
        <span class="cursor" data-bs-toggle="modal" data-bs-target="#actionViewItemModal" @click="viewItem"><i
                class="bi bi-file-earmark-text"></i></span>
        <span class="text-info cursor"><i class="bi bi-pencil"></i></span>
        <span class="text-danger cursor" data-bs-toggle="modal" data-bs-target="#actionDeleteItemModal"><i
                class="bi bi-trash"></i></span>
    </div>

    <view-details :viewDetails="viewDetails" :viewDetailsTitle="viewDetailsTitle"
        :selectedItem="selectedItem"></view-details>

    <!-- Delete Modal -->
    <div class="modal fade" id="actionDeleteItemModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="actionDeleteItemModal">Delete Item</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this item?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal"
                        @click.prevent="deleteItem">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ViewDetails from '../modals/ViewDetails.vue';

export default {
    name: "ActionComponent",
    components: { ViewDetails },
    props: {
        viewDetailsTitle: String,
        deleteItem: Function,
        viewItem: Number,
        selectedItem: Boolean,
        viewDetails: Array
    }
}
</script>
