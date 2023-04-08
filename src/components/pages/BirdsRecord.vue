<template>
    <bread-crumb title="Birds Record" />

    <custom-modal modalTitle="New Flock" :modalInputs="modalInputs" :saveModalForm="saveFlock"></custom-modal>
    <div v-if="isListEmpty == true" class="d-flex justify-content-center fs-1 gap-2">
        <i class="bi bi-exclamation-circle"></i>
        <span>No Record Yet</span>
    </div>
    <div v-else class="row mt-3">
        <div v-for="(card, index) in cards" :key="index" class="col-md-6 col-lg-4 mb-3">
            <div class="card p-1 shadow">
                <div class="card-header bg-white d-flex justify-content-between flex-wrap">
                    <div class="d-flex">
                        <span class="fw-bold text-truncate" style="max-width: 180px;">{{ card.flockName }}</span>
                    </div>
                    <action-component></action-component>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span class="fw-bold">Date Acquired:</span>
                                <span class="d-inline-block text-truncate" style="max-width: 150px;">{{ card.date }}</span>
                            </div>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="fw-bold">Type:</span>
                                <span>{{ card.birdType}}</span>
                            </div>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="fw-bold">Flock Size:</span>
                                <span>{{ card.flockSize }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue';
import ActionComponent from '../content/ActionComponent.vue';
import CustomModal from '../modals/CustomModal.vue'

export default {
    name: "BirdsRecord",
    components: { BreadCrumb, CustomModal, ActionComponent },
    data: () => ({
        modalInputs: [
            { type: "text", label: "Flock Name", id: "flockName", placeholder: "Flock Name", modalWrapperClass: "col-md-12" },
            { type: "date", label: "Date Acquired", id: "date", modalWrapperClass: "col-md-6" },
            {   
                isInput: false, id: "birdType", label:"Bird Type", selectTitle: "Select Bird Type",
                selectOptions: [
                    { name: "Layers" },
                    { name: "Broilers" },
                    { name: "Mixed" },
                    { name: "Others" }
                ],
                modalWrapperClass: "col-md-6"
            },
            {   
                isInput: false, id: "breedType", label:"Breed Type", selectTitle: "Select Breed",
                selectOptions: [
                    { name: "Leghorn" },
                    { name: "Rhode Island Red" },
                    { name: "Kuroiler" },
                    { name: "Kenbro" },
                    { name: "Kienyegi" },
                    { name: "Mixed" },
                    { name: "Unknown" }
                ],
                modalWrapperClass: "col-md-6"
            },
            {   
                isInput: false, id: "acquisitionMethod", label:"Acquisition Method", selectTitle: "Select Bird Type",
                selectOptions: [
                    { name: "Bought" },
                    { name: "Hatched" },
                    { name: "Gift In" },
                    { name: "Donation In" }
                ],
                modalWrapperClass: "col-md-6"
            },
            { isNumber: true, isInput: false, label: "Flock Size", id: "flockSize", modalWrapperClass: "col-md-6", value: "0" },
            { type: "text", label: "Flock Source", id: "flockSource", placeholder: "Flock Source", modalWrapperClass: "col-md-12" },
            { type: "text", label: "Description", id: "description", placeholder: "Flock Description", modalWrapperClass: "col-md-12" }
        ],
        cards: [],
        isListEmpty: true
    }),
    methods: {
        saveFlock() {
            let inputValues = this.modalInputs.map((i) => i.value || i.selected)

            this.cards.push({
                flockName: inputValues[0],
                date: inputValues[1],
                birdType: inputValues[2],
                flockSize: parseInt(inputValues[5])
            })
            this.clearForm()
            this.isListEmpty = false
        },
        clearForm() {
            this.modalInputs.map((i) => i.value = null);
            this.modalInputs.map((i) => i.selected = [])
        }
    },
}
</script>