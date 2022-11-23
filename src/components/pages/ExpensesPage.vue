<template>
    <div class="">
        <bread-crumb title="Expense Record" />

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">New Expense</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="mb-2">
                                <div class="form-group contact-form">
                                    <div class="row">
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="date" label="Date" id="date" class="form-control"
                                                placeholder="Date" v-model="date" />
                                        </div>
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="text" label="Material" id="material" class="form-control"
                                                placeholder="Material" v-model="material" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="number" label="Quantity" id="quantity" class="form-control"
                                                placeholder="Quantity" v-model="quantity" />
                                        </div>
                                        <div class="col-md-6 form-input__wrapper">
                                            <input type="text" label="Cost" id="cost" class="form-control"
                                                placeholder="Cost" v-model="cost" />
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

        <tables-component :expenseList="allExpenses" :isExepnse="true" />
        <!-- <keep-alive>
            <router-view :key="$route.fullPath" />
        </keep-alive> -->
    </div>
</template>

<script>
import TablesComponent from '../content/TablesComponent.vue'
import BreadCrumb from '../content/BreadCrumb.vue';

export default {
    name: "ExpensesPage",
    components: { TablesComponent, BreadCrumb },
    data: () => ({
        date: null,
        material: null,
        quantity: null,
        cost: null,
        dateUpdated: null,
        allExpenses: [],
    }),
    methods: {
        saveExpense() {
            this.allExpenses.push({ date: this.date, material: this.material, quantity: this.quantity, cost: this.cost, dateUpdated: Date.now() });
            this.clearForm()
        },
        clearForm() {
            this.date = null;
            this.material = null;
            this.cost = null;
            this.quantity = null;
            this.dateCreated = null;
        },
    },
    computed: {
        sortedList: function () {
            return this.allExpenses
        },
    },
}
</script>