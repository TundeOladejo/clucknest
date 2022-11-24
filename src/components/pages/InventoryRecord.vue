<template>
    <bread-crumb title="Inventory Record" />

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Inventory Record</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="mb-2">
                                <div class="form-group contact-form">
                                    <div class="row">
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="text" label="Stocks/Equipment" id="stkEquip" class="form-control"
                                                placeholder="Inventory Name" v-model="stkEquip" />
                                        </div>
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="number" label="Number/Amount" id="number" class="form-control"
                                                placeholder="Quantity" v-model="number" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="number" label="Unit Value" id="unitValue" class="form-control"
                                                placeholder="Unit Value" v-model="unitValue" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="saveExpense">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    <div class="row">
        <div class="col">
            <tables-component :inventoryList="allInventories" :isInventory="true" />
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue';
import TablesComponent from '../content/TablesComponent.vue'

export default {
    name: "InventoryRecord",
    components: { BreadCrumb, TablesComponent },
    data: () => ({
        stkEquip: null,
        number: null,
        unitValue: null,
        totalValue: null,
        dateUpdated: null,
        allInventories: [],
    }),
    methods: {
        saveExpense() {
            this.allInventories.push({ 
                stkEquip: this.stkEquip,
                number: this.number,
                unitValue: this.unitValue,
                totalValue: this.number * this.unitValue,
                dateUpdated: Date.now()
            });
            this.clearForm()
        },
        clearForm() {
            this.stkEquip = null,
            this.number = null,
            this.unitValue = null
        },
    }
}
</script>