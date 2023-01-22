<template>
    <div class="">
        <bread-crumb title="Expense Record" />

        <custom-modal modalTitle="New Expense" :modalInputs="modalInputs" :saveModalForm="saveExpenseList"></custom-modal>
        <tables-component :expenseList="allExpenses" :isExepnse="true" />
    </div>
</template>

<script>
import TablesComponent from '../content/TablesComponent.vue'
import BreadCrumb from '../content/BreadCrumb.vue'
import CustomModal from '../modals/CustomModal.vue'

export default {
    name: "ExpensesRecord",
    components: { TablesComponent, BreadCrumb, CustomModal },
    data: () => ({
        modalInputs: [
            {   
                isInput: false,
                id: "flock",
                label:"Flock Name",
                selectTitle: "Pick a flock",
                selectOptions: [
                    { name: "Flock A" },
                    { name: "Flock B" },
                    { name: "Flock C" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { type: "date", label: "Date", id: "date", placeholder: "Date", modalWrapperClass: "col-md-6" },
            { type: "text", label: "Item", id: "item", placeholder: "Item", modalWrapperClass: "col-md-12" },
            { type: "text", label: "Quantity", id: "quantity", placeholder: "Quantity", modalWrapperClass: "col-md-6" },
            { type: "number", label: "Cost", id: "cost", placeholder: "Cost", modalWrapperClass: "col-md-6" },
            {   
                isInput: false,
                id: "paymentMethod",
                label:"Payment Method",
                selectTitle: "Select Payment Type",
                selectOptions: [
                    { name: "Cash" },
                    { name: "Electronic Transfer" },
                    { name: "Cheque" },
                    { name: "Deposit" }
                ],
                modalWrapperClass: "col-md-6"
            },
            {   
                isInput: false,
                id: "paymentStatus",
                label:"Payment Status",
                selectTitle: "Select Status",
                selectOptions: [
                    { name: "Cleared" },
                    { name: "Uncleared" },
                    { name: "Reconciled" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { type: "text", label: "Purchased From", id: "purchasedFrom", placeholder: "Purchased From", modalWrapperClass: "col-md-12" },
        ],
        allExpenses: [],
    }),
    methods: {
        saveExpenseList() {
            let inputValues = this.modalInputs.map((i) => i.value)

            this.allExpenses.push({ 
                flock: inputValues[0],
                date: inputValues[1], 
                item: inputValues[2], 
                quantity: inputValues[3], 
                cost: inputValues[4],
                paymentMethod: inputValues[5],
                paymentStatus: inputValues[6],
                paymentFrom: inputValues[7]
            })
            this.clearForm()
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null)
        },
    }
}
</script>