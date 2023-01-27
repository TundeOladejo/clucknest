<template>
    <bread-crumb title="Eggs Record"></bread-crumb>

    <custom-modal modalTitle="Egg Record" :modalInputs="modalInputs" :saveModalForm="saveEggList"></custom-modal>
    
    <tables-component :isEggRecord="true" :eggList="eggList" :isListEmpty="isListEmpty"></tables-component>
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
                    label:"Flock Name",
                    selectTitle: "Pick a flock",
                    selectOptions: [
                        { name: "Flock A" },
                        { name: "Flock B" },
                        { name: "Flock C" }
                    ],
                    modalWrapperClass: "col-md-6",
                },
                { isInput: true, type: "date", label: "Date Picked", id: "date", placeholder: "Date", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "number", label: "Number of good eggs", id: "goodEggs", placeholder: "Good Eggs", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "number", label: "Number of bad eggs", id: "badEggs", placeholder: "Bad Eggs", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "text", label: "Additional Notes", id: "notes", placeholder: "Notes", modalWrapperClass: "col-md-12" }
            ],
            eggList: [],
            isListEmpty: true
        }
    },
    methods: {
        saveEggList() {
            let inputValues = this.modalInputs.map((i) => i.value)

            this.eggList.push({ 
                flock: inputValues[0],
                date: inputValues[1], 
                goodEggs: inputValues[2], 
                badEggs: inputValues[3], 
                totalEggs: parseInt(inputValues[2]) + parseInt(inputValues[3]),
                notes: inputValues[4]
            })
            this.clearForm()
            this.isListEmpty = false
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null)
        },
    },
}
</script>