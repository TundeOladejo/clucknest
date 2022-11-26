<template>
    <bread-crumb title="Eggs Record"></bread-crumb>

    <custom-modal modalTitle="Egg Record" :modalInputs="modalInputs"></custom-modal>
    <tables-component :isEggRecord="true" :eggList="eggList"></tables-component>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue'
import TablesComponent from '../content/TablesComponent.vue'
import CustomModal from '../modals/CustomModal.vue';
export default {
    components: { BreadCrumb, TablesComponent, CustomModal },
    name: "EggsRecord",
    data() {
        return {
            modalInputs: [
                {   isInput: false,
                    id: "flock",
                    placeholder: "Flock",
                    selectTitle: "Flock",
                    selectOptions: [
                        { name: "Flock A" },
                        { name: "Flock B" },
                        { name: "Flock C" }
                    ],
                    modalWrapperClass: "col-md-6"
                },
                { isInput: true, type: "date", id: "date", placeholder: "Date", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "number", id: "goodEggs", placeholder: "Good Eggs", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "number", id: "badEggs", placeholder: "Bad Eggs", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "text", id: "notes", placeholder: "Notes", modalWrapperClass: "col-md-12" }
            ],
            eggList: []
        }
    },
    // methods: {
    //     saveExpense() {
    //         this.allExpenses.push({ date: this.date, material: this.material, quantity: this.quantity, cost: this.cost, dateUpdated: Date.now() });
    //         this.clearForm()
    //     },
    //     clearForm() {
    //         this.date = null;
    //         this.material = null;
    //         this.cost = null;
    //         this.quantity = null;
    //         this.dateCreated = null;
    //     },
    // }
}
</script>