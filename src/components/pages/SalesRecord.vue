<template>
    <div class="">
        <bread-crumb title="Sales Record" />

        <custom-modal modalTitle="New Sales" :modalInputs="modalInputs" :saveModalForm="saveSalesList"></custom-modal>

        <tables-component :salesList="allReceipts" :isSales="true"/>
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
                isInput: false, id: "flock", label:"Flock Name", selectTitle: "Pick a flock",
                selectOptions: [
                    { name: "Flock A" },
                    { name: "Flock B" },
                    { name: "Flock C" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { type: "date", label: "Date", id: "date", placeholder: "Date", modalWrapperClass: "col-md-6" },
            { type: "text", label: "Item", id: "product", placeholder: "Product", modalWrapperClass: "col-md-12" },
            { type: "number", label: "Quantity", id: "quantity", placeholder: "Quantity", modalWrapperClass: "col-md-6" },
            { type: "number", label: "Unit Value", id: "value", placeholder: "Unit Value", modalWrapperClass: "col-md-6" },
            {   
                isInput: false, id: "paymentMethod", label:"Payment Method", selectTitle: "Select Payment Type",
                selectOptions: [
                    { name: "Cash" },
                    { name: "Electronic Transfer" },
                    { name: "Cheque" },
                    { name: "Deposit" }
                ],
                modalWrapperClass: "col-md-6"
            },
            {   
                isInput: false, id: "paymentStatus", label:"Payment Status", selectTitle: "Select Status",
                selectOptions: [
                    { name: "Cleared" },
                    { name: "Uncleared" },
                    { name: "Reconciled" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { type: "text", label: "Sold To", id: "soldTo", placeholder: "Sold To", modalWrapperClass: "col-md-12" },
        ],
        allReceipts: [],
    }),
    methods: {
        saveSalesList() {
            let inputValues = this.modalInputs.map((i) => i.value)

            this.allReceipts.push({ 
                flock: inputValues[0],
                date: inputValues[1], 
                product: inputValues[2], 
                quantity: inputValues[3], 
                value: inputValues[4],
                totalValue: parseInt(inputValues[3]) * parseInt(inputValues[4]),
                paymentMethod: inputValues[5],
                paymentStatus: inputValues[6],
                soldTo: inputValues[7]
            })
            this.clearForm()
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null)
        }
    }
}
</script>