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
                    label:"Flock Name",
                    selectTitle: "Pick a flock",
                    selectOptions: [
                        { name: "Flock A" },
                        { name: "Flock B" },
                        { name: "Flock C" }
                    ],
                    modalWrapperClass: "col-md-6"
                },
                { isInput: true, type: "date", label: "Date Picked", id: "date", placeholder: "Date", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "number", label: "Number of good eggs", id: "goodEggs", placeholder: "Good Eggs", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "number", label: "Number of bad eggs", id: "badEggs", placeholder: "Bad Eggs", modalWrapperClass: "col-md-6" },
                { isInput: true, type: "text", label: "Additional Notes", id: "notes", placeholder: "Notes", modalWrapperClass: "col-md-12" }
            ],
            eggList: [],
        }
    },
}
</script>