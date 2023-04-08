<template>
    <div class="d-flex gap-2" @mouseover="getIndex">
        <span class="cursor" data-bs-toggle="modal" data-bs-target="#actionViewItemModal"><i class="bi bi-file-earmark-text"></i></span>
        <span class="text-info cursor"><i class="bi bi-pencil"></i></span>
        <span class="text-danger cursor" data-bs-toggle="modal" data-bs-target="#actionDeleteItemModal"><i class="bi bi-trash"></i></span>
    </div>

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
                    <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal" @click.prevent="deleteItem">Delete</button>
                </div>
            </div>
        </div>
    </div>

    <!-- View Modal -->
    <div class="modal fade" id="actionViewItemModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="actionViewItemModal">{{ viewDetailsTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="hasDetail">
                    <div class="row">
                        <div v-for="(detail, index) in viewDetails" :key="index" class="d-flex gap-2">
                            <p>{{ detail.title }}</p>
                            <p>{{ detail.value }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "ActionComponent",
    props: {
        viewDetailsTitle: String,
        viewDetails: Array,
        deleteItem: Function,
        getIndex: Function,
        hasDetail: Boolean
    },
    // methods: {
    //     getIndex(e) {
    //         console.log(e)
    //     }
    // }
}
</script>