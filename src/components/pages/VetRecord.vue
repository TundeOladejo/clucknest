<template>
    <bread-crumb title="Vets Record" />

    <custom-modal modalTitle="New Vet Record" :modalInputs="modalInputs" :saveModalForm="saveVetList"></custom-modal>
    
    <tables-component :isVetRecord="true" :vetList="vetList" :isListEmpty="isListEmpty"></tables-component>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue'
import TablesComponent from '../content/TablesComponent.vue'
import CustomModal from '../modals/CustomModal.vue';

export default {
    name: "VetRecord",
    components: { BreadCrumb, CustomModal, TablesComponent },
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
            { type: "date", label: "Date", id: "date", placeholder: "Date Administered", modalWrapperClass: "col-md-6" },
            { type: "text", label: "Medication/Vaccine", id: "medName", placeholder: "Medication/Vaccine", modalWrapperClass: "col-md-12" },
            { type: "number", label: "Number Of Birds", id: "size", placeholder: "Size of birds", modalWrapperClass: "col-md-6" },
            { type: "number", label: "Quantity", id: "quantity", placeholder: "Quantity per bird", modalWrapperClass: "col-md-6" }
        ],
        vetList: [],
        isListEmpty: true
    }),
    methods: {
        saveVetList() {
            let inputValues = this.modalInputs.map((i) => i.value)

            this.vetList.push({ 
                flock: inputValues[0],
                date: inputValues[1], 
                medName: inputValues[2], 
                quantity: inputValues[3]
            })
            this.clearForm()
            this.isListEmpty = false
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null)
        }
    }
}
</script>