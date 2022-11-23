<template>
    <div class="">
        <bread-crumb title="Sales Record" />

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Output Record</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="mb-2">
                                <div class="form-group contact-form">
                                    <div class="row">
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="date" id="date" class="form-control"
                                                placeholder="Date" v-model="date" />
                                        </div>
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="text" id="product" class="form-control"
                                                placeholder="Product" v-model="product" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="text" id="quantity" class="form-control"
                                                placeholder="Quantity" v-model="quantity" />
                                        </div>
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="text" id="value" class="form-control"
                                                placeholder="Unit Value" v-model="value" />
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

        <tables-component :receiptList="allReceipts" :isReceipts="true"/>
        <!-- <keep-alive>
            <router-view :key="$route.fullPath" />
        </keep-alive> -->
    </div>
</template>

<script>
import TablesComponent from '../content/TablesComponent.vue'
import BreadCrumb from '../content/BreadCrumb.vue';

export default {
    name: "SalesPage",
    components: { TablesComponent, BreadCrumb },
    data: () => ({
        date: null,
        product: null,
        quantity: null,
        value: null,
        totalValue: null,
        dateUpdated: null,
        allReceipts: [],
    }),
    methods: {
        saveExpense() {
            this.allReceipts.push({ 
                date: this.date, 
                product: this.product, 
                quantity: this.quantity, 
                value: this.value, 
                totalValue: this.quantity * this.value,
                dateUpdated: Date.now() 
            });
            this.clearForm()
        },
        clearForm() {
            this.date = null;
            this.product = null;
            this.quantity = null;
            this.value = null;
        },
    },
    computed: {
        sortedList: function () {
            return this.allExpenses
        },
    },
}
</script>